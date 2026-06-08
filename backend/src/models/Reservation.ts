import mongoose, { Schema, Document } from 'mongoose';

export interface IReservation extends Document {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  specialRequests?: string;
}

const ReservationSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled'], 
    default: 'pending' 
  },
  specialRequests: { type: String },
}, { timestamps: true });

export default mongoose.model<IReservation>('Reservation', ReservationSchema);
