import {useState} from "react"
import {Link} from "react-router-dom"
import { useAuthStore } from "../store/authUser"

const Signup = () => {
    const {searchParams} = new URL(document.location)
    const emailValue = searchParams.get('email')
    const [email,
        setEmail] = useState(emailValue || '');
    const [username,
        setUsername] = useState('');
    const [password,
        setPassword] = useState('')

    const { signup } = useAuthStore();
    
    const handleSignUp = (e) => {
        e.preventDefault();
        signup({email, username, password})
    }
    return (
        <div className="h-screen w-full hero-bg">
            <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <Link to={"/"}>
                    <img src="/netflix-logo.png" alt="logo" className="w-52"/>
                </Link>
            </header>
            <div className="flex justify-center items-center p-4">
                <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
                    <h1 className="text-center text-white text-2xl font-bold mb-4">
                        Sign up
                    </h1>
                    <form className="space-y-4" onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="example@example.com"
                                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focuse:outline-none focus:ring"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-gray-300 block">
                                Username
                            </label>
                            <input
                                type="text "
                                placeholder="Example"
                                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focuse:outline-none focus:ring"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername     (e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="******"
                                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focuse:outline-none focus:ring"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                             />
                        </div>
                        <button
                            className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
                            Sign Up
                        </button>
                    </form>
                    <div className="text-center text-gray-400">
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-red-500 hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup