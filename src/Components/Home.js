import Createpost from './Createpost'
import Post from './Post'
import {useState} from 'react'


const Home = () => {

    const [showlogin, setshowlogin]=useState(false);
    const [showreg, setshowreg]=useState(false);

    function openlogin(){
        setshowlogin(true);
        setshowreg(false);
    }
    function openreg(){
        setshowlogin(false);
        setshowreg(true);
    }

    function closeall(){
        setshowlogin(false);
        setshowreg(false);
    }

    return (
        <div className="home">
            <div className="container2">
                <h1>Hello Jane</h1>
                <p>How are you doing today? Would you like to share something with the community 🤗</p>
                <Createpost/>
                <Post/>
            
            
            </div>

        </div>
    );
}

export default Home;