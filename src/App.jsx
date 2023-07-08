import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './redux/auth/authSlice';
// import { useSelector, useDispatch } from 'reac t-redux';

function App() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const state = useSelector(state => state);
  console.log("state:", state); 

  const onSubmit = (event) => {
     event.preventDefault();
     const data = {
      email,password
     };
    //  console.log("credentials are:",data)
    dispatch(login(data)); 
  }


  return (
    <>
     <form>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
      <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='passcode'/>
      <button onClick={onSubmit}>login</button>
     </form>
    </>
  )
}

export default App
