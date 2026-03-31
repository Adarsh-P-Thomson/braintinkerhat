import { createClient, RedisClientType } from 'redis';

let redisClient: RedisClientType | null = null;

export const connectRedis = async () => {
  const redisUrl = process.env.REDIS_URL;
  
  if (!redisUrl) {
    console.warn('⚠️ REDIS_URL is missing in .env');
    return;
  }

  redisClient = createClient({
    url: redisUrl,
  });

  redisClient.on('error', (err) => console.error('❌ Redis Client Error', err));

  try {
    await redisClient.connect();
    console.log('✅ Redis connected successfully');
  } catch (error) {
    console.error('❌ Failed to connect to Redis:', error);
  }
};

export const getRedisStatus = (): string => {
  if (!redisClient) return 'uninitialized (missing config)';
  return redisClient.isReady ? 'connected' : 'disconnected';
};

export { redisClient };
