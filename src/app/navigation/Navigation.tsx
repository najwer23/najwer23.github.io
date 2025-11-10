import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <Grid layout="container" widthMax={1600}>
      <Grid layout="container" widthMax={1400} padding={'20px'} margin={'auto'}>
        <Grid
          layout="columns"
          gap={{ col: '20px', row: '20px' }}
          col={{
            smallDesktop: 2,
            desktop: 2,
            mobile: 2,
            tablet: 2,
          }}
        >
          <div>
            <TextBox desktopSize={26} mobileSize={20} fontWeight={500} tag="a" href="/">
              @najwer23
            </TextBox>
          </div>

          <div>
            <Grid layout="flex" justifyContent="flex-end">
              <TextBox
                tag="a"
                href="https://najwer23.github.io/resume/"
                desktopSize={26}
                mobileSize={20}
                fontWeight={500}
                rel="noreferrer"
                target="_blank"
              >
                Résumé
              </TextBox>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <div className={styles.navigationLine}></div>

      <Grid layout="container" widthMax={1400} padding={'20px'} margin={'auto'} className={styles.navigationTabMenu}>
        <Grid layout="flex" justifyContent="center" widthMax={1400} gap={{ col: '30px', row: '20px' }}>
          <div>
            <TextBox tag="a" href="/#/home" desktopSize={18} mobileSize={18} fontWeight={400} color="darkgrey">
              Home
            </TextBox>
          </div>
          <div>
            <TextBox tag="a" href="/#/about" desktopSize={18} mobileSize={18} fontWeight={400} color="darkgrey">
              About
            </TextBox>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
