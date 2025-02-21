import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getArticles from "../../utils/getArticles"
import { useSearchParams } from "react-router-dom"

function ArticlesList() {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [error, setError] = useState("")
    const [searchParams] = useSearchParams()

    let topic = searchParams.get("topic")
    let sort = searchParams.get("sort_by")
    let order = searchParams.get("order")

    useEffect(() => {
        if (topic === "All") topic = undefined
        if (sort === "none") sort = undefined
        getArticles(topic, sort, order).then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message)
        })
    }, [topic, sort, order])
    
    if (error != "") {
        return (
            <p>{error}, please check your sort, topic or order direction in the url.</p>
        )
    }

    if (isLoading) {
        return (
            <p>Loading Articles....</p>
        )
    }

    return (
        <>
            <ul className="aricleList">
                {articles.map((article) => {
                    return <li className="articleListCard">
                        <ArticleCard article={article} />
                    </li>
                })}
            </ul>
        </>
    )
}

export default ArticlesList