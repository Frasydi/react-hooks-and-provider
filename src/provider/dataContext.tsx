import { ReactNode, createContext, useState } from "react";

type IType = {
    data : string,
    setData : (data? : any) => any
}

export const ContextData = createContext<IType>({
    data : "",
    setData : () => {return}
})


export default function DataProvider({children} : {children : ReactNode}) {
    const [data, setData] = useState("")
    
    const value = {
        data : data,
        setData : setData
    }
   return (
    <ContextData.Provider value={value}>
    {children}
    </ContextData.Provider>   

   )
    
   
}