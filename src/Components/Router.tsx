import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthService from "../Services/AuthService";
import ducoLogo from '../Assets/img/logo.svg';
import Home from "./Home";
import Login from "./Login";

const Router: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [isUserValid, setIsUserValid] = useState<boolean>(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            AuthService.checkToken().then(() => {
                setIsUserValid(true);
                setLoading(false);
            }).catch(() => {
                AuthService.logout();
                setLoading(false);
            });
        }
        else {
            setLoading(false);
            setIsUserValid(false);
        }

        return () => {

        }
    }, [])

  if (loading && !isUserValid) {
    return (
		<div className='h-full w-full flex'>
			<div className="h-full w-full flex justify-center items-center flex-col">
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