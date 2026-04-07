import { Popup } from 'react-leaflet';
import styles from './CustomPopup.module.css';

export const CustomPopup: React.FC = () => {
  return (
    <>
      <Popup className={styles.n23CustomPopup}>Sky Tower, Wrocław</Popup>
    </>
  );
};
