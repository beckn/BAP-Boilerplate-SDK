import {Request, Response} from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { context as contextObject } from '../context';

export const searchAPI = async(req: Request, res: Response) => {
    const { name, gps } = req.body;
    const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";

    // Modifying the context as per response from client
    const context = { ...contextObject };
    context.action = 'search';
    context.timestamp = currentTimestamp;
    context.transaction_id = uuidv4();
    context.message_id = uuidv4();

    const message = {
        intent: {
        item: {
            descriptor: {
            name: name, // Setting client intent to fulfill
            },
        },
        fulfillment: {
            end: {
            location: {
                gps: gps, // Setting current location of client
            },
            },
        },
        },
    };

    try {
        // Calling the API to get a response from protocol-server
        const { data } = await axios.post('http://localhost:5001/search', { context, message });
        console.log(data);
        for(let i=0; i<data.responses.length; i++){
            console.log('\nResponse ',i+1,':', data.responses[i].context, data.responses[i].message);
        }

        res.status(200).json({message: 'Data Fetched from Beckn Gateway', data});

    } catch (err) {
        console.log(err);
    }
};