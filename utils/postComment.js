import axios from "axios";

function postComment(article_id,comment) {
    return axios.post(`https://backend-project-nc-news-4tvn.onrender.com/api/articles/${article_id}/comments`, comment)
}

export default postComment