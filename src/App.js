import React, { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import './App.css';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessfully, setShowSuccessfully] = useState(false);

  function HandleEmailInput(event) {
    setEmail(event.target.value);
  }

  function HandlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function HandleLoginBtnClick() {
    if (email === "johndoe@example.com" & password === "john123456") {
      setShowSuccessfully(true);
    }
    else {
      setShowSuccessfully(false);
    }
  }
  return (
    <div>
      <div className="loginContainer">
        <span className='loginHeader'>Login</span>
        <div className='content'>
          <span className='emailHeader'>Email</span>
          <input className='input' type="text"
            onChange={(event) => HandleEmailInput(event)} />
          <span className='passwordHeader'>Password</span>
          <input className='input' type="password" min="8"
            onChange={(event) => HandlePasswordInput(event)} />
          <button className='loginBtn' onClick={HandleLoginBtnClick}>LOG IN</button>
        </div>
        <div className='keepLogin'>
          <CheckBoxOutlineBlankIcon className='checkBoxIcon' />
          <span className='keepLoginText'>Keep me logged in</span>
        </div>
        <span className='forgotPassword'>Forgot password?</span>
      </div>
      {showSuccessfully &&
        <div className='alert'>
          <span class="close" onClick={() => setShowSuccessfully(false)}>&times;</span>
          You Successfully Logged in.😊
        </div>
      }
    </div>
  );
}

export default App;
