import "../css/FontMulish.css";
import "../css/App.css";
import LanguageContext from "./LanguageContext";
import ApplyPageBreaks from "./ApplyPageBreaks";
import PageIntro from "./PageIntro";
import PageAbout from "./PageAbout";
import PageEducation from "./PageEducation";
import PageExp from "./PageExp";
import ChangeLanguage from "./ChangeLanguage";
import PageSkills from "./PageSkills";
import PageProjects from "./PageProjects";
import PageProjects2 from "./PageProjects2";
import PageProjects3 from "./PageProjects3";

import { useState } from "react";

export default function App() {
	const [language, setLanguage] = useState("EN");

  return (
		<>
			<LanguageContext.Provider value={{ language, setLanguage }}>
				<ChangeLanguage />
				<div className="page">
					<PageIntro />
					<PageAbout />
					<PageEducation />
					<PageExp />
				</div>
				<div className="page">
					<PageProjects />
				</div>
				<div className="page">
					<PageProjects2 />
				</div>
				<div className="page">
					<PageProjects3 />
					<PageSkills />
				</div>
				{/* <ApplyPageBreaks /> */}
			</LanguageContext.Provider>

			{/* <div className="page" contentEditable="true">
        <p>
          Second <code>.page</code> element
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
          cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <p>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
          vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
          accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
          delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <p>
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
        <div className="page-break" contentEditable="false"></div>
        <p>
          This sentence is preceded by a manual page break:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <code>
            &lt;div className="page-break" contentEditable="false"&gt;&lt;/div&gt;
          </code>
        </p>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo
          eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet
          clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata
          ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <p>
          Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div> */}
		</>
	);
}

// src={`${process.env.PUBLIC_URL}/assets/images/undraw_percentages.svg`}
