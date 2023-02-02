import { useState } from "react";
import { UserProvider } from "./context/info";
import Header from "./header";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <UserProvider>
            <Header />
            <main>
                <Outlet />
            </main>
        </UserProvider>
    );
}
