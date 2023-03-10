import { UserProvider } from "./context/info";
import Header from "./header";
import { Outlet, useLocation, useParams } from "react-router-dom";
import InputHolder from "./components/input_componnent";
import Footer from "./footer";
import { useQuery } from "@tanstack/react-query";
import { StoreData } from "./store";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import Downloader from "./components";

export default function SharedLayout() {    
    return (
        <UserProvider>
            <Header />
            <Downloader />
            <Outlet />
            <Footer />
        </UserProvider>
    );
}
