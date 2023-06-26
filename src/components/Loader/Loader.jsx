import { TailSpin } from "react-loader-spinner";
import style from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={style.loader}>
            <TailSpin
                height="80"
                width="80"
                color="#000000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
};