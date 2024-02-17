import axios from "axios";
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = `/api/inv/delivery`

// Create New Deliver

const createDeliver = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
}

// Get all Delivers

const getDelivers = async () =>{
    const response = await axios.get(API_URL)
    return response.data
}

const deliverListService = {
    createDeliver,
    getDelivers
}

export default deliverListService