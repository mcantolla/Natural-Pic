import { createContext, useState } from "react";

import photoData from "/public/photos.json"

export const MyContext = createContext()

const MyContextProvider = ({ children }) => {
    const [data, setData] = useState(photoData)

    return (
        <MyContext.Provider value={{data, setData}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider