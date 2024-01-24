import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = `${BACKEND_URL}/api/inv/sale/service`

const createSaleService = async(formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
}

const getSaleService = async () =>{
    const response = await axios.get(API_URL)
    return response.data
}


const saleServiceService = {
    createSaleService,
    getSaleService
}

export default saleServiceService;