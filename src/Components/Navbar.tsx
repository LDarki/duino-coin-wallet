import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import MD5 from 'crypto-js/md5';

const component_to_hex = (c : number) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

const generateRandomColor = (username : string) => {
    const firstAlphabet = username.charAt(0).toLowerCase();
    const asciiCode = firstAlphabet.charCodeAt(0);
    const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

    let num = Math.round(0xffffff * parseInt(colorNum));
    let r = num >> 16 & 255;
    let g = num >> 8 & 255;
    let b = num & 255;

    return component_to_hex(r) + component_to_hex(g) + component_to_hex(b);
}

const getUserImage = () => {
	let user = AuthService.getCurrentUser();
	return (
		<img src={`https://www.gravatar.com/avatar/${encodeURIComponent(MD5(user.email))}` +
            `?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/${encodeURIComponent(user.username)}/128/${generateRandomColor(user.username)}/ffffff/1`}
		className="w-8 h-8 rounded-full mr-4" alt="User-Image" />
	)
};

const Navbar = () => {
    return (
		<div className="flex w-full">
			<nav className="flex justify-around bg-sidebar text-white w-screen">
				<div className="px-5 xl:px-12 py-4 flex w-full">
					<ul className="hidden md:flex px-4 font-normal font-heading space-x-12 ml-auto">
						<li>
							<NavLink
								to="/"
								className="hover:text-gray-200 cursor-pointer flex justify-around items-center"
								>
								{getUserImage()}
								Hello, {AuthService.getCurrentUser().username}
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;