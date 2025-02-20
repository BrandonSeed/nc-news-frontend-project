import { useState } from "react"
import ArticlesList from "./ArticlesList"
import TopicSelection from "./TopicSelection"

function ArticlesDisplay() {
    const [selectedTopic, setSelectedTopic] = useState("")
    return (
        <div>
            <TopicSelection setSelectedTopic={setSelectedTopic}/>
            <p>sort</p>
            <p>order</p>
            <ArticlesList selectedTopic={selectedTopic}/>
        </div>
    )
}

export default ArticlesDisplay