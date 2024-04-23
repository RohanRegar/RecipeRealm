import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [option, setOption] = useState(false);

    return (
        <Context.Provider value={{ option, setOption }}>
            {props.children}
        </Context.Provider>
    );
};
