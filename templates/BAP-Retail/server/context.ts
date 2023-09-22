interface Context {
    domain: string;
    country: string;
    city: string;
    action: string;
    core_version: string;
    bap_id: string;
    bap_uri: string;
    bpp_id?: string;
    bpp_uri?: string;
    transaction_id: string;
    message_id: string;
    timestamp: string;
    key?: string;
    ttl?: string;
}
  
const context: Context = {
    domain: "nic2004:52110",               // Set the domain as per use case
    country: "IND",       
    city: "std:080",
    action: "",
    core_version: "0.9.2",   // Set the version
    bap_id: "sandeep-retail",             // Set the registered BAP id
    bap_uri: "https://sandeep-bap.loca.lt",            // Set the registered BAP uri
    bpp_id: undefined,     // Optional field in some cases
    bpp_uri: undefined,    // Optional field in some cases
    transaction_id: "",
    message_id: "",
    timestamp: "",
    key: undefined,       // Optional field
    ttl: undefined        // Optional field
};
  
export { context };
  

