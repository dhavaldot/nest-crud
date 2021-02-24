import { Module } from '@nestjs/common';
import { JobPostgresController } from './job-postgres.controller';
import { JobPostgresService } from './job-postgres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostgres } from './job-postgres.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobPostgres])],
  controllers: [JobPostgresController],
  providers: [JobPostgresService],
})
export class JobPostgresModule {}
