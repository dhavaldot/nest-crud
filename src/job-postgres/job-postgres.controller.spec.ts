import { Test, TestingModule } from '@nestjs/testing';
import { JobPostgresController } from './job-postgres.controller';

describe('JobPostgresController', () => {
  let controller: JobPostgresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobPostgresController],
    }).compile();

    controller = module.get<JobPostgresController>(JobPostgresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
