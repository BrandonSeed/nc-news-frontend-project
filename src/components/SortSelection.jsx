import { useSearchParams } from "react-router-dom"

function SortSelection() {
    const [sortSearchParam, setSortSearchParam] = useSearchParams()

    function setSortParam(selectedSort) {
        const newParam = new URLSearchParams(sortSearchParam)
        newParam.set("sort_by", selectedSort)
        setSortSearchParam(newParam)
    }

    return (
        <select name="sort" id="sort" onChange={(event) => {
            setSortParam(event.target.value)
        }}>
            <option value="none">none</option>
            <option value="created_at">date</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
        </select>
    )
}

export default SortSelection