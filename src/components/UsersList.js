import React, { useState , useContext, useEffect} from 'react';
import {AppContext} from "../AppContextProvider";

export const UsersList = (prop) => {
    
    const {appState}  = useContext(AppContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        let headers = {
            "Content-Type": "application/json",                                                                                                
            "Access-Control-Origin": "*",
            "Authorization": `Bearer ${appState.access_token}` 
        }
    
        const fetchData = async () => {
            const response = await fetch('https://jaumepina.hostignition.com/gamification/api/team/'+prop.module, {
                method: "GET",
                headers: headers
            });
            const currentData = await response.json();
            setData(currentData);
        }
        console.log(prop);
        if(prop.module){
            fetchData();
        }
    }, [prop]);
    
    
    return (
        <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                        <label className="block font-medium text-sm text-gray-700 mb-5">
                            Owner Class
                        </label>
                        <div className="grid grid-cols-2 gap-4 place-content-stretch h-30">
                        {data != "" ? data.team.users.map(u=> {
                            return (<div  key={u.id}  className="bg-white hover:bg-slate-100 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{u.name}</h2>
                        </div>)
                        }): ""}
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>  
    );
}