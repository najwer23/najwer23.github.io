import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactSliceState, ErrorMsg } from "../../types/types";
import * as Utils from "../../utils/Utils";


const initialState: ContactSliceState = {
	status: "idle",
	error: null
};

export const ContactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		setErrorState: (state, action: PayloadAction<ErrorMsg>) => {
			state.error = action.payload
			state.status = "error"
		},
		setLoadingState: (state) => {
			state.status = "loading"
		},
		setDoneState: (state) => {
			state.status = "done"
		},
		setIdleState: (state) => {
			state.status = "idle"
		},
	},
});

export const postData = (body?: any) => async (dispatch: any) => {
	dispatch(setLoadingState())

	let fetchObj = {
		url: "/najwer23api/contact-me",
		method: "POST",
		body: body,
	};

	let data = await Utils.useFetch(...(Object.values(fetchObj) as [string, number, any])) as ErrorMsg;

	if (data.code === 200) {
		dispatch(setDoneState())
	} else {
		dispatch(setErrorState(data))
	}

	setTimeout(() => {
		dispatch(setIdleState())
	}, 5000)
}

export const { setErrorState, setLoadingState, setDoneState, setIdleState} = ContactSlice.actions;
export default ContactSlice.reducer;