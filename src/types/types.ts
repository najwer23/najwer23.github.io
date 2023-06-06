export interface CustomHashRoutesPathElement {
	path: string;
	element: JSX.Element[] | JSX.Element;
}

export interface CustomHashRoutesProps {
	routes: CustomHashRoutesPathElement[];
}

export interface MenuProps {
	menuType: string
}

export interface ErrorMsg {
	code?: number;
	data?: {
		msg: string;
	};
	desc?: string
}

export interface ContactSliceState {
	status: "idle" | "loading" | "done" | "error";
	error: ErrorMsg | null;
}