import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authentication";
import { useEffect } from "react";

export default function RequireAuth({ children }) {
    const { isAuthenticated,token } = useAuth();
    const navigate = useNavigate();

    // If not authenticated, redirect to the login page
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [token])


    // If authenticated, render the children
    return children;
}