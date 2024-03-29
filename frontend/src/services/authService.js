import axios from "axios";
import {toast} from "react-toastify"
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
//Register User
export const registerUser = async (userData) => {
    
    try {
        const response = await axios.post(`/api/users/register`, userData, {withCredentials: true})
        console.log(response)
        if(response.statusText === "OK") {
            toast.success("User registered successfully")
        }
        return response.data
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()

            toast.error(message)
    }
}

//Login User
export const loginUser = async (userData) => {
    console.log("service")
    console.log(userData)
    try {
        const response = await axios.post(`/api/users/login`, userData, {withCredentials: true})
        console.log("afterURL")
        console.log(response)
        if(response.statusText === "OK") {
            toast.success("Login Successfull")
        }
        return response.data
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()

            toast.error(message)
    }
}

// Logout user
export const logoutUser = async () => {
    try {
        await axios.get(`/api/users/logout`)
        
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()

            toast.error(message)
    }
}

// Get login status

export const getLoginStatus = async () => {
    try {
        const response = await axios.get(`/api/users/loggedin`)
        return response.data
        
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()

            toast.error(message)
    }
}