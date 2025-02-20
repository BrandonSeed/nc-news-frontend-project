import axios from 'axios'

function getArticles(topic, sort) {
return axios.get("https://backend-project-nc-news-4tvn.onrender.com/api/articles", {
    params: {
        topic: topic,
        sort_by: sort
    }
})
    .then((response) => {
        return response.data.articles
    })
}

export default getArticles