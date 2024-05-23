import axios from "axios";

const username = "user123";
const password = "pass123";
const encoded = btoa(username+":"+password);

export const getRestData = async(url) => {
    console.log("getRestData ", url);
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: "Basic " + encoded,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Error fetching Rest Data ", error);
        return null;
    }
}