import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Github, GithubSliceState } from "../../types/typesGithub";

const initialState: GithubSliceState = {
	status: "idle",
	data: null
};

export const GithubSlice = createSlice({
	name: "github",
	initialState,
	reducers: {
		initData: (state, action: PayloadAction<Github>) => {
			state.status = "done";
			state.data = action.payload
		}
	},
});

export const getData = () => async (dispatch: any) => {
	try {
		const res = await fetch("https://api.github.com/repos/najwer23/najwer23.github.io/branches/main");
		const data = (await res.json()) as Github;
		dispatch(initData(data));
	} catch (err: any) {
		throw new Error(err);
	}
};

export const { initData } = GithubSlice.actions;
export default GithubSlice.reducer;