import { AiFillCloseCircle } from "react-icons/ai";

const Homeregister = (props) => {
    const {openlogin, closeall}=props;

    return (
        <div className="login">
            <div className="Card">

                <div className="close" onClick={closeall}>
                    <AiFillCloseCircle />
                </div>
                <p className="welcome">SIGN UP</p>
                <h1 className="loginto">Create an account to continue</h1>
                <br></br>

                <div className="left">
                    <label for="email" className="label">Email</label>
                </div>
                <input type="text" id="email" name="email" className="logintext" placeholder="Enter your email"></input>

                <div className="left">
                    <label for="user" className="label">Username</label>
                </div>
                <input type="text" id="user" name="user" className="logintext" placeholder="Choose a preferred username"></input>

                <div className="left">
                    <label for="password" className="label">Password</label>
                </div>
                
                <div style={{ position:"relative"}}>
                <input type="text" id="password" name="password" className="logintext" placeholder="Choose a strong password"></input>

                    <svg  style={{ color: "#7F8084", position:"absolute", top:"18", right: "12" }}   xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                </div>

                <button className="btn1" onClick={closeall}>Continue</button>

                <p className="welcome left" onClick={openlogin}>Already have an account?<span className="label cur">Login →</span> </p>





            </div>
        </div>
    );
}

export default Homeregister;