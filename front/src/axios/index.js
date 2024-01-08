import axios from "axios";

export const Api = axios.create({
    baseURL: "http://localhost:3002",
    
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})