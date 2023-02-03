import { useContext } from "react";
import YoutubeResult from "../../youtubeResult";
import "./style.css";
import { UserContext } from "../../context/info";
export function TextFun() {
    const data=useContext(UserContext);
    return (
        <div className="text-content-main">
            <div className="container">
                <h2>
                    <strong>YouTube Video Downloader</strong>
                </h2>
                <h4>
                    {data.siteName} allows you to convert & download video from YouTube,
                    Facebook, Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD
                    quality. {data.siteName} supports downloading all video formats such
                    as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can
                    easily download for free thousands of videos from YouTube
                    and other websites.
                </h4>
            </div>
        </div>
    );
}

export default function Main() {
    return (
        <>
            <YoutubeResult />
            <TextFun />
        </>
    );
}
