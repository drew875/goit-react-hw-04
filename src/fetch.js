import axios from "axios";

const fetch = async (query, page = 1) => {
    const findData = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID fc00PzBjvv_eu5m3SrhCteF7aO2V-39YEcoDqS71zNY",
        },
        params: {
            query,
            page,
            per_page: 20,
        }
    });

    return findData.data;
}
export default fetch;