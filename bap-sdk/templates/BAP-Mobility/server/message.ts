import axios from "axios";
import { context as contextObject } from './context';

export default class Beckn {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }
    
    //Search APIs

    //Receiving a traveller’s pickup and drop location and sending a list of mobility service providers
    searchProviders = async (from: string, to: string) => {

        const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";
        const context = { ...contextObject };
        context.action = 'search';
        context.timestamp = currentTimestamp;

        const message = {
            intent: {
                fulfillment: {
                    start: {
                        location: {
                            gps: from,
                        }
                    }, 
                    end: {
                        location: {
                            gps: to,
                        }
                    }
                },
            },
        }

        try {
            const { data } = await axios.post(`${this.url}/search`, { context, message });
            console.log('Backend: ', data.responses);
    
            return data.responses;

        } catch (err) {
            console.log(err);
        }
        
    };
}
