import axios from "axios";

function getTopics() {
    return axios.get("https://backend-project-nc-news-4tvn.onrender.com/api/topics")
    .then((response) => {
        return response.data.topics
    })
}

export default getTopics