

const Register = () => {
    return (
        <div>
            <h1>Register Form:</h1>
            <form action="">
                <input type="email" name="email" id="email" />
                <br />
                <input type="password" name="password"   id="password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;