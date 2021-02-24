import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JobPostgres } from './job-postgres.entity';

@Injectable()
export class JobPostgresService {
  constructor(
    @InjectRepository(JobPostgres)
    private jobPostgresRepo: Repository<JobPostgres>,
  ) {}

  async findAll(): Promise<JobPostgres[]> {
    return this.jobPostgresRepo.find();
  }

  async create(jobData) {
    return this.jobPostgresRepo.insert(jobData);
  }

  async checkJob(id) {
    return this.jobPostgresRepo.findOne(id);
  }

  async updateJob(data) {
    return this.jobPostgresRepo.update(data.id, data);
  }

  async deleteJob(id) {
    return this.jobPostgresRepo.delete(id);
  }
}
