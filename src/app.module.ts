import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserPostgresModule } from './user-postgres/user-postgres.module';
import { JobPostgresModule } from './job-postgres/job-postgres.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostgres } from './user-postgres/user-postgres.entity';
import { JobPostgres } from './job-postgres/job-postgres.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dhaval',
      password: 'dhaval',
      database: 'postgres',
      entities: [UserPostgres, JobPostgres],
      autoLoadEntities: true,
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    }),
    DatabaseModule,
    UserModule,
    UserPostgresModule,
    JobPostgresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
