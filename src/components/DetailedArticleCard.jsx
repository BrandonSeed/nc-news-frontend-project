import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import getArticle from "../../utils/getArticle"
import patchArticle from "../../utils/patchArticle"

function DetailedArticleCard() {
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})
    const [votes, setVotes] = useState(0)
    const [error, setError] = useState(null)
    const { article_id } = useParams()
    useEffect(() => {
        getArticle(article_id).then((articleData) => {
            setArticle(articleData)
            setVotes(articleData.votes)
            setIsLoading(false)
        })
    }, [])

    function increaseVotes() {
        setVotes((votes) => votes + 1)
        setError(null)
        patchArticle(article_id, 1)
        .catch((err) => {
            setVotes((votes) => votes - 1)
            setError("Your vote was unsuccessful. Try again.")
        })
    }

    function decreaseVotes() {
        setVotes((votes) => votes - 1)
        setError(null)
        patchArticle(article_id, -1)
        .catch((err) => {
            setVotes((votes) => votes + 1)
            setError("Your vote was unsuccessful. Try again.")
        })
    }

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
            <p>Votes: {votes}</p>
            <button onClick={increaseVotes}>Up Votes</button>
            <button onClick={decreaseVotes}>Lower Votes</button>
            {error ? <p>{error}</p> : null}
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
            <p>Total comments: {article.comment_count}</p>
        </>
    )
}

export default DetailedArticleCard