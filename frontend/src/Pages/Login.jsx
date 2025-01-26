import React from 'react'

const Login = () => {
  return (
    <div className='flex  justify-center'>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-2xl font-semibold mb-4">Welcome to MyHostel</h1>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            Country/Region
                        </label>
                        <div>
                        <div className="relative">
                            <select id="country" className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>India (+91)</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <input id="phone" type="text" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Phone number" />
                    </div>
                        </div>
                        
                    <p className="text-xs text-gray-500 mb-4">
                        We’ll call or text you to confirm your number. Standard message and data rates apply. <a href="#" className="text-black font-bold underline gap-1">Privacy Policy</a>
                    </p>
                    <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold mb-4">Continue</button>
                    <div className="flex items-center justify-center mb-4">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                        Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                        Continue with Apple
                    </button>
                    <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                        Continue with email
                    </button>
                    <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg">
                        Continue with Facebook
                    </button>
                </div>
    </div>
  )
}

export default Login
