import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Help = () => {

  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSupport = (type) => {

    alert(`Thank you for reaching out! A ${type} session is being prepared for you. Estimated wait: 2 mins.`);

  };

  const faqs = [

    { q: "How can I download movies?", a: "To download, click on the download icon next to the movie title. Only available on Premium plans." },
    { q: "Is Cinema+ free?", a: "Cinema+ offers a free trial for 7 days, then you can choose a plan that suits you." },
    { q: "Can I watch on multiple devices?", a: "Yes, the Premium plan allows you to watch on 4 screens at the same time." },
    { q: "How do I cancel my plan?", a: "You can cancel anytime through the Account page by clicking 'Cancel Membership'." }

  ];

  return (

    <div className="min-h-screen bg-[#141414] text-white font-sans">
      
      <div className="bg-[#f5f5f1] text-black py-20 px-6 text-center shadow-inner">

        <h1 className="text-5xl font-black mb-8 tracking-tighter">Help Center</h1>

        <div className="max-w-2xl mx-auto relative group">

          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="What do you need help with?" 
            className="w-full p-5 pl-14 rounded-md shadow-2xl border-none focus:ring-4 focus:ring-red-600/20 transition-all outline-none text-lg"
          />

          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl opacity-40 group-focus-within:opacity-100 transition-opacity">🔍</span>
        </div>

      </div>

      <div className="max-w-4xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold mb-10 text-white/90">Popular Topics</h2>
        
        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div key={index} className="bg-[#181818] border border-white/5 rounded-md shadow-lg transition duration-300 hover:border-white/20">

              <button 
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full text-left p-6 font-bold flex justify-between items-center text-lg md:text-xl"
              >

                {faq.q}

                <span className={`text-red-600 transition-transform text-2xl ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>

              </button>

              {activeFaq === index && (

                <div className="p-6 text-gray-400 border-t border-white/5 leading-relaxed bg-black/20 animate-slideDown">
                  {faq.a}
                </div>

              )}

            </div>

          ))}

        </div>


        
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-gradient-to-br from-red-600/20 to-transparent border border-red-600/30 p-10 rounded-xl text-center backdrop-blur-sm group hover:border-red-600 transition shadow-2xl">
            <h3 className="text-2xl font-black mb-3">Call Support</h3>
            <p className="text-gray-400 mb-6 font-medium">Talk to a real person 24/7</p>

            <button 
                onClick={() => handleSupport('Phone Call')}
                className="bg-red-600 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-red-700 transition transform active:scale-95"
            >
                Contact Support
            </button>

          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-600/30 p-10 rounded-xl text-center backdrop-blur-sm group hover:border-blue-600 transition shadow-2xl">
            <h3 className="text-2xl font-black mb-3">Live Chat</h3>

            <p className="text-gray-400 mb-6 font-medium">Fastest way to get answers</p>

            <button 
                onClick={() => handleSupport('Live Chat')}
                className="bg-blue-600 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition transform active:scale-95"
            >
                Start Chat
            </button>

          </div>

        </div>

      </div>

      <div className="pb-20 text-center">

         <button onClick={() => navigate('/home')} className="text-gray-500 hover:text-red-600 transition font-bold uppercase tracking-widest text-xs underline decoration-2 underline-offset-8">
            Return to Cinema+
         </button>

      </div>
      
    </div>

  );
};

export default Help;