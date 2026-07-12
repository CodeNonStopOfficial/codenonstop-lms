import React from "react";
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedGess = ({children}) => {
   const {isAuthenticated} = useSelector(store=>store.auth);

    if(isAuthenticated){
        return <Navigate to="/"/>
    }

    return children;
};

export default ProtectedGess;