import { useContext } from "react"
import { ContextData } from "../provider/dataContext"
import useContextData from "../hooks/useContextData"

export default function CompA() {
    const {data, setData} = useContextData()


    return(
        <>
            <h1>{data}</h1>    
        </>
    )
}