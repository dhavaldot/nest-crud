/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserPostgresService } from './user-postgres.service';
import { UserPostgresController } from './user-postgres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostgres } from './user-postgres.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserPostgres]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dhaval',
      password: 'dhaval',
      database: 'postgres',
      entities: [UserPostgres],
      synchronize: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    }),
  ],
  providers: [UserPostgresService],
  controllers: [UserPostgresController],
})
export class UserPostgresModule {}
