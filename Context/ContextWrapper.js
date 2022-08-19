import { createContext } from "react";

export const TextsContext = createContext([]);

export default function ContextWrapper({ children, data, setData }) {
    return (
        <TextsContext.Provider value={{ data, setData }}>{children}</TextsContext.Provider>
    );
}
