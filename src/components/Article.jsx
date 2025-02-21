import { useState } from "react"
import CommentsList from "./CommentsList"
import DetailedArticleCard from "./DetailedArticleCard"
import Addcomment from "./AddComment"

function Article() {
    const [updateComments, setUpdateComments] = useState(false)
    const [isCommentsLoading, setIsCommentsLoading] = useState(true)
    return (
        <>
            <DetailedArticleCard />
            <Addcomment isCommentsLoading={isCommentsLoading} setUpdateComments={setUpdateComments}/>
            <CommentsList isCommentsLoading={isCommentsLoading} setIsCommentsLoading={setIsCommentsLoading} updateComments={updateComments} setUpdateComments={setUpdateComments}/>
        </>
    )
}

export default Article