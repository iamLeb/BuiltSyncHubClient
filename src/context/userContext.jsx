import axios from "axios";
import { createContext, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {holdPath, firstPath} from "../constants/PrivateFiles.jsx";

export const UserContext = createContext({});
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            if (!user) {
                await axios.get("/api/profile").then(({ data }) => {
                    if (data) {
                        setUser(data)
                    } else if (holdPath === firstPath) {
                        navigate('/auth/login');
                    }
                });
            }
        };
        fetchUser();
    }, []);


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
