import axios from "axios";

const instance = axios.create({
    baseURL: "https://e-commerce-api-u3rr.onrender.com"
})

export default instance;