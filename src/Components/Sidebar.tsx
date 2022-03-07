import React from 'react';
import ducoLogo from '../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { faArrowRightArrowLeft, faBarChart, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () =>{
    return (
		<div className="flex w-full h-full items-center flex-col">
            <div className="border-b-2 border-sidebar text-center p-4 w-full"> 
                <img src={ducoLogo} className='w-20 h-20 mx-auto' alt="Duco-Logo" />
                <h1 className="text-xl text-gray-200">DuinoCoin Wallet</h1>
            </div>
            <ul className="text-darker mt-4 font-bold flex flex-col justify-around items-center w-full">
                <li className="flex w-full text-center w-full sidebar-link active">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer"
                        >
                        <FontAwesomeIcon icon={faChartPie} className="mr-2" />
                        Dashboard
                    </NavLink>
                </li>
                <li className="flex w-full text-center w-full sidebar-link">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer"
                        >
                        <FontAwesomeIcon icon={faBarChart} className="mr-2" />
                        Transactions
                    </NavLink>
                </li>
                <li className="flex w-full text-center w-full sidebar-link">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer"
                        >
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} className="mr-2" />
                        wDuco
                    </NavLink>
                </li>
            </ul>
		</div>
	)
}

export default Sidebar;
