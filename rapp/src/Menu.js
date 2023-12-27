import React from "react"
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './App';
import Lista from './UserList';

export const Menu = () =>{
    return(
        <div>     
            <HashRouter>
                <div>         
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/employees">
                        UserList
                    </Link>
                </div>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/employees" element={<Lista/>}/>
                </Routes>
            </HashRouter>   
        </div>
    )
}

export default Menu;
