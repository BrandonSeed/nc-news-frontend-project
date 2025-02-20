import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getArticles from "../../utils/getArticles"

function ArticlesList({selectedTopic}) {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles(selectedTopic).then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [selectedTopic])

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