import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"
import { useAppSelector, useAppDispatch } from "./../hooks";
import { RootState } from "./../store";
import * as GithubSlice from "../features/github/githubSlice";
import { useEffect } from 'react'



export const Footer = () : JSX.Element => {
	const githubStatus = useAppSelector((state: RootState) => state.github.status);
	const githubData = useAppSelector((state: RootState) => state.github.data);
	const dispatch = useAppDispatch();
	let lastMody: string = "";


	useEffect(() => {
		dispatch(GithubSlice.getData());
	}, [dispatch]);

	if (githubStatus === "done") {
		let date = githubData?.commit?.commit?.committer?.date
		if (date) {
			lastMody = (new Date(date)).toLocaleString("pl-PL")
		}

	}

	return (
		<>
			<footer>
			<div className="footer-push"></div>

				<div className="footer-container-wrapper">
					<div className="layout1">
						<div>
							<p style={{color:"white", fontSize: "16px"}}>
								{lastMody && (
									<>
										<span><FontAwesomeIcon icon={faCopyright} size="1x" /></span>
											{" "}
										<span>
												<FontAwesomeIcon icon={faPenNib} size="1x" />
												{" "}
												{lastMody}
										</span>
									</>
								)}
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}