export interface CustomHashRoutesPathElement {
	path: string;
	element: JSX.Element[] | JSX.Element;
}

export interface CustomHashRoutesProps {
	routes: CustomHashRoutesPathElement[];
}