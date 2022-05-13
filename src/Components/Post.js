
const Post = () => {
    return (
        <>
            <div className="post-card">
                <div className="d-flex justify-content-between pb-3">

                    <div className="profile-content">
                        <div className="image image1 cur"></div>
                        <div className="content">
                            <span className="cur">Theresa Webb</span><br />
                            <span className="hometext2">5mins ago</span>
                        </div>
                    </div>

                    <div className="cur">
                        <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </div>

                </div>


                <div className="card-content">
                    <span className="image">👋</span>
                    <span className="content hometext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>


                <div className="cur hometext2">
                    <svg style={{ color: "white" }}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                </svg>   24 comments</div>
            </div>


            <div className="post-card">
                <div className="d-flex justify-content-between pb-3">

                    <div className="profile-content">
                        <div className="image image2 cur"></div>
                        <div className="content">
                            <span className="cur">Marvin McKinney</span><br />
                            <span className="hometext2">8mins ago • Edited</span>
                        </div>
                    </div>

                    <div className="cur">
                        <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </div>

                </div>


                <div className="card-content">
                    <div className="image">😞</div>
                    <div className="content hometext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                   </div>
                </div>


                <div className="cur hometext2">
                    <svg style={{ color: "white" }}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                </svg>   40 comments</div>

            </div>

        </>
    );
}

export default Post