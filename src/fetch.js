import axios from "axios";


async function fetchPhotos(query, page = 1) {
    const URL = "https://api.unsplash.com/search/photos";
    const KEY = "fc00PzBjvv_eu5m3SrhCteF7aO2V-39YEcoDqS71zNY";

    try {
        const res = await axios.get(URL, {
            params: {
                query,
                page,
                per_page: 10,
            },
            headers: {
                Authorization: `Client-ID ${KEY}`
            }
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log("errrrr", error);
        return null;
    }


}

export default fetchPhotos;