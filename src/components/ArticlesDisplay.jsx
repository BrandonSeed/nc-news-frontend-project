import ArticlesList from "./ArticlesList"
import TopicSelection from "./TopicSelection"
import SortSelection from "./SortSelection"

function ArticlesDisplay() {
    return (
        <div>
            <TopicSelection />
            <SortSelection />
            <p>order</p>
            <ArticlesList />
        </div>
    )
}

export default ArticlesDisplay