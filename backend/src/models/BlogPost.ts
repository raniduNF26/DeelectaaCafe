import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  publishedAt: Date;
}

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true, default: 'Deelectaa Team' },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
