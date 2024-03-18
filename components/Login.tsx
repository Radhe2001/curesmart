'use client';
import React, { useState } from 'react';
import '../css/login.css';
import Register from '../components/register';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [register, setRegister] = useState(false);

	return (
		<div
			className="flex h-full w-full bg-gradient-to-r from-[#2DFFF5] 
			to-[#FFF878] place-content-center place-items-center"
		>
			{register ? (
				<Register />
			) : (
				<div className="">
					<center className="flex place-items-center gap-4">
						<div
							className="h-[120px] w-[120px] bg-cover "
							style={{
								backgroundImage: 'url(images/img1.png)',
							}}
						></div>
						<h1 className="text-7xl font-bold tracking-wider font-['gothic'] text-[#000000b1]">
							Cure Smart
						</h1>
					</center>
					<div className="glass shadow-2xl shadow-black grid border-2 rounded-2xl mt-[8vh] px-[4vw] py-[2vw] w-[40vw] gap-4">
						<center>
							<div
								className="h-32 w-32 bg-cover"
								style={{
									backgroundImage:
										'url(/images/login_icon.png)',
								}}
							></div>
						</center>
						<div className="flex place-content-center">
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="grid gap-2 w-[80%]"
							>
								<input
									type="email"
									name="email"
									className="border-2 border-[#3a24243d] px-4 py-2 text-lg placeholder:text-[#0000006b] placeholder:font-semibold rounded-full font-normal tracking-widest  bg-[#c2ededa5]"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="password"
									name="password"
									className="border-2 border-[#3a24243d] px-4 py-2 text-lg placeholder:text-[#0000006b] placeholder:font-semibold rounded-full font-normal tracking-widest bg-[#c2ededa5]"
									placeholder="Enter your password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<center>
									<input
										type="submit"
										value="Login"
										className="bg-transparent tracking-wider w-24 hover:w-32 ease-in duration-200 border-t-2 border-b-2 border-slate-700 text-[#251b1beb] font-bold text-xl mt-8 mb-2 py-1"
									/>
									<h1
										className="cursor-pointer font-semibold text-md text-slate-700  hover:text-blue-700"
										onClick={() => setRegister(true)}
									>
										register now
									</h1>
								</center>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Login;
