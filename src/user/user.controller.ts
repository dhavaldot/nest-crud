/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUser(@Res() res) {
    const data = await this.userService.findAll();
    return res.status(200).send({
      Success: false,
      data: data,
    });
  }

  @Post('users')
  async createUser(@Body() user: any, @Res() res) {
    console.log(user);
    const id = user['id'];
    if (!user.email || !user.password || !user.Name) {
      return res.status(200).send({
        Success: false,
        message: 'Please Enter Data',
      });
    } else if (id) {
      console.log(id);
      const op = await this.userService.Update(id, user);
      console.log('update', op);
      if (op) {
        return res.status(200).send({
          Success: true,
          message: 'updated',
        });
      }
    } else {
      const op = this.userService.Save(user);
      if (op) {
        return res.status(200).send({
          Success: true,
          message: 'Saved',
        });
      }
    }
  }

  @Delete('delete/:id')
  async Delete(@Param('id') id, @Res() res) {
    try {
      const data = await this.userService.Delete(id);
      console.log('data', data);
      console.log('data.deletedCount', data.deletedCount);
      if (data.deletedCount > 0) {
        return res.status(200).send({
          success: true,
          message: 'User deleted',
        });
      } else {
        return res.status(200).send({
          success: false,
          message: 'User not exist with this id',
        });
      }
    } catch (err) {
      return res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  }
}
