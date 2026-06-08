import mongoose, { Schema, Document } from 'mongoose';

export interface IMenuItem extends Document {
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Food' | 'Desserts' | 'Drinks';
  image: string;
  isAvailable: boolean;
  isFeatured: boolean;
}

const MenuItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['Coffee', 'Food', 'Desserts', 'Drinks'] 
  },
  image: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);
