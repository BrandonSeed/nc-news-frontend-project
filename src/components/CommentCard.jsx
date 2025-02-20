import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/user"
import deleteComment from "../../utils/deleteComment"

function CommentCard({comment, updateComments, setUpdateComments}) {
    const userName = useContext(UserContext)
    const [canComment, setCanComment] = useState(false)
    const [deletingComment, setDeletingComment] = useState("")
    const [commentInDeletion, setCommentInDeletion] = useState(false)

    useEffect(() => {
        if (comment.author === userName) {
            setCanComment(true)
        }
        else {
            setCanComment(false)
        }
    },[updateComments])

    function removeComment() {
        if (commentInDeletion === false) {
            setCommentInDeletion(true)
            setDeletingComment("Deleting Comment....Please wait.")
            deleteComment(comment.comment_id)
            .then(() => {
                setCommentInDeletion(false)
                setUpdateComments(true)
                setDeletingComment("")
            })
            .catch((err) => {
                setDeletingComment("Error Deleting.")
                setCommentInDeletion(false)
            })
        }
    }

    return (
        <>
            <p>Commentor: {comment.author}</p>
            <p>Posted: {comment.created_at.slice(0,10)} at {comment.created_at.slice(11,16)}</p>
            <p>Votes: {comment.votes}</p>
            <p>{comment.body}</p>
            {canComment ? <button className="commentDeleteBtn" onClick={removeComment}>Delete Comment</button> : null}
            {deletingComment ? <p>{deletingComment}</p> : null}
        </>
    )
}

export default CommentCard