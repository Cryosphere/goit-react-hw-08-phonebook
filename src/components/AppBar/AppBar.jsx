import { useAuth } from "utils/hooks/useAuth";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import style from './AppBar.module.css';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={style.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};