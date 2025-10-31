import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    async function check(event) {
        if (event && event.preventDefault) event.preventDefault();

        try {
            const res = await axios.post('/api/login', { email, password });
            console.log('login response:', res);

            const ok = res?.data === true || res?.data?.success === true || res?.data?.auth === true;

            if (ok) {
                navigate('/success');
            } else {
                navigate('/fail');
            }
        } catch (err) {
            navigate('/fail');
        }
    }

    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('./images/Netflix bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col h-full text-white">

                <header className="flex items-center justify-between p-6 max-w-6xl mx-auto w-full">
                    <div>
                        <img 
                        src="./images/netflix-logo.svg" 
                        alt="Netflix Logo"
                        className='w-48 h-36'
                        />
                    </div>
                    <div className="flex items-center space-x-4">

                        <select
                            name="language"
                            className="bg-transparent border border-gray-400 rounded p-2 text-sm"
                        >
                            <option value="en" className="text-black">English</option>
                            <option value="ta" className="text-black">தமிழ்</option>
                            <option value="es" className="text-black">Spanish</option>
                            <option value="ar" className="text-black">العربية</option>
                            <option value="fr" className="text-black">Français</option>
                            <option value="de" className="text-black">Deutsch</option>
                        </select>
                        <button className="bg-red-600 text-white px-4 py-2 rounded font-medium text-sm">
                            Sign In
                        </button>
                    </div>
                </header>

                <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                    <h1 className="text-5xl font-extrabold max-w-2xl">
                        Unlimited movies, shows, and more
                    </h1>
                    <p className="text-2xl mt-4">
                        Starts at ₹149. Cancel at anytime.
                    </p>
                    <p className="text-xl mt-6">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    {/* Email Form */}
                    <form onSubmit={check}>
                        <div className="mt-6 flex flex-col md:flex-row w-96 max-w-lg space-y-4 md:space-y-0 md:space-x-2">
                            <input
                                type="email"
                                name='email'
                                placeholder="Email address"
                                className="flex-grow p-4 bg-black/60 border border-gray-400 rounded text-white placeholder-gray-400"
                                onChange={handleEmail}
                                value={email}
                                required
                            />
                        </div>
                        <div className="mt-6 flex flex-col md:flex-row w-96 max-w-lg space-y-4 md:space-y-0 md:space-x-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="flex-grow p-4 bg-black/60 border border-gray-400 rounded text-white placeholder-gray-400"
                                onChange={handlePassword}
                                value={password}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 text-white flex items-center justify-center text-2xl font-medium px-6 py-4 rounded mt-10"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
    );
}

export default Form;