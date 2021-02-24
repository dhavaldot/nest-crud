import { Test, TestingModule } from '@nestjs/testing';
import { UserPostgresService } from './user-postgres.service';

describe('UserPostgresService', () => {
  let service: UserPostgresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPostgresService],
    }).compile();

    service = module.get<UserPostgresService>(UserPostgresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
