import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mais_solidario', // alterar para maissolidariodb
  password: '323019', // alterar para Maissolidario20....
  port: 5432,
});

export default pool;