import { useSelector } from "react-redux"
import { Navigate  } from "react-router-dom";

export const ProtectedRoute = ({children}) => {

     const { userdata , isAuth }  = useSelector(state => state?.user);
     console.log('isAuth route  =',userdata);

    return userdata ? (
        children 
    ): ( 
        <Navigate  to = "/login" />
    );

}