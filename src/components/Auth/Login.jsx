import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-white p-8 shadow-2xl rounded-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Login</h2>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded" type="email" placeholder="Email" />
          <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
          <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;