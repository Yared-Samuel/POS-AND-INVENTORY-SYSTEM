import axios from "axios";
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = `/api/serve`

// Create new serve

const createServe = async (formData)=>{
    const response = await axios.post(API_URL, formData)
    return response.data
}

// Get all serve

const getServes = async ()=>{
    const response = await axios.get(API_URL)
    return response.data
}

const serveService = {
    createServe, 
    getServes
}

export default serveService;