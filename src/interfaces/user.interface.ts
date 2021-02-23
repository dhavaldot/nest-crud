import { Document, ObjectId } from 'mongoose';

export interface User extends Document {
  Name: String;
  email: String;
  password: String;
  resetLink: String[];
}
