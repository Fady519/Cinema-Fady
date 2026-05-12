import { Link } from 'react-router-dom';

const Footer = () => {


  return (

    <footer className="bg-[#111] text-gray-500 py-10 px-8 md:px-20 lg:px-40 border-t border-gray-800">

      <div className="flex gap-6 mb-6">
        <span className="hover:text-white cursor-pointer text-xl">Facebook</span>
        <span className="hover:text-white cursor-pointer text-xl">Instagram</span>
        <span className="hover:text-white cursor-pointer text-xl">Twitter</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs mb-8">

        <div className="flex flex-col gap-3">

          <Link to="/help" className="hover:underline">FAQ</Link>
          <Link to="/profile" className="hover:underline">Account</Link>

          <span className="hover:underline cursor-pointer">Investor Relations</span>
          <span className="hover:underline cursor-pointer">Ways to Watch</span>

        </div>

        <div className="flex flex-col gap-3">

          <Link to="/help" className="hover:underline">Help Center</Link>

          <span className="hover:underline cursor-pointer">Jobs</span>
          <span className="hover:underline cursor-pointer">Terms of Use</span>
          <span className="hover:underline cursor-pointer">Contact Us</span>

        </div>

        <div className="flex flex-col gap-3">

          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Cookie Preferences</span>
          <span className="hover:underline cursor-pointer">Legal Notices</span>

        </div>

        <div className="flex flex-col gap-3">

           <span className="hover:underline cursor-pointer">Media Center</span>
           <span className="hover:underline cursor-pointer">Corporate Information</span>

        </div>

      </div>

      <div className="border border-gray-600 w-fit px-2 py-1 mb-6 text-[10px]">
        Service Code
      </div>

      <p className="text-[10px]">© 2026 Cinema+, Inc. Developed by Fady Kaiser Gerges.</p>

    </footer>

  );
  
};

export default Footer;