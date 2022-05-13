import Createpost from './Createpost'
import Post from './Post'
import { useState } from 'react'
import Homelogin from './Homelogin'
import Homeregister from './Homeregister'


const Home = () => {

    const [showlogin, setshowlogin] = useState(false);
    const [showreg, setshowreg] = useState(false);

    function openlogin() {
        setshowlogin(true);
        setshowreg(false);
    }
    function openreg() {
        setshowlogin(false);
        setshowreg(true);
    }

    function closeall() {
        setshowlogin(false);
        setshowreg(false);
    }

    return (
        <>
            <div className="home">
                <div className="container2" >
                    <h1>Hello Jane</h1>
                    <p className="hometext">How are you doing today? Would you like to share something with the community 🤗</p>
                    <br/>
                    <div onClick={openreg}>
                        <Createpost />
                        <Post />
                    </div>

                    {showlogin && <Homelogin 
                        openlogin={openlogin}
                        openreg={openreg}
                        closeall={closeall}
                    />}

                    {showreg && <Homeregister
                        openlogin={openlogin}
                        openreg={openreg}
                        closeall={closeall}
                    />}



                </div>

            </div>


            {/* <Homeregister/> */}

        </>
    );
}

export default Home;