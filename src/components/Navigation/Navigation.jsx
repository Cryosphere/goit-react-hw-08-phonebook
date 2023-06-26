import { useAuth } from "utils/hooks/useAuth";
import { NavLink } from "react-router-dom";
import style from './Navigation.module.css'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink className={style.link} to='/'>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={style.link}  to='/contacts'>
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};