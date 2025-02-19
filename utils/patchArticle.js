import axios from "axios";

function patchArticle(article_id, change) {
    return axios.patch(`https://backend-project-nc-news-4tvn.onrender.com/api/articles/${article_id}`, {inc_votes: change})
}

export default patchArticle