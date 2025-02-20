import axios from "axios";

function deleteComment(comment_id) {
    return axios.delete(`https://backend-project-nc-news-4tvn.onrender.com/api/comments/${comment_id}`)
}

export default deleteComment