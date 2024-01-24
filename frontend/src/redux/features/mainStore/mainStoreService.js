import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL_CAT = `${BACKEND_URL}/api/storelist/main`


const createMainStore = async (formData) => {
    const response = await axios.post(API_URL_CAT, formData)
    return response.data
}

// Get all storelists
const getMainStore = async () => {
    const response = await axios.get(API_URL_CAT)
    return response.data
}

const mainStoreServivce = {
    createMainStore,
    getMainStore
}

export default mainStoreServivce