import { useState } from "react";
import { UserProvider } from "./context/info";
import Header from "./header";
import { Outlet } from "react-router-dom";
import InputHolder from "./components/input_componnent";
import Footer from "./footer";

export default function SharedLayout() {
    return (
        <UserProvider>
            <Header />
            <main>
                <InputHolder />
                <Outlet />
            </main>
            <Footer />
        </UserProvider>
    );
}
