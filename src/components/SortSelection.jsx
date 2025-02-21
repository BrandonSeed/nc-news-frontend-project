import { createSearchParams, useSearchParams } from "react-router-dom"

function SortSelection() {
    const [sortSearchParam, setSortSearchParam] = useSearchParams()

    function setSortParam(selectedSort) {
        let newParam = createSearchParams(sortSearchParam)
        newParam.set("sort_by", selectedSort)
        setSortSearchParam(newParam)
    }

    return (
        <select name="sort" id="sort" onChange={(event) => {
            setSortParam(event.target.value)
        }}>
            <option value="none">none</option>
            <option value="created_at" selected="selected">date</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
        </select>
    )
}

export default SortSelection