import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getComments from "../../utils/getComments"
import CommentCard from "./CommentCard"

function CommentsList({updateComments, setUpdateComments}) {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const { article_id } = useParams()
    useEffect(() => {
        getComments(article_id).then((commentsData) => {
            setComments(commentsData)
            setIsLoading(false)
            setUpdateComments(false)
        })
    }, [updateComments])

    if (isLoading) {
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