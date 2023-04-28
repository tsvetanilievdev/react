import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchData, setSearchData] = useState({
        location: '',
        speciality: '',
    });


    const updateSearch = (data) => setSearchData(data);
    return (
        <SearchContext.Provider value={{ searchData, updateSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContext;