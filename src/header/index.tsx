import { useContext, useState } from "react"
import "./style.css"
import { UserContext } from "../context/info"

export default function Header(){
    const {siteName}=useContext(UserContext)
    const [state,setState]=useState(false)
    return <header className="header">
        <div className="container">
            <div className="left">
                <div className="title">
                    <img src="./images/logo.png" className="logo" alt="" />
                    <h1>{siteName}</h1>
                </div>
                <i className="fa-solid fa-bars sub-menu" onClick={()=>setState(!state)}></i>
            </div>
            <nav className={state?"active":""}>
                <a href="#"><div>YouTube Downloader</div></a>
                <a href="#"><div>YouTube Converter</div></a>
                <a href="#"><div>YouTube to MP3 Converter</div></a>
            </nav>
        </div>
    </header>
}