import express from 'express';
import payload from 'payload';
import cors from 'cors'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enable CORS for 3000
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
};

start();
