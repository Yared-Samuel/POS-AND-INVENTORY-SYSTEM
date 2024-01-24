import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = `${BACKEND_URL}/api/report/store-report`


const getGrandId = async (_id) => {
    const response = await axios.get(`${API_URL}/${_id}`);
    
    return response.data
}


const grandService = {
    getGrandId,
    
}

export default grandService