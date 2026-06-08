import express from 'express';
import { sendContactEmail } from '../utils/mailer.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    await sendContactEmail(firstName, lastName, email, message);
    res.status(200).json({ message: 'Contact email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending contact email', error });
  }
});

export default router;
