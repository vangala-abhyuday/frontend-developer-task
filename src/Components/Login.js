import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="firstlogin">
            <div >
                <img  className="icon" src="icon.jpeg" alt="icon"/>
            </div>

            <br/><br/>
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
                <div style={{ position:"relative"}}>
                    <input type="text" id="password" name="password" className="logintext" placeholder="Enter your password"></input>
                    
                    <svg  style={{ color: "#7F8084", position:"absolute", top:"18", right: "12" }}   xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                </div>
                <Link to="/home">
                    <button className="btn1">Login Now</button>
                </Link>
                <p className="welcome left">Not registered yet? <span className="label">Register →</span> </p>


                



            </div>
        </div>
    );
}

export default Login;