import { Text } from 'najwer23storybook/lib/Text';
import { Container } from 'najwer23storybook/lib/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './Home.module.css';
import { GithubLastMody } from '@najwer23/github/GithubLastMody';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';

const SOCIAL_MEDIA = [
  {
    title: 'Github',
    path: 'https://github.com/najwer23',
    icon: <FontAwesomeIcon icon={faGithub} color={'black'} />,
    outPage: true,
  },
  {
    title: 'Twitter',
    path: 'https://twitter.com/najwer23',
    icon: <FontAwesomeIcon icon={faXTwitter} color={'black'} />,
    outPage: true,
  },
  {
    title: 'Linkedin',
    path: 'https://www.linkedin.com/in/najwer23/',
    icon: <FontAwesomeIcon icon={faLinkedinIn} color={'black'} />,
    outPage: true,
  },
  {
    title: 'NPM',
    path: 'https://www.npmjs.com/package/najwer23storybook',
    icon: <FontAwesomeIcon icon={faNpm} color={'black'} />,
    outPage: true,
  },
];

interface Props {
  title: string
}

export const Home = ({ title }: Props) => {
  useDocumentTitle(title)

  return <>
    <Container kind="nav">
      <div className={styles.nav}>
        <div className={styles.lastUpdate}>
          <GithubLastMody repoName="najwer23.github.io" />
        </div>
        <div className={styles.resumeLink}>
          <a target="_blank" href="https://najwer23.github.io/resume/" rel="noreferrer">
            Résumé
          </a>
        </div>
      </div>
    </Container>

    <Container kind="main">
      <Container kind="homeContent">
        <Text kind="h1"> Mariusz Najwer </Text>
        <Text kind="pSubTitle"> Frontend Software Engineer </Text>
        <div className={styles.socialMedia}>
          {SOCIAL_MEDIA.map(({ path, title, icon }) => (
            <span key={path + title}>
              <a href={path} target="_blank" rel="noopener noreferrer" aria-label={title} title={title}>
                {icon}
              </a>
            </span>
          ))}
        </div>
        <Text kind="p">
          <i>„Great web design without functionality is like a sports car with no engine.”</i>
        </Text>
      </Container>
    </Container>
  </>
};
