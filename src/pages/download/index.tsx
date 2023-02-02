export default function InputHolder() {
    return (
        <div className="downloader">
            <div className="container">
                <form action="" method="get">
                    <h2>Download Video and Audio from YouTube</h2>
                    <input type="text" name="input" id="id" />
                    <button type="submit">
                        Start
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}
