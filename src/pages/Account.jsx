import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {


  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {

    const name = localStorage.getItem("userName") || "Guest User";
    const email = localStorage.getItem("userEmail") || "fady@cinema.com";
    setUser({ name, email });

  }, []);

  const handleChangeName = () => {

    const newName = prompt("Enter your new display name:", user.name);

    if (newName && newName.trim() !== "") {
      localStorage.setItem("userName", newName);
      setUser({ ...user, name: newName });
      alert("Name updated successfully! Refresh to see changes in Navbar.");
      window.location.reload(); 
      
    }
  };

  const handleChangePassword = () => {

    const pass = prompt("Enter your new password:");

    if (pass && pass.length >= 6) {
      alert("Password updated successfully!");
    } 
    else if (pass) {
      alert("Password is too short!");
    }

  };

  const handleCancel = () => {

    if (window.confirm("Are you sure you want to cancel your membership?")) {
      alert("Membership cancelled. We're sad to see you go!");
    }

  };

  return (

    <div className="min-h-screen bg-[#141414] text-white pt-24 px-6 md:px-20 lg:px-40 pb-10 font-sans">

      <h1 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-4 tracking-tight text-white/90">Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="text-gray-400 font-bold text-sm tracking-widest uppercase">Membership & Billing</div>
        
        <div className="md:col-span-2 space-y-6 bg-[#181818] p-6 rounded-md shadow-xl border border-white/5">

          <div className="flex justify-between items-center border-b border-gray-700 pb-4">

            <div>

              <p className="text-white font-bold">{user.email}</p>
              <p className="text-gray-500 text-sm">Password: ********</p>

            </div>

            <button onClick={handleChangePassword} className="text-blue-500 hover:text-blue-400 transition text-sm font-semibold">Change password</button>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700 pb-4">

            <div>

              <p className="text-gray-400 text-sm italic">Display Name</p>
              <p className="text-white font-bold text-lg">{user.name}</p>

            </div>

            <button onClick={handleChangeName} className="text-blue-500 hover:text-blue-400 transition text-sm font-semibold">Change name</button>

          </div>

          <button 
            onClick={handleCancel}
            className="w-full md:w-auto bg-gray-200 text-black px-8 py-2 font-bold hover:bg-white transition uppercase text-xs tracking-widest rounded-sm shadow-md"
          >


            Cancel Membership
          </button>

        </div>

        <div className="text-gray-400 font-bold text-sm tracking-widest uppercase">Plan Details</div>

        <div className="md:col-span-2 bg-[#181818] p-6 rounded-md shadow-xl border border-white/5 flex justify-between items-center">

          <div className="flex items-center gap-3">

             <span className="border border-red-600 text-red-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">Premium</span>
             <span className="font-bold text-white/90">Ultra HD (4K) + HDR</span>

          </div>

          <button onClick={() => alert("Plans coming soon!")} className="text-blue-500 hover:text-blue-400 transition text-sm font-semibold">Change plan</button>

        </div>

      </div>
      
      <div className="mt-12 flex justify-center">

         <button onClick={() => navigate('/home')} className="bg-red-600 px-12 py-3 rounded-sm text-white font-bold hover:bg-red-700 transition shadow-2xl active:scale-95 uppercase tracking-widest text-sm">
           Back to Movies
         </button>

      </div>

    </div>

  );
  
};

export default Account;