import styles from './Spinner.module.css';
import { Grid } from 'najwer23snacks/lib/Grid';

export const Spinner: React.FC = () => {
  return <Grid widthMax={1400} layout="container" padding="0" margin="auto auto">
    <div className={`${styles.loader}`}></div>
  </Grid>;
};
