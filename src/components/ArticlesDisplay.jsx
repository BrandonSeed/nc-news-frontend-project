import { useState } from "react"
import ArticlesList from "./ArticlesList"
import TopicSelection from "./TopicSelection"

function ArticlesDisplay() {
    return (
        <div>
            <TopicSelection />
            <p>sort</p>
            <p>order</p>
            <ArticlesList />
        </div>
    )
}

export default ArticlesDisplay