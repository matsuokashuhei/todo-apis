import { ConnectionOptions } from 'typeorm';
import { Todo } from './todos/todo.entity';

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Todo],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
};

export default config;
