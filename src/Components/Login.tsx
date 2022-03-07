import React, { useEffect, useState } from "react";
import axios from 'axios';
import AuthService from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState<string>('');

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            navigate('/');
        }
    });

    const handleLogin = async () => {
        setError('');
        setLoading(true);

        let loginFeedback = await AuthService.login(username.value, password.value);

        if(loginFeedback == true) navigate('/');
        else {
            setError('Invalid Username or Password');
            setLoading(false);
        }
    }

    return (
        <div className="h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
        <form id="login-form">
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
                <h1 className="text-center text-2xl font-semibold text-gray-600">Sign In</h1>
                <div>
                <label htmlFor="" className="block mb-1 text-gray-600 font-semibold">Username</label>
                <input {...username} type="text" className={"px-4 py-2 outline-none rounded-md w-full " + (error ? "bg-red-50" : "bg-indigo-50")} />
                </div>
                <div>
                <label htmlFor="" className="block mb-1 text-gray-600 font-semibold">Password</label>
                <input {...password} type="password" className={"px-4 py-2 outline-none rounded-md w-full " + (error ? "bg-red-50" : "bg-indigo-50")} />
                </div>
                <div>
                </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            </div>
            <button value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Login</button>
            </div>
        </form>
        </div>
    );
};

const useFormInput = (initialValue : string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;