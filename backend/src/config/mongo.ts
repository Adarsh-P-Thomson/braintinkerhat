import mongoose from 'mongoose';

export const connectMongo = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.warn('⚠️ MONGO_URI is missing in .env');
      return;
    }
    
    // We only try to connect once. The driver handles reconnections.
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoUri);
      console.log('✅ MongoDB connected successfully');
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
};

export const getMongoStatus = () => {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
    99: 'uninitialized',
  };
  return states[mongoose.connection.readyState as keyof typeof states] || 'unknown';
};
