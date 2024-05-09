import { useContext, createContext } from "react";

export const userContext = createContext({
    firstName: "",
    lastName: "",
    department: "",
    subject: "",
    email: "",
    phoneNo: "",
    password: "",

    
});

export const TeacherContext = userContext.Provider();