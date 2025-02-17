import axios from 'axios'

function getArticles() {
    return axios.get("https://backend-project-nc-news-4tvn.onrender.com/api/articles")
    .then((response) => {
        return response.data.articles
    })
}

export default getArticles