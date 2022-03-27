import React, { useReducer, createContext } from "react";
const AppContext = createContext();
const initialState = {
    access_token: "",
    error: "",
    user: ""
}
//Serializamos las claves de nuestra aplicacion para no tener fallos
const ACTIONS = {
    SET_ACCESS_TOKEN:"setAccessToken",
    SET_ERROR:"setError", 
    LOAD_USER:"loadUser"
}
// Aqui esta el turron! El reducer. Switch entre acciones que modifica parte del estado
const reducer = (state, action) => {
    console.log(action);
            
    switch (action.type) {
        case ACTIONS.SET_ACCESS_TOKEN:
            return {...state,  access_token: action.access_token, error: ""}
        case ACTIONS.SET_ERROR:
            return {...state, error: action.error}
        case ACTIONS.LOAD_USER:
            return {...state, user: action.user}        
        default:
            return state
    }
}
//AppProvider sera nuestro componente magico! Hara todo lo necesario para las acciones
// En esta clase, tendremos toda la logica de aplicacion
const AppProvider = ({ children }) => {
    //Aqui invocamos el reducer, nos trae el estado y el dispatch para lanzar eventos
    const [appState, dispatch] = useReducer(reducer, initialState);
    //Como no queremos usar dispatch fuera de la aplicacion, vamos a hacer un hub de funciones
    // Usamos payload como un elemento dinamico -> es un concepto redux
    const appActions = {
        setAccessToken: (val) => {
            dispatch({type: ACTIONS.SET_ACCESS_TOKEN, access_token: val})
        },
        logout: () => {
            dispatch({type: ACTIONS.SET_ACCESS_TOKEN, access_token: ""})
        },
        login: (data) => {
            let headers = {
                "Content-Type": "application/json",                                                                                                
                "Access-Control-Origin": "*"
            }
        
            fetch("http://gamificacio.test/api/login", {
                method: "POST",
                headers: headers,
                body:  JSON.stringify(data)
            })
            .then(function(response){ 
                return response.json(); 
            })
            .then(function(data){ 
                if(data.access_token){
                    dispatch({type: ACTIONS.SET_ACCESS_TOKEN, access_token: data.access_token});
                }else{
                    dispatch({type: ACTIONS.SET_ERROR, error: "error"})
                }
                
            });
            
        },
        loadUser: () => {
            if(appState.user != ""){
                return;
            } 
            let headers = {
                "Content-Type": "application/json",                                                                                                
                "Access-Control-Origin": "*",
                "Authorization": `Bearer ${appState.access_token}` 
            }
        
            fetch("http://gamificacio.test/api/user", {
                method: "GET",
                headers: headers
            })
            .then(function(response){ 
                return response.json(); 
            })
            .then(function(data){ 
                if(data.user){
                    dispatch({type: ACTIONS.LOAD_USER, user: data.user})
                }else{
                    dispatch({type: ACTIONS.SET_ERROR, error: "error"})
                }
                
            });
            
        },
    }
    //Esta function envia como valor un objeto json, con el estado y las acciones que queremos usar externas
    return (
        <AppContext.Provider value={{
            appState: appState,
            appActions: appActions,
        }}>
            {children}
        </AppContext.Provider>
    );
};
//Y lo mas importante, solo exportamos el componente y el contexto para usar useContext
export { AppProvider, AppContext };