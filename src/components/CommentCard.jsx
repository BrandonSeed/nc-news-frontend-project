function CommentCard({comment}) {
    console.log("in the comment card", comment)
    return (
        <>
            <p>Commentor: {comment.author}</p>
            <p>Posted: {comment.created_at.slice(0,10)} at {comment.created_at.slice(11,16)}</p>
            <p>Votes: {comment.votes}</p>
            <p>{comment.body}</p>
        </>
    )
}

export default CommentCard