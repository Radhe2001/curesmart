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
					<div className="glass grid border-2 rounded-2xl mt-[12vh] px-[4vw] py-[2vw] w-[40vw] ">
						<center>
							<h1 className="text-2xl font-semibold">Sign In</h1>
						</center>
						<div className="flex place-content-center">
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="grid gap-4 w-[80%]"
							>
								<input
									type="email"
									name="email"
									className="bg-[#ffffff1d]"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="password"
									name="password"
									className="bg-[#ffffff1d]"
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
										className="bg-transparent tracking-wider  w-14 hover:w-20 ease-in duration-200 border-t-2 border-b-2 text-[#ffffff98]  mb-4"
									/>
									<h1
										className="cursor-pointer font-semibold text-md  hover:text-slate-600"
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
