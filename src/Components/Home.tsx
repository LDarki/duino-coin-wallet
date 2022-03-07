import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
	{name: '07/03/22', price: 400},
	{name: '07/03/22', price: 300},
	{name: '07/03/22', price: 300},
	{name: '07/03/22', price: 200},
	{name: '07/03/22', price: 278},
	{name: '07/03/22', price: 189},
	{name: '07/03/22', price: 189},
];

const BalanceChart = () => {
    return (
		<ResponsiveContainer width="90%" height={400}>
			<AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#647cec" stopOpacity={0.8}/>
					<stop offset="95%" stopColor="#647cec" stopOpacity={0}/>
					</linearGradient>
				</defs>
				<XAxis stroke="#44446e" dataKey="name" />
				<YAxis />
				<CartesianGrid vertical={false} strokeDasharray="0 0" stroke="#44446e"/>
				<Tooltip />
				<Area type="monotone" dataKey="price" stroke="#647cec" fillOpacity={1} fill="url(#colorUv)" />
			</AreaChart>
		</ResponsiveContainer>
	)
}

const Home: React.FC = () => {
    return (
		<div className="h-full w-full flex justify-around items-center">
			<div className="h-full w-2/12 flex bg-sidebar">
				<Sidebar />
			</div>
			<div className="h-full w-10/12 flex flex-col">
				<Navbar />
				<div className="w-full bg-container h-full p-8">
					<div className="w-8/12 bg-sidebar flex p-4 rounded text-darker justify-around items-center flex-col shadow-md">
						<div className="w-full flex justify-between items-center">
							<div className="flex h-24 align-self-start font-semibold flex-col">
								Wallet Balance
								<p className="text-white text-2xl">250000.0000 D</p>
							</div>
						</div>
						<BalanceChart />
					</div>
				</div>
			</div>
		</div>
    );
};

export default Home;