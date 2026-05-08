import { useState } from "react";

export default function ParentPortal() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: connect to backend API later
    alert("Login API not connected yet");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
            <path d="M12 50 L30 12 L48 50" stroke="#84cc16" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M30 12 L12 50" stroke="#1e3a5f" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="30" cy="12" r="5" fill="#f59e0b"/>
          </svg>
          <div>
            <div className="text-xs text-gray-400">The</div>
            <div className="text-lg font-extrabold text-[#0d9488]">The Kalyani School</div>
            <div className="text-[10px] text-gray-400">॥ अक्षयं ज्ञानम् ॥</div>
          </div>
        </div>

        {/* User ID */}
        <div className="mb-5">
          <label className="block text-sm text-gray-600 mb-1">User ID</label>
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full border-2 border-blue-400 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-600 transition-colors"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <a href="#" className="text-sm text-[#0d9488] hover:underline">Forgot Password</a>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-[#29b6e8] hover:bg-[#0ea5d1] text-white font-bold px-8 py-3 rounded-lg transition-all text-sm"
        >
          Login
        </button>

        {/* Powered By */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Powered by</p>
          <div className="flex items-center gap-2">
            <div className="bg-[#1e3a5f] rounded p-1.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 16 L10 4 L16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 12 L14 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-700">SHRIconnect</span>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase">Parent Portal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
