import { useEffect, useState } from "react"
import getTopics from "../../utils/getTopics"

function TopicSelection({setSelectedTopic}) {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics()
        .then((resultTopics) => {
            setTopics(resultTopics)
        })
    }, [])

    return (
        <select name="topics" id="topics" onChange={(event) => {
            setSelectedTopic(event.target.value)
        }}>
            <option value="">All Topics</option>
            {topics.map((topic) => {
                return <option value={topic.slug}>{topic.slug}</option>
            })}
        </select>
    )
}

export default TopicSelection