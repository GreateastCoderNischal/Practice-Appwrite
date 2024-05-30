import { useState, createContext, useContext } from "react";
import { account } from "../../Appwrite/Appwrite.jsx";
import { ID } from "appwrite";
import { useEffect } from "react";


const UserContext = createContext();

export function useUser() {
    return (
        useContext(UserContext)
    )
}

export function UserProvider(props) {
    const [user, setUser] = useState(null)

    async function logout() {
        await account.deleteSession("current")
    }

    async function login(email, password) {
        const loggedIn = await account.createEmailSession(email, password);
        setUser(loggedIn)
    }

    async function signUp(email, password) {
        await account.create(ID.unique(), email, password)
        await login(email, password)
    }

    async function init() {
        try {
            const loggedIn = await account.get()
            setUser(loggedIn)
        } catch (error) {
            console.log("error occured")
            setUser(null)
        }
    }

    useEffect(() => {
        init()
    }, [])
    return (
        <UserContext.Provider value={{ current:user, login, logout, signUp }}>
            {props.children}
        </UserContext.Provider>
    )
}