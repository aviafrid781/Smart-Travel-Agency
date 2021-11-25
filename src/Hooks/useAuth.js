import { useContext } from "react"
import { AuthContext } from "../Contaxt/authProvider";



const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;