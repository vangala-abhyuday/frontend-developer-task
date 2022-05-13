import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            
            <div className="Card">

                <p className="welcome">WELCOME BACK</p>
                <h1 className="loginto">Log into your account</h1>
                <br></br>

                <div className="left">
                    <label for="email" className="label">Email or Username</label>
                </div>
                <input type="text" id="email" name="email" className="logintext" placeholder="Enter your email or username"></input>

                <div className="btwn">
                    <label for="password" className="label">Password</label>
                    <label for="" className="label">Forgot password?</label>
                </div>
                <input type="text" id="password" name="password" className="logintext" placeholder="Enter your password"></input>

                <Link to="/home">
                    <button className="btn1">Login Now</button>
                </Link>
                <p className="welcome left">Not registered yet? <span className="label">Register →</span> </p>





            </div>
        </div>
    );
}

export default Login;