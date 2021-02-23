import * as mongoose from 'mongoose';

export const UserModel = new mongoose.Schema(
  {
    Name: String,
    email: String,
    password: String,
    resetLink: {
      data: String,
      default: '',
    },
  },
  {
    versionKey: false,
  },
);
