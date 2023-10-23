import { useState } from "react";


const Register = () => {
    const [email, setEmail] = useState("")
    const handleEmailChange = (event)=>{
        console.log(event.target.value);
        setEmail(email.target.value);
    }

    const handlePasswordBlur = (event)=>{
        console.log(event.target.value);
    }
    return (
        <div>
            <h1>Register Form:</h1>
            <form onChange={handleEmailChange} action="">
                <input type="email" name="email" id="email" />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password"   id="password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;