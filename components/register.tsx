'use client';
import React, { useState } from 'react';
import Login from '../components/Login';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [contact, setContact] = useState('');
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
					<div className="glass grid border-2 rounded-2xl mt-[12vh] px-[4vw] py-[2vw] w-[40vw] ">
						<center>
							<h1 className="text-2xl font-semibold">Register</h1>
						</center>
						<div className="flex place-content-center">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									setCount(count + 1);
								}}
								className="grid gap-4 w-[80%]"
							>
								<input
									type="email"
									name="email"
									className={`bg-[#ffffff1d] ${
										count === 0 ? 'visible' : 'hidden'
									}`}
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="number"
									name="number"
									className={`bg-[#ffffff1d] ${
										count === 0 ? 'visible' : 'hidden'
									}`}
									placeholder="Enter your contact"
									value={contact}
									onChange={(e) => {
										if (contact.length !== 10)
											return setContact(e.target.value);
									}}
								/>
								<input
									type="password"
									name="password"
									className={`bg-[#ffffff1d] ${
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
									className={`bg-[#ffffff1d] ${
										count === 0 ? 'hidden' : 'visible'
									}`}
									placeholder="Enter your otp"
									value={otp}
									onChange={(e) => {
										if (otp.length !== 6)
											return setOtp(e.target.value);
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
										className="bg-transparent tracking-wider  w-20  hover:w-28 ease-in duration-200 border-t-2 border-b-2 text-[#ffffff98] mb-4"
									/>
									<h1
										className="cursor-pointer font-semibold text-md  hover:text-slate-600"
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
