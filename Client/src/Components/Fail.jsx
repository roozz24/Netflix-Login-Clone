import React from 'react';

export default function Fail() {
	return (
		<div
			className="relative w-full h-screen bg-cover bg-center"
			style={{ backgroundImage: "url('./images/Netflix bg.jpg')" }}
		>

			<div className="flex items-center justify-between p-6 max-w-6xl mx-auto w-full">
				<img
					src="./images/netflix-logo.svg"
					alt="Netflix Logo"
					className='w-48 h-36'
				/>
			</div>

			<div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/80 to-black/80"></div>

			<div className="p-6 text-center h-72 flex flex-col justify-center items-center relative z-10">
				<h1 className="text-5xl font-bold text-red-600">Sign-in Failed</h1>
				<p className="mt-2 text-3xl text-white font-bold">There was an error signing you in. Please try again.</p>
			</div>
		</div>
	);
}




