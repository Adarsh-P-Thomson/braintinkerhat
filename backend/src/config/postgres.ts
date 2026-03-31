import { Pool } from 'pg';

let pool: Pool | null = null;

export const connectPostgres = () => {
  const connectionString = process.env.POSTGRES_URI;
  
  if (!connectionString) {
    console.warn('⚠️ POSTGRES_URI is missing in .env');
    return;
  }

  pool = new Pool({
    connectionString,
    // Add max connections, timeouts, etc. here later
  });

  pool.on('error', (err) => {
    console.error('❌ Unexpected Postgres client error', err);
  });
};

export const getPostgresStatus = async (): Promise<string> => {
  if (!pool) return 'uninitialized (missing config)';
  try {
    const client = await pool.connect();
    client.release();
    return 'connected';
  } catch (err) {
    return 'disconnected (error)';
  }
};

export { pool as pgPool };
