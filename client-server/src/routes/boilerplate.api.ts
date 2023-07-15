import { v4 as uuidv4 } from 'uuid';
import express, { Request, Response } from 'express';
import axios from 'axios';
import { context as contextObject } from '../context';

const router = express.Router();

// Example on search API for retail
router.post('/search', async (req: Request, res: Response) => {
  // Setting country and city code from Client UI and timestamp
  const { country, city } = req.body;
  const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";

  // Modifying the context as per response from client
  const context = { ...contextObject };
  context.country = country;
  context.city = city;
  context.action = 'search';
  context.timestamp = currentTimestamp;
  context.transaction_id = uuidv4();
  context.message_id = uuidv4();

  const message = {
    intent: {
      item: {
        descriptor: {
          name: req.body.name, // Setting client intent to fulfill
        },
      },
      fulfillment: {
        end: {
          location: {
            gps: req.body.gps, // Setting current location of client
          },
        },
      },
    },
  };

  try {
    // Calling the API to get a response from protocol-server
    const { data } = await axios.post('http://localhost:5001/search', { context, message });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

// Client server select API to be modified
router.post('/select', async (req: Request, res: Response) => {
  const message = {};
});

// Client server init API to be modified
router.post('/init', async (req: Request, res: Response) => {
  const message = {};
});

// Client server confirm API to be modified
router.post('/confirm', async (req: Request, res: Response) => {
  const message = {};
});

// Client server status API to be modified
router.post('/status', async (req: Request, res: Response) => {
  const message = {};
});

// Client server rating API to be modified
router.post('/rating', async (req: Request, res: Response) => {
  const message = {};
});

export default router;
