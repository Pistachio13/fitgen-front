import GraphContext from "./GraphContext"
import { useState } from "react"

export default function GraphContextProvider ({children}) {
    const [number, setNumber] = useState(0)
    const [shouldShowPopup,setShouldShowPopup] = useState(false)
    return (<GraphContext.Provider value = {{number,setNumber,shouldShowPopup,setShouldShowPopup}}> {children} </GraphContext.Provider>)
}