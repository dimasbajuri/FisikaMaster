import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import ButtonOne from "../../Atoms/Button/ButtonOne";

const FormInput = (props) => {
  const { label, password = false, login = false, type, onChange = '' } = props;
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const inputSpanStyle = `absolute bottom-0 left-0 inset-x-0 h-0.5 bg-gray-400 transition-all duration-300 `;
  const anotherInputSpanStyle = `
    .relative:focus-within .bg-gray-400 {
      background-color: black;
      display: block;
    }

    .relative:focus-within .hidden {
      display: block;
    }
  
    .relative:hover .bg-gray-400 {
      background-color: black;
      transition: background-color 300ms ease-in-out;
    }
  `;

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div className="relative">
        <label htmlFor={type} className="capitalize">
          {label}
        </label>
        <br />
        {password && (
          <FontAwesomeIcon
            onClick={handleEyeClick}
            icon={`fa-regular fa-eye${showPassword ? "-slash" : ""}`}
            className="absolute right-0 bottom-2 text-gray-400 hover:text-black cursor-pointer transition-all duration-300"
          />
        )}
        <input
          ref={inputRef}
          type={password && !showPassword ? "password" : "text"}
          name={type}
          id={type}
          className="focus:outline-none w-full cursor-pointer bg-transparent"
          onChange={onChange}
          required
        />
        <span className={inputSpanStyle}></span>
        <style jsx>{anotherInputSpanStyle}</style>
      </div>
      {password && login &&
        <a href="" className="text-gray-400 hover:text-black transition-colors duration-300 text-sm">lupa password?</a>
      }
    </div>
  );
};

const LogRegTemplate = (props) => {
  const { h1, login, buttonText } = props;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === password)
  }

  const handleSubmit = (event) => {
    if (password === confirmPassword) {
      console.log("Password Match");
    } else {
      setPasswordMatch(false);
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
      <div className='px-10 py-8 bg-slate-100 shadow-md font-jost'>
        <h1 className='text-xl font-bold'>{h1}</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className='mt-5 flex flex-col gap-y-5'>
            <FormInput
              label='Nama'
              type='text'
            />
            <FormInput
              label='email'
              type='email'
            />
            <FormInput
              label='password'
              type='password'
              onChange={handlePasswordChange}
              password={true}
              login={login} />
            {/* Confirm Password Disini */}
            <FormInput
              label='Confirm Password'
              type='password'
              onChange={handleConfirmPasswordChange}
              password={true}
              login={login} />
          </div>
          <ButtonOne type='submit'>{buttonText}</ButtonOne>
          {
            login === true ?
              <a href="/register" className="text-gray-400 hover:text-black transition-colors duration-300 text-sm">Belum memiliki akun? Register disini</a>
              :
              <a href="/login" className="text-gray-400 hover:text-black transition-colors duration-300 text-sm">Sudah memiliki akun? Login disini</a>
          }
        </form>
      </div>
    </div>
  )
}

export default LogRegTemplate