import { Link } from "react-router-dom"

function ArticleCard({article}) {
    return (
        <>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt="varying images to draw attention to article" className="articleCardImg"/>
            <p>{article.topic}</p>
            <p>Posted: {article.created_at.slice(0,10)} at {article.created_at.slice(11,16)}</p>
            <p>Votes: {article.votes}</p>
            <p>Comment Count: {article.comment_count}</p>
            <nav>
                <Link to={`/articles/${article.article_id}`}>Go to Article</Link>
            </nav>
        </>
    )
}

export default ArticleCard