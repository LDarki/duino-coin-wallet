import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
		<div className="flex w-full">
			<nav className="flex justify-between bg-sidebar text-white w-screen">
				<div className="px-5 xl:px-12 py-4 flex w-full items-center">
					<ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
						<li>
							<NavLink
								to="/"
								className="hover:text-gray-200 cursor-pointer"
								>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/settings"
								className="hover:text-gray-200 cursor-pointer"
								>
								Settings
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;