import axios from 'axios';

const KEY = 'AIzaSyD-WdBLNla9XAx_53ZhROx6_CFCH0nF2_0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});