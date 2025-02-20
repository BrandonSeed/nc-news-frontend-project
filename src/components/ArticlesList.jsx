import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getArticles from "../../utils/getArticles"
import { useSearchParams } from "react-router-dom"

function ArticlesList() {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [searchParams] = useSearchParams()
    let topic = searchParams.get("topic")
    let sort = searchParams.get("sort_by")
    useEffect(() => {
        if (topic === "All") topic = undefined
        if (sort === "none") sort = undefined
        getArticles(topic, sort).then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [topic, sort])

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