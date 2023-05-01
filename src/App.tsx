import { Suspense, lazy, useState } from "react"
import useFetch from "./hooks/useFetch"
import DataProvider from "./provider/dataContext";
import CompA from "./component/compA";
import CompB from "./component/CompB";

async function timeout(cb : any) : Promise<any> {
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return cb
}



const DataField = lazy(() => timeout(import("./component/data")))




export default function App() {
  
  return(
    <DataProvider>
      <CompB/>
      <CompA/>
      
    </DataProvider>
  )
}