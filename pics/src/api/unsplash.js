import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID f-MeUUwirOqCV0ysHeqKGz6FwD3rhcI730hphbfs8lc',
    }
});