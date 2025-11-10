import { Grid } from 'najwer23snacks/lib/Grid';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import styles from './Skeleton.module.css';

export const Skeleton: React.FC = () => {
  return (
    <>
      <Grid widthMax={1400} layout="container" padding="0" margin="auto">
        <div className={`${styles.skeleton} ${styles.skeletonH1}`}>
          <TextBox tag="h1">&nbsp;</TextBox>
        </div>

        {Array.from({ length: 3 }, (_, index) => (
          <Grid key={index} widthMax={1400} layout="container" padding="0px 0 50px 0" margin="auto">
            <Grid widthMax={1400} layout="container" padding="10px 0 30px 0" margin="auto">
              <div>
                <div className={`${styles.skeleton} ${styles.skeletonRow1}`}></div>
                <div className={`${styles.skeleton} ${styles.skeletonRow2}`}></div>
                <div className={`${styles.skeleton} ${styles.skeletonRow3}`}></div>
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
