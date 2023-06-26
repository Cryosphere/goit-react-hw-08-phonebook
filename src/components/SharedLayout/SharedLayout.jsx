import { AppBar } from "components/AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import style from './SharedLayout.module.css'

export const SharedLayout = () => {
    return (
        <div className={style.container}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};