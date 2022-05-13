const Homeregister = () => {
    return (
        <div className="login">
            <div className="Card">

                <p className="welcome">SIGN UP</p>
                <h1 className="loginto">create an account to continue</h1>
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
                <input type="text" id="password" name="password" className="logintext" placeholder="Choose a strong password"></input>

                <button className="btn1">Continue</button>

                <p className="welcome left">Already have an account?<span className="label cur">Login →</span> </p>





            </div>
        </div>
    );
}

export default Homeregister;