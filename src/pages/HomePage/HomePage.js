import style from './HomePage.module.css';
import { PhoneIcon } from '@chakra-ui/icons';

export default function HomePage() {
  return (
    <div className={style.container}>
      <PhoneIcon viewBox="0 0 16 16" />
      <h1 className={style.title}>Welcome to the phonebook app</h1>
    </div>
  );
}
