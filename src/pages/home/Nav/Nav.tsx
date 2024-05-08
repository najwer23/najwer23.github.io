import { GithubLastMody } from '../../../github/GithubLastMody'
import styles from './index.module.css'

export const Nav = () => (
	<div className={styles.wrapper}>
		<div className={styles.lastUpdate}>
			<GithubLastMody repoName="najwer23.github.io" />
		</div>
		<div className={styles.resumeLink}>
			<a target="_blank" href="https://najwer23.github.io/resume/">
				Résumé
			</a>
		</div>
	</div>
)