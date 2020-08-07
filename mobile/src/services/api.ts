import axios from "axios";

const api = axios.create({
    baseURL: "http://yf-xyb.henriquesqs.mobile.exp.direct:3333",
});

export default api;
