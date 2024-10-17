import React from 'react';

const Login = () => {
  return (
    <>
      <div
        className="antialiased bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('images/grunge-paper-background_1048-10026.png')" }}
      >
        <div className='flex w-full min-h-screen justify-center items-center relative'>
          
          <div className='bg-[#803D3B] w-full max-w-md p-8 rounded-xl shadow-lg text-white mt-[200px] relative z-10'>
            {/* Login Form Section */}
            <h1 className='font-bold text-4xl text-center mb-6'>Login</h1>
            
            <div className='bg-white/90 shadow-lg rounded-xl p-8 text-gray-600'>
              <form action="" className='flex flex-col space-y-4'>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className='text-sm'>Email</label>
                  <input 
                    type='email' 
                    id="email" 
                    placeholder='Your Email address' 
                    className='ring ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2' 
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className='text-sm'>Password</label>
                  <input 
                    type='password' 
                    id="password" 
                    placeholder='Your password' 
                    className='ring ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2' 
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button type="submit" className='bg-[#803D3B] text-white rounded-md px-4 py-2 hover:bg-teal-600 transition duration-200'>
                    Login
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
