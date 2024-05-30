import { createContext, useContext, useState, useEffect } from "react";
import { database } from "../../Appwrite/Appwrite";
import { ID, Query } from "appwrite";

export const Ideas_Id = "66211b4b5c99163876a3";
export const Ideas_Collection_Id = "66211b6ca80a89b6782d";

const IdeasContext = createContext();
export function useIdeas() {
    return useContext(IdeasContext)
}

export default function IdeasProvider({ children }) {
    const [ideas, setIdeas] = useState([]);
    async function init() {
        database.listDocuments(
            Ideas_Id,
            Ideas_Collection_Id,
            [Query.orderDesc("$createdAt"), Query.limit(12)]
        ).then(response => {
            setIdeas(response)
        })
    }
    const add = async (idea) => {
        console.log(idea)
       database.createDocument(
            Ideas_Id,
            Ideas_Collection_Id,
            ID.unique(),
            idea
        ).then(res=>{
            window.location.reload()
            const newIdea = [...ideas, res];
            setIdeas(newIdea)
            })
            }
        
    

    async function remove(id) {
        await database.deleteDocument(Ideas_Id, Ideas_Collection_Id);
        setIdeas(prev => prev.filter(idea => idea.$id !== id));
        await init()
    }
    useEffect(function () {
        init()
    }, [])

    return (
        <IdeasContext.Provider value={{ current: ideas, remove, add }}>
            {children}
        </IdeasContext.Provider>
    )
}