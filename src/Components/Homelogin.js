import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai";

const Login = (props) => {
    const { openlogin, openreg, closeall } = props;
    return (
        <div className="login">


            <div className="Card">

                <div className="close" onClick={closeall}>
                    <AiFillCloseCircle />
                </div>

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

                <button className="btn1" onClick={closeall}>Login Now</button>

                <p className="welcome left" onClick={openreg}>Not registered yet? <span className="label">Register →</span> </p>





            </div>
        </div >
    );
}

export default Login;