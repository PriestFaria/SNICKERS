export function isAuthenticated ()  {
    return sessionStorage.getItem("isAuthenticated") === "true";

}


export function authenticate(id, username){
    try {
        if(id && username){
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("isAuthenticated", "true");
            return 1;
        }
        else{
            throw new Error('user params are not valid');
        }

    } catch (error){
        console.log(id, username)
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("id");
        sessionStorage.setItem("isAuthenticated", "false");
        return 0;
    }
}

export function exit(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("id");
    sessionStorage.setItem("isAuthenticated", "false");
}
