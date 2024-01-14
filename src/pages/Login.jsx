import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberLogin, setRememberLogin] = useState(true);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
  return (
    <div className='w-full h-screen '>
        <img
        className='hidden sm:block absolute w-full h-full object-cover'
         src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/80d63f6b-3d19-4d97-8ed4-b29626cd08ec/DZ-fr-20240107-trifectadaily-perspective_alpha_website_large.jpg" alt=""/>
       <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>

       <div className='fixed w-full px-4 py-10 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-nsans-bold'>S'identifier</h1>
                <form className='w-full flex flex-col py-4'>
                 <input 
                 onSubmit={handleFormSubmit}
                 className='p-3 my-2 bg-gray-700 rounded'
                 type='email' 
                 placeholder='email' 
                 autoComplete='email' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                 <input
                 className='p-3 my-2 bg-gray-700 rounded'
                 type='password'
                 placeholder='password'
                 autoComplete='current-password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className='bg-purple-600 py-3 my-6 rounded font-nsans-bold'>S'identifier</button>
                  <div className='flex justify-between items-center text-gray-600'>
                    <p>
                        <input type='checkbox' className='mr-2' checked={rememberLogin}
                        onChange={(e)=> setRememberLogin(!rememberLogin) }/>
                        Se souvenir de moi
                    </p>
                    <p>Besoin d'aide ?</p>
                  </div>
                  <p className='my-4'>
                    <span className='text-gray-600 mr-2'>Vous êtes deja abonné  </span>
                    <Link to="/se connecter">Se connecter</Link>
                  </p>
                </form>

            </div>

        </div>
       </div>


    </div>
  )
}

export default Login