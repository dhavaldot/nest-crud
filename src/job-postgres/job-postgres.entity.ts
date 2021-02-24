/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserPostgres } from '../user-postgres/user-postgres.entity';

@Entity()
export class JobPostgres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  salary: number;

  @OneToMany((type) => UserPostgres, (user) => user.id)
  Uid: number;
}
