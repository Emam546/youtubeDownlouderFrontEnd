import { Link } from "react-router-dom";
import "./style.css"
export default function InputHolder() {
    return (
        <div className="downloader">
            <div className="container">
                <form action="" method="get" className="main-form">
                    <h2>Download Video and Audio from YouTube</h2>
                    <div className="input-container">
                        <input type="text" name="input" id="id" />
                        <button type="submit">
                            <span>Start</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <p className="terms">By using our service you are accepting our 
                        <Link to="/terms-of-service">Terms of Use.</Link>
                        
                    </p>
                </form>
            </div>
        </div>
    );
}
