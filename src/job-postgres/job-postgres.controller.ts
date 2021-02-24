/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Res,
  Param,
} from '@nestjs/common';
import { JobPostgresService } from './job-postgres.service';
import { JobPostgres } from './job-postgres.entity';

@Controller('job-postgres')
export class JobPostgresController {
  constructor(private readonly jobPostgresService: JobPostgresService) {}

  @Get('all')
  async getAll(): Promise<JobPostgres[]> {
    return await this.jobPostgresService.findAll();
  }

  @Post('add')
  async createUser(@Body() data: any, @Res() res) {
    try {
      const op = await this.jobPostgresService.create(data);
      if (op.generatedMaps.length > 0)
        return res.status(200).send({
          success: true,
          message: 'User added successfully',
        });
    } catch (err) {
      res.status(400).send({
        success: true,
        message: err.message,
      });
    }
  }

  @Post('update')
  async updateUser(@Body() data: any, @Res() res) {
    try {
      const { id } = data;

      if (!id) throw new Error('Please pass id');

      const checkUser = await this.jobPostgresService.checkJob(id);
      if (!checkUser) throw new Error('User not exist with this id');

      await this.jobPostgresService.updateJob(data);
      return res.status(200).send({
        success: true,
        message: 'User added successfully',
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: any, @Res() res) {
    try {
      if (!id) throw new Error('Please pass id');

      const checkUser = await this.jobPostgresService.checkJob(id);
      if (!checkUser) throw new Error('User not exist with this id');

      await this.jobPostgresService.deleteJob(id);
      return res.status(200).send({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  }
}
