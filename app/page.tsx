import React from 'react';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        {/* Cute Floating Header Badge */}
        <div className="text-center mb-8 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#FFC8D7] shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF6B8B] animate-pulse" />
            <span className="text-xs font-medium text-[#B56B81] tracking-wide">
              Minimalist Pink Workspace
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-[#5A2031] tracking-tight">
            BloomNotes<span className="text-[#FF6B8B]">.</span>
          </h1>
          <p className="text-sm text-[#8C6B75] mt-1.5 font-light">
            Capture thoughts in a cozy, cute space.
          </p>
        </div>

        {/* Login Card */}
        <div className="pink-glass p-8 rounded-3xl shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#4A3E3E]">Welcome back!</h2>
            <p className="text-xs text-[#8C6B75] mt-0.5">Please authenticate to access your notes.</p>
          </div>

          <LoginForm />
        </div>

        <p className="text-center text-xs text-[#A88892] mt-8">
          Created by Aira Bausa. All rights reserved.
        </p>
      </div>
    </div>
  );
}