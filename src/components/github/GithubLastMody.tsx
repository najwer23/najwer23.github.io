import { useFetch } from "../../hooks/useFetch";

interface Props {
	repoName: string;
}

export const GithubLastMody = ({ repoName }: Props): JSX.Element => {
	const { data, status } = useFetch<any>(`https://api.github.com/repos/najwer23/${repoName}/branches/gh-pages`, {
		method: "GET",
	})
	let lastMody: string = "";

	if (status === "done") {
		lastMody = (new Date(data!.commit.commit.committer.date)).toLocaleString("pl-PL", {
			day: '2-digit',
			month: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			year: 'numeric',
		})
	}

	return <>{lastMody || "\u00a0"}</>;
}