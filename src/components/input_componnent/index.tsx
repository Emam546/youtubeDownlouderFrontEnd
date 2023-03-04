import { Link } from "react-router-dom";
import "./style.scss";
export default function InputHolder() {
    return (
        <div className="downloader">
            <div className="container tw-bg-white  tw-shadow">
                <form
                    action=""
                    method="get"
                    className="text-center tw-p-10 main-form"
                >
                    <h2 className="tw-font-medium">Download Video and Audio from YouTube</h2>
                    <div className="input-container">
                        <input
                            type="text"
                            name="input"
                            id="id"
                        />
                        <button type="submit" className="tw-p-4">
                            <span className="">Start</span>
                            <i className="fa-solid fa-arrow-right m-2"></i>
                        </button>
                    </div>
                    <p className="terms tw-text-xs tw-p-2">
                        By using our service you are accepting our
                        <Link to="/terms-of-service">Terms of Use.</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
