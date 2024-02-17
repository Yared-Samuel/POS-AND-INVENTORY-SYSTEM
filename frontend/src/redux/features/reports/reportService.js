import axios from "axios";
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const DAILY_SALE = `/api/report/sale-daily`
const DAILY_PURCHASE = `/api/report/purchase-daily`
const DAILY_SERVE = `/api/report/serve-daily`
const STORE_DAILY_SALE = `/api/report/store-sale-daily`
const STORE_BALANCE = `/api/report/probalance`
const INV_BALANCE = `/api/report/mainStoreBalance`
const CASH_BALANCE = `/api/report/cashBalance`


const getDailySale = async (formData)=>{
    const response = await axios.get(DAILY_SALE)
    return response.data
}

const getDailyServe = async (formData)=>{
    const response = await axios.get(DAILY_SERVE)
    return response.data
}




const getDailyPurchase = async (formData)=>{
    const response = await axios.get(DAILY_PURCHASE)
    return response.data
}



const getStoreDailySale = async (formData)=>{
    const response = await axios.get(STORE_DAILY_SALE)
    return response.data
}

const getStoreBalance = async (formData)=>{
    const response = await axios.get(STORE_BALANCE)
    return response.data
}

const getInvBalance = async (formData)=>{
    const response = await axios.get(INV_BALANCE)
    return response.data
}

const getCashBalances = async (formData)=>{
    const response = await axios.get(CASH_BALANCE)
    return response.data
}


const reportService = {
    getDailySale,
    getDailyServe,
    getDailyPurchase,
    getStoreDailySale,
    getStoreBalance,
    getInvBalance,
    getCashBalances

}

export default reportService;