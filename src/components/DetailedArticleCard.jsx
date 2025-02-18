import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import getArticle from "../../utils/getArticle"

function DetailedArticleCard() {
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    useEffect(() => {
        getArticle(article_id).then((articleData) => {
            setArticle(articleData)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <p>Loading Article....</p>
        )
    }

    return (
        <>
            <h2>{article.title}</h2>
            <p>Posted: {article.created_at.slice(0,10)} at {article.created_at.slice(11,16)}</p>
            <p>Authored by: {article.author}</p>
            <img src={article.article_img_url} alt="realted article image" className="detailedArticleCardImg"/>
            <p>Votes: {article.votes}</p>
            <button>placeholder votes button</button>
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
            <p>Total comments: {article.comment_count}</p>
        </>
    )
}

export default DetailedArticleCard