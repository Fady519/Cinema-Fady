
const AuthInput = ({ type, placeholder, value, onChange }) => {

  return (

    <div className="w-full mb-4">

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-4 bg-[#333] text-white rounded focus:outline-none focus:bg-[#454545] transition-all"
      />

    </div>
    
  );
};

export default AuthInput;

