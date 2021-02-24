import { Test, TestingModule } from '@nestjs/testing';
import { JobPostgresService } from './job-postgres.service';

describe('JobPostgresService', () => {
  let service: JobPostgresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobPostgresService],
    }).compile();

    service = module.get<JobPostgresService>(JobPostgresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
