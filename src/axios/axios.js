// Add global configurations for axios
import axios from "axios";

axios.defaults.headers.common['accept'] = "application/json";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "https://api.covid19api.com";