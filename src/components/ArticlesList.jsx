import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getArticles from "../../utils/getArticles"
import { useSearchParams } from "react-router-dom"

function ArticlesList() {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [searchTopic] = useSearchParams()
    let topic = searchTopic.get("topic")
    console.log(topic)
    useEffect(() => {
        if (topic === "All") topic = undefined
        getArticles(topic).then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [topic])

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