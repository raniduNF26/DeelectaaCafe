import express from 'express';
import Reservation from '../models/Reservation.js';
import { sendReservationEmail } from '../utils/mailer.js';

const router = express.Router();

// Create a reservation
router.post('/', async (req, res) => {
  const { name, email, phone, date, time, guests, specialRequests } = req.body;
  try {
    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      time,
      guests,
      specialRequests
    });
    const savedReservation = await newReservation.save();
    
    // Send pending email asynchronously
    sendReservationEmail(email, name, date, time, 'pending').catch(console.error);

    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(400).json({ message: 'Error creating reservation', error });
  }
});

// Get all reservations (Admin only - placeholder)
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reservations', error });
  }
});

// Update reservation status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!['pending', 'confirmed', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    // Send status update email asynchronously
    sendReservationEmail(
      updatedReservation.email, 
      updatedReservation.name, 
      updatedReservation.date.toString(), 
      updatedReservation.time, 
      status as 'confirmed' | 'rejected'
    ).catch(console.error);

    res.json(updatedReservation);
  } catch (error) {
    res.status(500).json({ message: 'Error updating reservation status', error });
  }
});

export default router;
