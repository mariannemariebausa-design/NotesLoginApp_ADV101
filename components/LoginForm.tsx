'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    setIsSubmitting(false);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation Logic
    if (!email.trim()) {
      setErrorMessage('✨ Please enter your email address.');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      setErrorMessage('✨ Email must be a valid @gmail.com address.');
      return;
    }

    if (!password) {
      setErrorMessage('✨ Please enter your password.');
      return;
    }

    if (password.length <= 6) {
      setErrorMessage('✨ Password must be more than 6 characters.');
      return;
    }

    // Success flow
    setIsSubmitting(true);
    router.push('/notes');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#B56B81] mb-1.5 ml-1">
          Gmail Address
        </label>
        <input
          type="email"
          placeholder="yourname@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-[#FFC8D7] text-[#4A3E3E] placeholder-[#C2A0AA] focus:outline-none focus:ring-2 focus:ring-[#FF8FA3] focus:border-transparent transition-all duration-200 text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#B56B81] mb-1.5 ml-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-[#FFC8D7] text-[#4A3E3E] placeholder-[#C2A0AA] focus:outline-none focus:ring-2 focus:ring-[#FF8FA3] focus:border-transparent transition-all duration-200 text-sm shadow-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF8FA3] to-[#FF6B8B] text-white font-medium text-sm tracking-wide shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all duration-200 disabled:opacity-70 mt-2 cursor-pointer"
      >
        {isSubmitting ? 'Unlocking Workspace...' : 'Sign In to BloomNotes 🌸'}
      </button>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-[#FFE4E8] border border-[#FFB3C1] text-[#9E2A4B] text-xs font-medium text-center animate-fade-in shadow-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}