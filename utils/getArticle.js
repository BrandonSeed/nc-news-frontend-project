import axios from "axios";

function getArticle(article_id) {
    return axios.get(`https://backend-project-nc-news-4tvn.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}

export default getArticle