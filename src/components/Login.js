import React, { useState , useContext} from 'react';
import {AppContext} from "../AppContextProvider";

export const Login = () => {
    
    const {appState, appActions}  = useContext(AppContext);
    const { error} = appState;
    
    const renderError = () => {
        if (error == "error") {
          return <div className="mb-4">
                <div className="font-medium text-red-600">Whoops! Something went wrong.</div>
                <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                    <li>These credentials do not match our records.</li>
                </ul>
            </div>;
        } else {
          return "";
        }
      }

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                  {renderError()}
                <div>
                 
                    <label className="block font-medium text-sm text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full" id="email" type="email" name="email" defaultValue="jaumepina@gmail.com" required="required" autoFocus="autofocus"></input>
                </div>

                <div className="mt-4">
                    <label className="block font-medium text-sm text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full" id="password" type="password" name="password" required="required" autoComplete="current-password"></input>
                </div>

                
                <div className="flex items-center justify-end mt-4">
                    <button onClick={()=>login()} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ml-4">
                        Log in
                    </button>
                </div>
            </div>
        </div>    
    );

    function login() {
        
        let data = {
            "email": document.getElementById("email").value,
            "password": document.getElementById("password").value
        }
        
        appActions.login(data);
        
        
    }
}

