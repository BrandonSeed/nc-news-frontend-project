import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import getArticles from "../../utils/getArticles"

function ArticlesList() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles().then((articlesData) => {
            setArticles(articlesData)
        })
    }, [])
    return (
        <>
            <ul className="aricleList">
                {articles.map((article) => {
                    return <li className="articleListCard">
                        <ArticleCard article={article}></ArticleCard>
                    </li>
                })}
            </ul>
        </>
    )
}

export default ArticlesList