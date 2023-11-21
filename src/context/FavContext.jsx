import { useState } from "react";
import { createContext } from "react";


//createContext
export const FavContext = createContext(null);

//CreateContext Provider
export const FavContextProvider = ({ children }) => {



    //objeto provider
    const objetProvider = {

    }
    //Return del createContext.provider
    return <FavContext.Provider value={objetProvider} >{children}</FavContext.Provider>

}
