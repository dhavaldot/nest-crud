import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPostgres } from './user-postgres.entity';

@Injectable()
export class UserPostgresService {
  constructor(
    @InjectRepository(UserPostgres)
    private userPostgresRepo: Repository<UserPostgres>,
  ) {}

  async findAll(): Promise<UserPostgres[]> {
    return this.userPostgresRepo.find();
  }

  async create(userData) {
    return this.userPostgresRepo.insert(userData);
  }

  async checkUser(id) {
    return this.userPostgresRepo.findOne(id);
  }

  async updateUser(data) {
    return this.userPostgresRepo.update(data.id, data);
  }

  async deleteUser(id) {
    return this.userPostgresRepo.delete(id);
  }
}
