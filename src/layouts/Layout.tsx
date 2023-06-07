import React from "react";
import {Navbar} from "../components/Navbar";
import {UserProvider} from "../components/providers/UserProvider";
import {UserInfoPanel} from "../components/panels/UserInfoPanel";
import { Outlet } from "react-router";
import {JokeBoundary} from "../components/errors/JokeBoundary";


export const Layout = function () {
    return (
        <>
            <Navbar />
            <UserProvider>
                <UserInfoPanel></UserInfoPanel>
            </UserProvider>
            <JokeBoundary>
                <Outlet />
            </JokeBoundary>
        </>
    )
}