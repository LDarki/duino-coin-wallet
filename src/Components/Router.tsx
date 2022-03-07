import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthService from "../Services/AuthService";
import ducoLogo from '../Assets/img/logo.svg';
import Home from "./Home";
import Login from "./Login";
import axios from "axios";

const Router: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [currentUser, setCurrentUser] = useState<string>('');
    const [isUserValid, setIsUserValid] = useState<boolean>(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            checkUserToken(user.username, user.authToken);
        }

        return () => {

        }
    }, [])

    const checkUserToken = async (username : string, authToken : string) => {
        axios.get(`https://server.duinocoin.com/v2/auth/check/${username}?token=${authToken}`).then(response => {
            let jsonData = response.data;
            if(jsonData.success == true)
            {
                setIsUserValid(true);
                setLoading(false);
            }
            else
            {
                setIsUserValid(false);
                setLoading(false);
            }
        }).catch(error => {
            setIsUserValid(false);
            setLoading(false);
        });
    }

  if (loading && currentUser) {
    return (
		<div className='h-full w-full flex'>
			<div className="h-full w-full flex justify-center items-center" style={{flexDirection:"column"}}>
				<div className="animate-bounce">
					<img src={ducoLogo} className='w-24 h-24' alt="Duco-Logo" />
				</div>
				<div className='h-24 w-24 mt-6 text-center text-black font-2xl'>
					Checking Authentication....
				</div>
			</div>
		</div>
	)
  }

    return (
        <>
        <HashRouter>
            <>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    { isUserValid && <Route path="home" element={<Home />} /> }
                    { !isUserValid && <Route path="*" element={<Navigate to="/login" replace />}/> }
                    <Route path="login" element={<Login />} />
                </Routes>
            </>
        </HashRouter>
        </>
  )
}

export default Router;