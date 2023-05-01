import { useContext } from "react";
import { ContextData } from "../provider/dataContext";

const useContextData = () => useContext(ContextData)

export default useContextData