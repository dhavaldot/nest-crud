import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class jobPostgres1614153181077 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const create = await queryRunner.createTable(
      new Table({
        name: 'job_postgres',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'salary',
            type: 'int4',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.addColumn(
      'job_postgres',
      new TableColumn({
        name: 'Uid',
        type: 'int4',
        isNullable: false,
        isUnique: true,
      }),
    );

    await queryRunner.createForeignKey(
      'job_postgres',
      new TableForeignKey({
        columnNames: ['Uid'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_postgres',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('job_postgres', 'Uid');
    await queryRunner.query(`DROP TABLE job_postgres`);
  }
}
