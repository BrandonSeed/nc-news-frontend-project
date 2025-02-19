import { useState } from "react"
import CommentsList from "./CommentsList"
import DetailedArticleCard from "./DetailedArticleCard"
import Addcomment from "./AddComment"

function Article() {
    const [updateComments, setUpdateComments] = useState(false)
    return (
        <>
            <DetailedArticleCard />
            <Addcomment setUpdateComments={setUpdateComments}/>
            <CommentsList updateComments={updateComments} setUpdateComments={setUpdateComments}/>
        </>
    )
}

export default Article