import "./style.css";
export default function YoutubeResult() {
    return (
        <div className="download-result">
            <div className="container">
                <div className="first-column">
                    <div className="thumb-nail">
                        <img src="./images/0.jpg" alt="" />
                    </div>
                    <div className="thumb-nail-caption">
                        <b>Video Title</b>
                    </div>
                </div>
                <div className="second-column">
                    <ul className="icon-nav">
                        <li className="active">
                            <i className="fa-solid fa-video"></i>
                            Video
                        </li>
                        <li>
                            <i className="fa-solid fa-music"></i>
                            Audio
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="video-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>File type</th>
                                        <th>File size</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1080p (.mp4){" "}
                                            <span className="label label-primary">
                                                <small>full-HD</small>
                                            </span>
                                        </td>
                                        <td>239 MB</td>
                                        <td className="button-column">
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                            >
                                                <i className="fa-solid fa-download"></i>
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> 480p (.mp4) </td>
                                        <td>53 MB</td>
                                        <td className="txt-center">
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                            >
                                                <i className="fa-solid fa-download"></i>
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
