
import { User } from 'src/User/User.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'aiub',
  entities: [User],
  synchronize: true,
  schema: 'public',
  logging: true,
};

export default ormConfig;