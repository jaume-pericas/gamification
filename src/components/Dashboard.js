import React, { useState , useContext, useEffect} from 'react';
import {AppContext} from "../AppContextProvider";
import {UsersList} from "./UsersList.js";

export const Dashboard = () => {
    
    const {appState, appActions}  = useContext(AppContext);
    const [module, setModule] = React.useState(false);
    
    const {user} = appState;

    useEffect(() => {
        appActions.loadUser();
    }, []);

    return (
        <div className="min-h-screen max-w-7xl mx-auto py-10 sm:px-6 lg:px-8 bg-gray-100">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 flex justify-between">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                        <p className="mt-1 text-sm text-gray-600">
                        {user.email}
                        </p>
                    </div>
                    <div className="px-4 sm:px-0"></div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label className="block font-medium text-sm text-gray-700 mb-5">
                                    Owner Class
                                </label>
                                <div className="grid grid-cols-2 gap-4 place-content-stretch h-30 ">
                                    {user != "" ? user.owned_teams.map(d=> {
                                        return (<div key={d.id} onClick={() => setModule(d.id)} className="bg-white hover:bg-slate-100 p-6 rounded-lg shadow-lg">
                                        <h2    className="text-2xl font-bold mb-2 text-gray-800">{d.name}</h2>
                                    </div>)
                                    }): ""}
                                    
                                    
                                    
                                </div>
                            </div>
                            <div className="col-span-6">
                                <label className="block font-medium text-sm text-gray-700 mb-5">
                                registered Class
                                </label>
                                <div className="grid grid-cols-2 gap-4 place-content-stretch h-30">
                                    {user != "" ? user.teams.map(d=> {
                                        return (<div key={d.id} onClick={() => setModule(d.id)} className="bg-white hover:bg-slate-100 p-6 rounded-lg shadow-lg">
                                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{d.name}</h2>
                                    </div>)
                                    }) : ""}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 flex justify-between">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium text-gray-900">participants</h3>
                        <p className="mt-1 text-sm text-gray-600">
                        module students
                        </p>
                    </div>
                    <div className="px-4 sm:px-0"></div>
                </div>
                <UsersList module={module} ></UsersList>
            </div>
        </div>  
    );
}