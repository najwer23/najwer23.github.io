import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footerPush}></div>
      <div className={styles.footerContainer}>
        <Grid layout="container" widthMax={1600}>
          <Grid layout="flex" widthMax={1400} padding={'20px'} justifyContent="right">
            <TextBox mobileSize={22} desktopSize={22} color="#eee" tag="p">
              © Mariusz Najwer
            </TextBox>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};
