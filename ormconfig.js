const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  DATABASE,
  NODE_ENV,
} = process.env;

module.exports = {
  type: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: false,
  entities: [`${NODE_ENV == 'dev' ? 'src' : 'dist'}/entity/*{.ts,.js}`],
};
