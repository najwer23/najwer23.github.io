export const sortByKeyArrObj = (arr: any) => {
	let result = [];
	result.push(arr[0]);
	result.push(
		arr
			.slice(1)
			.sort((a: any, b: any) =>
				a.label < b.label ? -1 : Number(a.label > b.label)
			)
	);
	return result.flat(1);
}