import axios from "axios";
import { context as contextObject } from './context';


export default class Beckn {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    //search APIs

    //Receiving a search intent based on delivery location and sending a list of stores
    searchNearby = async (gps: string) => {

        const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";
        const context = { ...contextObject };
        context.action = 'search';
        context.timestamp = currentTimestamp;

        const message = {
            intent: {
                fulfillment: {
                    end: {
                        location: {
                            gps: gps, 
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
    }

    //Receiving a search intent based on store name and sending a list of stores with matching names 
    searchProviders = async (search: string, gps: string) => {

        const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";
        const context = { ...contextObject };
        context.action = 'search';
        context.timestamp = currentTimestamp;

        const message = {
            intent: {
                provider: {
                    descriptor: {
                        name: search, 
                    }
                },
                fulfillment: {
                    end: {
                        location: {
                            gps: gps,
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

    //Receiving a search intent based on product name and sending a list of items that match the name
    searchItems = async (search: string, gps: string) => {

        const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";
        const context = { ...contextObject };
        context.action = 'search';
        context.timestamp = currentTimestamp;

        const message = {
            intent: {
                item: {
                    descriptor: {
                        name: search, 
                    }
                },
                fulfillment: {
                    end: {
                        location: {
                            gps: gps, 
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

    //Sending the catalog of a provider
    searchCatalog = async (bpp_id: string, bpp_uri: string, id: string, gps: string) => {

        const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";
        const context = { ...contextObject };
        context.action = 'search';
        context.bpp_id = bpp_id;
        context.bpp_uri = bpp_uri;
        context.timestamp = currentTimestamp;

        const message = {
            intent: {
                provider: {
                    id: id
                },
                fulfillment: {
                    end: {
                        location: {
                            gps: gps, 
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


    //select APIs

    //Adding an offer the cart and sending a discounted quote
    selectOffer = async () => {
    };

    //Adding an item to the cart and sending an updated quote
    selectItem = async (item: string, count: number) => {

        const currentTimestamp = new Date().toISOString().slice(0, -1) + "Z";
        const context = { ...contextObject };
        context.action = 'select';
        context.bpp_id = 'bocshopify.humbhionline.in';                     //retail-osm-stage.becknprotocol.io
        context.bpp_uri = 'https://bocshopify.humbhionline.in/bpp';   //https://retail-osm-stage.becknprotocol.io//boc/bpp
        context.timestamp = currentTimestamp;

        const message = {
            order: {
                items: [
                    {
                        id: item,
                        quantity: {
                            count: count
                        }
                    }
                ]
            }
        }

        try {
            const { data } = await axios.post(`${this.url}/select`, { context, message });
            console.log('Backend: ', data.responses);
    
            return data.responses;

        } catch (err) {
            console.log(err);
        }
    };


    //Adding an add-on to an item and sending an updated quote
    selectAddon = async () => {
    };

    //init APIs

    //confirm APIs

}