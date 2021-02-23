import { Document } from 'mongoose';

export interface User extends Document {
  Name: string;
  email: string;
  password: string;
  resetLink: string[];
}
