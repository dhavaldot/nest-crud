/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserPostgresService } from './user-postgres.service';
import { UserPostgresController } from './user-postgres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostgres } from './user-postgres.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPostgres])],
  providers: [UserPostgresService],
  controllers: [UserPostgresController],
})
export class UserPostgresModule {}
