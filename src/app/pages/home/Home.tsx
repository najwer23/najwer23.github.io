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
            gap={{ col: '40px', row: '40px' }}
            col={{
              smallDesktop: 2,
              desktop: 2,
              mobile: 1,
              tablet: 2,
            }}
          >
            <div>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                Deliberate Problem-Solving
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                I take the time to deeply analyze challenges before rushing to solutions. This ensures that the approach
                I choose is the best fit for the problem at hand rather than a quick or temporary fix.
              </TextBox>
            </div>

            <div>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                Code Quality and Maintainability
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                Writing clean, readable, and well-documented code is a core commitment of mine. I believe that code
                should be easy for others to understand and extend, which supports long-term project success.
              </TextBox>
            </div>

            <div>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                Continuous Learning and Improvement
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                Technology evolves constantly, and so do I. I continuously update my skills and adapt my methods to
                leverage the latest advancements and improve the quality of my work.
              </TextBox>
            </div>

            <div>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                Collaboration and Communication
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                I thrive in cross-functional teams, valuing open feedback and clear communication. Aligning expectations
                early and keeping everyone in sync accelerates progress and drives better outcomes.
              </TextBox>
            </div>

            <div>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                User-Centric Design
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                Prioritizing the end user’s experience is essential. I focus on accessibility and usability to create
                solutions that truly meet users’ needs and deliver intuitive interactions.
              </TextBox>
            </div>

            <div>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                Efficiency and Scalability
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                I design solutions that solve today’s problems while anticipating future growth. This approach ensures
                that my work remains efficient and scalable as requirements evolve.
              </TextBox>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
