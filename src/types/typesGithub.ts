// https://app.quicktype.io/

export interface GithubSliceState {
	status: "idle" | "loading" | "done" | "error";
	data: Github | null;
}

export interface Github {
	name: string;
	commit: GithubCommit;
	_links: Links;
	protected: boolean;
	protection: Protection;
	protection_url: string;
}

export interface Links {
	self: string;
	html: string;
}

export interface GithubCommit {
	sha: string;
	node_id: string;
	commit: CommitCommit;
	url: string;
	html_url: string;
	comments_url: string;
	author: PurpleAuthor;
	committer: PurpleAuthor;
	parents: Parent[];
}

export interface PurpleAuthor {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}

export interface CommitCommit {
	author: FluffyAuthor;
	committer: FluffyAuthor;
	message: string;
	tree: Tree;
	url: string;
	comment_count: number;
	verification: Verification;
}

export interface FluffyAuthor {
	name: string;
	email: string;
	date: Date;
}

export interface Tree {
	sha: string;
	url: string;
}

export interface Verification {
	verified: boolean;
	reason: string;
	signature: null;
	payload: null;
}

export interface Parent {
	sha: string;
	url: string;
	html_url: string;
}

export interface Protection {
	enabled: boolean;
	required_status_checks: RequiredStatusChecks;
}

export interface RequiredStatusChecks {
	enforcement_level: string;
	contexts: any[];
	checks: any[];
}
