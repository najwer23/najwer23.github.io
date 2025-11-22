import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footerPush}></div>
      <div className={styles.footerContainer}>
        <Grid layout="container" widthMax={'1600px'}>
          <Grid layout="flex" widthMax={'1400px'} padding={'20px 0 0'} justifyContent="center">
            <TextBox mobileSize={22} desktopSize={22} color="black" tag="p">
              © Mariusz Najwer
            </TextBox>
          </Grid>
          <Grid layout="flex" widthMax={'1400px'} padding={'0'} justifyContent="center">
            <TextBox mobileSize={12} desktopSize={12} color="black" tag="p">
              2019 - {new Date().getFullYear()}
            </TextBox>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};
