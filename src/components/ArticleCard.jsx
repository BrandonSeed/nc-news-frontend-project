function ArticleCard({article}) {
    return (
        <>
            <p>{article.title}</p>
            <img src={article.article_img_url} alt="varying images to draw attention to article" className="articleCardImg"/>
            <p>{article.topic}</p>
            <p>Posted: {article.created_at.slice(0,10)} at {article.created_at.slice(11,16)}</p>
            <p>Votes: {article.votes}</p>
        </>
    )
}

export default ArticleCard