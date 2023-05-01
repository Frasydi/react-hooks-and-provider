import useContextData from "../hooks/useContextData"

export default function CompB() {
    const {setData} = useContextData()
    return(
        <>
        <input type="text" onChange={(data) => {
            setData(data.target.value)
        }} />
        </>
    )
}