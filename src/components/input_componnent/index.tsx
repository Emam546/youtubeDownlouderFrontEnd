import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { validateURL, getVideoID } from "../../utils";
// export function Options() {
//     return (
//         <ul className="position-absolute bg-white tw-border 
//         tw-border-solid tw-border-black 
//         tw-text-start w-100 tw-top-[100%]
//         tw-overflow-y-auto tw-left-0">
//             <li className="tw-px-3 tw-py-1">option</li>
//             <li className="tw-px-3 tw-py-1">option</li>
//             <li className="tw-px-3 tw-py-1">option</li>
//             <li className="tw-px-3 tw-py-1">option</li>
//             <li className="tw-px-3 tw-py-1">option</li>
//         </ul>
//     );
// }
export default function InputHolder() {
    const navigate = useNavigate();
    
    return (
        <form
            action=""
            method="POST"
            className="text-center tw-px-2 sm:tw-px-10  tw-py-10 main-form"
            autoComplete="off"
            onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const video = data.get("video");
                if (typeof video != "string") return;
                if (validateURL(video))
                    return navigate(`/youtube/${getVideoID(video)}`);
                else
                    return navigate(`/search/${video}`)
            }}
        >
            <h2 className="tw-font-medium">
                Download Video and Audio from YouTube
            </h2>
            <div className="input-container">
                <div className="tw-flex-grow position-relative">
                    <input
                        type="text"
                        name="video"
                        id="id"
                    />
                </div>
                <button
                    type="submit"
                    className="tw-p-4"
                >
                    <span className="">Start</span>
                    <i className="fa-solid fa-arrow-right m-2"></i>
                </button>
            </div>
            <p className="terms tw-text-xs tw-p-2">
                By using our service you are accepting our
                <Link to="/terms-of-service">Terms of Use.</Link>
            </p>
        </form>
    );
}
