import React from 'react';
import ducoLogo from '../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { faArrowRightArrowLeft, faBarChart, faChartPie, faCogs, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () =>{
    return (
		<div className="flex w-full h-full flex-col">
            <div className="border-b-2 border-sidebar text-center p-4 w-full"> 
                <img src={ducoLogo} className='w-20 h-20 mx-auto' alt="Duco-Logo" />
                <h1 className="text-xl text-gray-200">DuinoCoin Wallet</h1>
            </div>
            <ul className="text-darker mt-4 font-bold space-y-2 w-full ">
                <li className="w-full sidebar-link active">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer w-full flex items-center"
                        >
                        <FontAwesomeIcon icon={faChartPie} className="self-start w-5 h-5 flex-shrink-0" />
                        <span className='flex-1 ml-3 whitespace-nowrap'>Dashboard</span>
                    </NavLink>
                </li>
                <li className="w-full sidebar-link">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer w-full flex items-center"
                        >
                        <FontAwesomeIcon icon={faBarChart} className="self-start w-5 h-5 flex-shrink-0" />
                        <span className='flex-1 ml-3 whitespace-nowrap'>Transactions</span>
                    </NavLink>
                </li>
                <li className="w-full sidebar-link">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer w-full flex items-center"
                        >
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} className="self-start w-5 h-5 flex-shrink-0" />
                        <span className='flex-1 ml-3 whitespace-nowrap'>wDuco</span>
                    </NavLink>
                </li>
                <li className="w-full sidebar-link">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer w-full flex items-center"
                        >
                        <FontAwesomeIcon icon={faCogs} className="self-start w-5 h-5 flex-shrink-0" />
                        <span className='flex-1 ml-3 whitespace-nowrap'>Settings</span>
                    </NavLink>
                </li>
            </ul>

            <ul className="text-darker mt-4 font-bold space-y-2 w-full ">
                <li className="w-full sidebar-link">
                    <NavLink
                        to="/"
                        className="hover:text-gray-200 p-3 cursor-pointer w-full flex items-center"
                        >
                        <FontAwesomeIcon icon={faSignOut} className="self-start w-5 h-5 flex-shrink-0" />
                        <span className='flex-1 ml-3 whitespace-nowrap'>Logout</span>
                    </NavLink>
                </li>
            </ul>
		</div>
	)
}

export default Sidebar;
