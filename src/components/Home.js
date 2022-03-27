import React, { useState , useContext} from 'react';
import {AppContext} from "../AppContextProvider";

export const Home = () => {
    
    const {appState, appActions}  = useContext(AppContext);
   

    
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <h1>Home With SEO</h1>
            </div>
        </div>    
    );
}