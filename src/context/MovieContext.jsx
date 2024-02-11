import { useContext, createContext } from "react";
import data from "../data.json";

const MovieContext = createContext(null)

export const MovieContextProvider = ({ children }) => {

    const getMonth = (month) => {
        const monthobj = {
            "01":"jan",
            "02":"feb",
            "03":"mar",
            "04":"apr",
            "05":"may",
            "06":"jun",
            "07":"jul",
            "08":"aug",
            "09":"sep",
            "10":"oct",
            "11":"nov",
            "12":"dec",
        }
        return monthobj[month]
    }


    return (
        <MovieContext.Provider value={{ data,getMonth }}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    return useContext(MovieContext)
}