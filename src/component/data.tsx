import useFetch from "../hooks/useFetch"

async function fetchData(url : string) {
    try {

        const res = await fetch(url, {
            method: "POST",
            body: "Bruteforce Generic RDP.c adalah jenis serangan brute-force yang dilakukan pada protokol Remote Desktop Protocol (RDP) dengan menggunakan program malware tertentu. RDP adalah protokol yang digunakan untuk mengontrol dan mengakses sistem komputer jarak jauh melalui jaringan. Serangan Bruteforce Generic RDP.c dilakukan dengan mencoba semua kombinasi username dan password yang mungkin secara otomatis hingga menemukan kombinasi yang tepat untuk mendapatkan akses ke sistem target."
        })
        const data =  await res.text()
        console.log(data)
        return data
    }catch(err) {
        return "Error"
    }
}

export default function Data() {

    return(
        <>
        {"Hello WOrld"}
        </>
    )
}