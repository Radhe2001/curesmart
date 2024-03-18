'use client';
import React, { useState } from 'react';
import Login from '../components/Login';
import '../css/login.css';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [otp, setOtp] = useState('');
	const [count, setCount] = useState(0);
	const [login, setLogin] = useState(false);

	return (
		<div
			className="flex h-full w-full bg-gradient-to-r from-[#2DFFF5] 
			to-[#FFF878] place-content-center place-items-center"
		>
			{login ? (
				<Login />
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
					<div className="glass shadow-2xl shadow-black grid border-2 rounded-2xl mt-[5vh] px-[3vw] py-[1vw] w-[40vw] gap-6">
						<center>
							<div
								className="h-32 w-32 bg-cover"
								style={{
									backgroundImage:
										'url(/images/login_icon.png)',
								}}
							></div>
							<h1 className="text-3xl font-bold text-[#00000098] tracking-wide mt-[-12px]">
								Register
							</h1>
						</center>
						<div className="flex place-content-center">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									setCount(count + 1);
								}}
								className="grid gap-2 w-[80%]"
							>
								<input
									type="number"
									name="number"
									className={`border-2 border-[#3a24243d] px-4 py-2 text-lg placeholder:text-[#0000006b] placeholder:font-semibold rounded-full font-normal tracking-widest  bg-[#c2ededa5] ${
										count === 0 ? 'visible' : 'hidden'
									}`}
									placeholder="Enter your contact"
									value={name}
									onChange={(e) => {
										 setName(e.target.value);
									}}
								/>
								<input
									type="email"
									name="email"
									className={`border-2 border-[#3a24243d] px-4 py-2 text-lg placeholder:text-[#0000006b] placeholder:font-semibold rounded-full font-normal tracking-widest  bg-[#c2ededa5] ${
										count === 0 ? 'visible' : 'hidden'
									}`}
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>

								<input
									type="password"
									name="password"
									className={`border-2 border-[#3a24243d] px-4 py-2 text-lg placeholder:text-[#0000006b] placeholder:font-semibold rounded-full font-normal tracking-widest  bg-[#c2ededa5] ${
										count === 0 ? 'visible' : 'hidden'
									}`}
									placeholder="Enter your password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<input
									type="number"
									name="number"
									maxLength={10}
									className={`border-2 border-[#3a24243d] px-4 py-2 text-lg placeholder:text-[#0000006b] placeholder:font-semibold rounded-full font-normal tracking-widest  bg-[#c2ededa5] ${
										count === 0 ? 'hidden' : 'visible'
									}`}
									placeholder="Enter your otp"
									value={otp}
									onChange={(e) => {
										if (otp.length !== 6) {
											setOtp(e.target.value);
										}
									}}
								/>
								<center className="">
									<input
										type="submit"
										value={
											count === 0 ? 'Register' : 'Confirm'
										}
										onClick={() => {
											if (count !== 0) setLogin(true);
										}}
										className="bg-transparent tracking-wider w-24 hover:w-32 ease-in duration-200 border-t-2 border-b-2 border-slate-700 text-[#251b1beb] font-bold text-xl mt-8 mb-2 py-1"
									/>
									<h1
										className="cursor-pointer font-semibold text-md text-slate-700  hover:text-blue-700"
										onClick={() => setLogin(true)}
									>
										{count === 0 ? 'sign in' : ''}
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

export default Register;
