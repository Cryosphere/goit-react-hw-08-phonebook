import { useDispatch } from "react-redux";
import { useAuth } from "utils/hooks/useAuth";
import { logOut } from "redux/auth/operations";
import Button from 'react-bootstrap/Button';

export const MenuPopover = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <>
            <p className='mb-2' style={{ paddingBottom: 10 }}>email: {user.email}</p>
            <Button variant="secondary" type='button' onClick={handleLogOut}>
                Logout
            </Button>
        </>
    );
};