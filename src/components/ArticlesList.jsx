import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getArticles from "../../utils/getArticles"

function ArticlesList() {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles().then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [])

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