import { useState } from "react"
import { createSearchParams, useSearchParams } from "react-router-dom"

function OrderButton() {
    const [orderDirection, setOrderDirection] = useState("ASC")
    const [orderParam, setOrderParam] = useSearchParams()

    function changeOrder() {
        let newParam = createSearchParams(orderParam)
        newParam.set("order", orderDirection)
        setOrderParam(newParam)
        if (orderDirection === "DESC") {
            setOrderDirection("ASC")
        }
        else {
            setOrderDirection("DESC")
        }
    }

    return (
        <button className="orderBtn" onClick={() => {
            changeOrder()
        }}>Change order to: {orderDirection}</button>
    )
}

export default OrderButton