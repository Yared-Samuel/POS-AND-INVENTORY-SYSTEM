import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = `${BACKEND_URL}/api/storelist/store`
const API_URL_CAT = `${BACKEND_URL}/api/storelist`
const API_URL_finished = `${BACKEND_URL}/api/storelist/store/finished`
const API_URL_raw = `${BACKEND_URL}/api/storelist/store/raw`
const API_URL_fixed = `${BACKEND_URL}/api/storelist/store/fixed`
const API_URL_use = `${BACKEND_URL}/api/storelist/store/use`
const API_URL_others = `${BACKEND_URL}/api/storelist/store/others`

// Create New storelist
const createStorelist = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
}

// Get all storelists
const getStorelists = async () => {
    const response = await axios.get(API_URL)
    return response.data
}


// Create New storecat

const createStorecat = async (formData) => {
    const response = await axios.post(API_URL_CAT, formData)
    return response.data
}

// Get all storelists
const getStorecat = async () => {
    const response = await axios.get(API_URL_CAT)
    return response.data
}
// Get all storelists by type
const getStoreFinished = async () => {
    const response = await axios.get(API_URL_finished)
    return response.data
}


const getStoreRaw = async () => {
    const response = await axios.get(API_URL_raw)
    return response.data
}


const getStoreFixed = async () => {
    const response = await axios.get(API_URL_fixed)
    return response.data
}


const getStoreUse = async () => {
    const response = await axios.get(API_URL_use)
    return response.data
}


const getStoreOthers = async () => {
    const response = await axios.get(API_URL_others)
    return response.data
}



const storelistService = {
    createStorelist,
    getStorelists,
    createStorecat,
    getStorecat,
    getStoreFinished,
    getStoreRaw,
    getStoreFixed,
    getStoreUse,
    getStoreOthers

}

export default storelistService;
