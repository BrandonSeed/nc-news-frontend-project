import { useState } from "react"
import { useSearchParams } from "react-router-dom"

function OrderButton() {
    const [orderDirection, setOrderDirection] = useState("ASC")
    const [orderParam, setOrderParam] = useSearchParams()

    function changeOrder() {
        const newParam = new URLSearchParams(orderParam)
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
        <button onClick={() => {
            changeOrder()
        }}>Chnage order to: {orderDirection}</button>
    )
}

export default OrderButton