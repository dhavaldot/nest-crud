/* eslint-disable prefer-const */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async Save(data) {
    const user = new this.userModel(data);
    return await user.save();
  }

  async Update(id, data) {
    let filter = { _id: Types.ObjectId(id) };
    console.log('filter', filter);
    return await this.userModel.updateOne(filter, data);
  }

  async Delete(id) {
    let filter = { _id: Types.ObjectId(id) };
    return await this.userModel.deleteOne(filter);
  }
}
