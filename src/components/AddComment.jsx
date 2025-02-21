import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/user"
import postComment from "../../utils/postComment"

function Addcomment({isCommentsLoading, setUpdateComments}) {
    const { article_id } = useParams()
    const userName = useContext(UserContext)
    const [comment, setComment] = useState("")
    const [postingComment, setPostingComment] = useState(null)
    const [commentInPost, setCommentInPost] = useState(false)

    function handleChange(event) {
        setComment(event.target.value)
    } 

    function handleSubmit(event) {
        event.preventDefault()
        if (commentInPost === false) {
            setCommentInPost(true)
            setPostingComment("Posting Comment.....Please wait.")
            const commentData = {username: userName, body: comment}
            postComment(article_id, commentData)
            .then(() => {
                setPostingComment("Comment Posted!!")
                setUpdateComments(true)
                setCommentInPost(false)
            })
            .catch((err) => {
                setPostingComment("Posting Failed.")
                setCommentInPost(false)
            })
        }
    }

    if (!isCommentsLoading) {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="commentInput">Comment:</label>
                    <textarea name="body" id="commentInput" placeholder="Share your thoughts here!" cols="50" rows="5" required onChange={handleChange}></textarea>
                    <button type="submit">Post my comment</button>
                </form>
                {postingComment ? <p>{postingComment}</p> : null}
            </>
        )
    }

}

export default Addcomment