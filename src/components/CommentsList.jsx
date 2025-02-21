import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getComments from "../../utils/getComments"
import CommentCard from "./CommentCard"

function CommentsList({isCommentsLoading, setIsCommentsLoading, updateComments, setUpdateComments}) {
    const [comments, setComments] = useState([])
    const { article_id } = useParams()
    useEffect(() => {
        getComments(article_id).then((commentsData) => {
            setComments(commentsData)
            setIsCommentsLoading(false)
            setUpdateComments(false)
        })
    }, [updateComments])

    if (isCommentsLoading) {
        return (
            <p>Loading Comments....</p>
        )
    }
    
    return (
        <>
            <ul>
                {comments.map((comment) =>{
                    return <li className="commentListCard">
                        <CommentCard comment={comment} updateComments={updateComments} setUpdateComments={setUpdateComments}/>
                    </li>
                })}
            </ul>
        </>
    )
}

export default CommentsList