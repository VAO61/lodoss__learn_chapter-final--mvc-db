import { Document } from 'mongoose';

// export interface Cat extends Document {

export interface Item extends Document {
  id?: string;
  name: string;
  description?: string;
  qty: number;
}
