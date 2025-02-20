import ArticlesList from "./ArticlesList"
import TopicSelection from "./TopicSelection"
import SortSelection from "./SortSelection"
import OrderButton from "./OrderButton"

function ArticlesDisplay() {
    return (
        <div>
            <TopicSelection />
            <SortSelection />
            <OrderButton />
            <ArticlesList />
        </div>
    )
}

export default ArticlesDisplay