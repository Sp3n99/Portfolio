import { createContext } from "react"

const UIContext = createContext();

export const UIProvider = ({ children }) => {

    const value = {}
    return(
        <UIContext.Provider value={value}>{children}</UIContext.Provider>
    )
}