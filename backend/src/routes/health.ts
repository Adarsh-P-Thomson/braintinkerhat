import { Router } from 'express';
import { getMongoStatus } from '../config/mongo';
import { getPostgresStatus } from '../config/postgres';
import { getRedisStatus } from '../config/redis';

const router = Router();

router.get('/health', async (req, res) => {
  const postgresStatus = await getPostgresStatus();
  
  const healthStatus = {
    server: 'up',
    timestamp: new Date().toISOString(),
    databases: {
      mongodb: getMongoStatus(),
      postgres: postgresStatus,
      redis: getRedisStatus(),
    }
  };

  res.json(healthStatus);
});

export default router;
