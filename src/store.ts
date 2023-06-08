import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./features/contact/contactSlice"
import githubReducer from "./features/github/githubSlice";
import weatherReducer from "./features/weather/weatherSlice";

export const store = configureStore({
	reducer: {
		contact: contactReducer,
		github: githubReducer,
		weather: weatherReducer
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
