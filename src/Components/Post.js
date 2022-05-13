
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

                    <div className="cur">...</div>

                </div>


                <div className="card-content">
                    <div className="emoji"><div>👋</div></div>
                    <div className="content hometext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>


                <div className="cur hometext2">24 comments</div>
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

                    <div className="cur">...</div>

                </div>


                <div className="card-content">
                    <div className="emoji">😞</div>
                    <div className="content hometext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>


                <div className="cur hometext2">40 comments</div>
            </div>

        </>
    );
}

export default Post