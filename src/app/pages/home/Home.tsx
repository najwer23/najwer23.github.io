import { Grid } from 'najwer23morsels/lib/grid';
import { SliderScroll } from 'najwer23morsels/lib/sliderscroll';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Home.module.css';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Grid layout="container" widthMax={1400} padding={'40px 20px 20px 20px'}>
        <Grid layout="container" widthMax={700} padding={'0 0 40px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500}>
            The way I work <br /> is not an accident.
          </TextBox>
        </Grid>
        <Grid layout="container" widthMax={700} padding={'0 0 100px 0'} margin={0}>
          <TextBox tag="p" desktopSize={28} mobileSize={22} fontWeight={400}>
            My approach blends precision, creativity, and relentless focus, ensuring that every project I undertake
            delivers beyond expectations.
          </TextBox>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={1360} padding={'0'}>
        <div style={{ height: '400px', width: '100%' }}>
          <SliderScroll gap="10px" isCircular autoPlay autoPlaySpeed={0.5}>
            {[
              { name: 'Angular', color: '#DD0031' },
              { name: 'React', color: '#61DAFB' },
              { name: 'Typescript', color: '#3178C6' },
              { name: 'JavaScript', color: '#F0DB4F' },
              { name: 'Node.js', color: '#339933' },
              { name: 'Fastify', color: '#6F2CAC' },
              { name: 'CSS', color: '#1572B6' },
              { name: 'AWS', color: '#252F3E' },
              { name: 'Next.js', color: '#000000' },
              { name: 'Expo', color: '#1B998B' },
              { name: 'React Native', color: '#61DAFB' },
            ].map(({ name, color }) => (
              <div
                key={name}
                className={styles.homeSliderScrollItems}
                style={{
                  background: color,
                }}
              >
                <TextBox tag="p" desktopSize={48} mobileSize={35} fontWeight={400} color="white">
                  {name}
                </TextBox>
              </div>
            ))}
          </SliderScroll>
        </div>
      </Grid>

      <Grid layout="container" widthMax={1400} padding={'20px 20px 40px 20px'}>
        <Grid layout="container" padding={'100px 0 100px 0'} margin={0}>
          <Grid
            layout="columns"
            gap={{ col: '100px', row: '40px' }}
            col={{
              smallDesktop: 2,
              desktop: 2,
              mobile: 1,
              tablet: 2,
            }}
          >
            <>
              {[
                {
                  title: 'Deliberate Problem-Solving',
                  text: 'I deeply analyze challenges to choose the best fit solutions rather than quick fixes.',
                },
                {
                  title: 'Code Quality and Maintainability',
                  text: 'I write clean, readable, well-documented code that is easy to understand and extend.',
                },
                {
                  title: 'Continuous Learning and Improvement',
                  text: 'I constantly update my skills to leverage the latest technology advancements.',
                },
                {
                  title: 'Collaboration and Communication',
                  text: 'I value open feedback and clear communication to align expectations and drive progress.',
                },
                {
                  title: 'User-Centric Design',
                  text: 'I prioritize accessibility and usability to create intuitive user experiences.',
                },
                {
                  title: 'Efficiency and Scalability',
                  text: 'I design solutions that are efficient today and scalable for future growth.',
                },
              ].map(({ title, text }) => (
                <div key={title}>
                  <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                    {title}
                  </TextBox>
                  <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                    {text}
                  </TextBox>
                </div>
              ))}
            </>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
