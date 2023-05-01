import { useEffect, useMemo, useState } from "react"

export default function useFetch(url : string) {
    const [data, setData] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [err, setErr] = useState<boolean>(false)
    const [newurl, setUrl] = useState(url)    

    async function fetchData(signal? : AbortSignal) {
        setLoading(true)
        fetch(newurl, {
            signal,
            method: "POST",
            body: "Bruteforce Generic RDP.c adalah jenis serangan brute-force yang dilakukan pada protokol Remote Desktop Protocol (RDP) dengan menggunakan program malware tertentu. RDP adalah protokol yang digunakan untuk mengontrol dan mengakses sistem komputer jarak jauh melalui jaringan. Serangan Bruteforce Generic RDP.c dilakukan dengan mencoba semua kombinasi username dan password yang mungkin secara otomatis hingga menemukan kombinasi yang tepat untuk mendapatkan akses ke sistem target."
        }).then(res => res.text()).then((data) => {
            setData(data)
            setErr(false)
        }).catch(() => {
            setErr(true)
        }).finally(() => {
            setLoading(false)
        })
    }
    
    useEffect(() => {
        const abort = new AbortController()
        const signal = abort.signal
        fetchData(signal)

        return () => {
            abort.abort()
        }
    }, [0, newurl])

    return {data, loading, err, fetchData, setUrl}
}