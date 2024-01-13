import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loadingui from '../Component/Pages/Loading/Loadingui/Loadingui';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const loaction = useLocation();

    if (loading){
        return (
            <div className="">
                <Loadingui/>
            </div>
        )
    }

    if (!user) {
        <Navigate to='/login'></Navigate>
    }else{
        return children;
    }
    return <Navigate to="/login" state={{from: loaction}} replace></Navigate>
};

export default PrivateRoute;