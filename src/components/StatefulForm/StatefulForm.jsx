import { useState } from "react";

const StatefulForm = () => {
  const [text, setText] = useState('Sohag');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(password.length < 6) {
        setError('Password must be 6 or more character!')
    }
    else {
        setError('')
        console.log(text, email, password);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleTextChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input onChange={handlePassChange} type="password" required name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default StatefulForm;
