import { Test, TestingModule } from '@nestjs/testing';
import { UserPostgresController } from './user-postgres.controller';

describe('UserPostgresController', () => {
  let controller: UserPostgresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPostgresController],
    }).compile();

    controller = module.get<UserPostgresController>(UserPostgresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
