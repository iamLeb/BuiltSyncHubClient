import React, {useContext} from 'react';
import {UserContext} from "../../context/userContext.jsx";
const Index = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            Welcome {!! user && user.name}
        </div>
    );
};

export default Index;