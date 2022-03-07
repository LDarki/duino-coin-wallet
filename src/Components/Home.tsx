import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Home: React.FC = () => {
    return (
		<div className="h-full w-full flex justify-around items-center">
			<div className="h-full w-2/12 flex bg-sidebar">
				<Sidebar />
			</div>
			<div className="h-full w-10/12 flex flex-col">
				<Navbar />
				<div className="w-full bg-container h-full">

				</div>
			</div>
		</div>
    );
};

export default Home;