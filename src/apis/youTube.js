import axios from "axios";

const key = "AIzaSyC1RRfacRKllNpfBHlpNfaA9pX747AH9XA";

export default axios.create({
    
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: key,
    }

})
