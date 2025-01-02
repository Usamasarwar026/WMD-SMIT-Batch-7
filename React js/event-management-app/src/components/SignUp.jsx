import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from './../store/auth/authSlice';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signUp({ email, password }));
      navigate('/');
    } catch (error) {
      // console.error('Sign up failed:', error);
    }
  };

  return (
    <div className="max-w p-[50px] rounded-[20px] border border-black bg-[#ebe8e8] mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border text-black outline-none  rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border  rounded text-black outline-none"
          />
        </div>
        <button type="submit" className="bg-gray-500 text-white px-10 py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

