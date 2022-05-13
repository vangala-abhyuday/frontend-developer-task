import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Createpost = () => {
    return (
        <div className="post-card">
            <p className="card-title">Create post</p>
            <div className="card-content">
                <div className="image"  style={{fontSize: 16,}} >💬</div>
                <div className="content hometext">How are you feeling today?</div>
            </div>
            <div className="d-flex flex-row justify-content-end">
                <button className="btn2">Post</button>
            </div>
        </div>
    );
}

export default Createpost