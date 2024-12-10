//Rota de verificacao de usuario, para bloquear paginas para usuarios nao logados

import { useState, useEffect } from "react";
import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function({ children }){
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(()=> {
        async function checklogin() {
            const unsub = onAuthStateChanged(auth, (user)=> {
                //se tem user logado
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }
                    localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setLoading(false);
                    setSigned(true);
                }else{
                    //nao possui user logado
                    setLoading(false);
                    setSigned(false);
                }
            })
        }
        checklogin();
    }, [])

    if(loading){
        return(
            <div></div>
        )
    }
    if(!signed){
        return <Navigate to="/"/>
    }

    return children;
}