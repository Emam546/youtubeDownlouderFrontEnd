import { useState } from "react";
import { UserProvider } from "./context/info";
import Header from "./header";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SharedLayout from "./sharout";
import Downloader from "./pages/download";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/" element={<Downloader />} />
                </Route>
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
