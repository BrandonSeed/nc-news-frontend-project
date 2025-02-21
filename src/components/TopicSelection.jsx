import { useEffect, useState } from "react"
import getTopics from "../../utils/getTopics"
import { createSearchParams, useSearchParams } from "react-router-dom"

function TopicSelection() {
    const [topics, setTopics] = useState([])
    const [topicSearchParam, setTopicSearchParam] = useSearchParams()

    useEffect(() => {
        getTopics()
        .then((resultTopics) => {
            setTopics(resultTopics)
        })
    }, [])

    function setTopicParam(selectedTopic) {
        let newParam = createSearchParams(topicSearchParam)
        newParam.set("topic", selectedTopic)
        setTopicSearchParam(newParam)
    }

    return (
        <select name="topics" id="topics" onChange={(event) => {
            setTopicParam(event.target.value)
        }}>
            <option value="All" selected="selected">All Topics</option>
            {topics.map((topic) => {
                return <option value={topic.slug}>{topic.slug}</option>
            })}
        </select>
    )
}

export default TopicSelection