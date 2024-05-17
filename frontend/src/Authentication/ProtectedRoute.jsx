import { useSelector } from "react-redux"
import { Navigate ,useLocation  } from "react-router-dom";

export const ProtectedRoute = ({children}) => {

     const { userdata , isAuth }  = useSelector(state => state?.user);
     console.log('isAuth route  =',userdata);

     const location = useLocation();

     console.log('inside  Routeeeeeeeeee ===');

    return userdata ? (
        children 
    ): ( 
        <Navigate  to = "/login" state={{ prevUrl: location.pathname }} replace />
    );

}