import axios from "axios"

function getComments(article_id) {
    return axios.get(`https://backend-project-nc-news-4tvn.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

export default getComments