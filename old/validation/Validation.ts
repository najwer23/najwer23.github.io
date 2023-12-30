//todo rewrite into typescript

export const Validation = (
	code: string,
	parent: ParentNode | null,
	value: string
): boolean => {
	let errorCreated: HTMLParagraphElement = document.createElement("p");
	errorCreated.className = "error";

	let objVR: {
		isError: boolean;
		msg: string;
	} = {
		isError: false,
		msg: "",
	};

	let errorCurrent = parent!.querySelector("." + errorCreated.className);

	switch (code) {
		case "emptyString":
			objVR = testEmptyString(value);
			break;
		case "email":
			objVR = testEmail(value);
			break;

		default: {
			// const exhaustiveCheck: never = code;
			// throw new Error(exhaustiveCheck);
		}
	}

	if (objVR.isError) {
		if (errorCurrent) {
			errorCurrent.innerHTML = objVR.msg;
			return false;
		}

		errorCreated.innerHTML = objVR.msg;
		parent!.appendChild(errorCreated);
		return false;
	} else {
		if (errorCurrent) {
			parent!.removeChild(errorCurrent);
		}
	}

	return true;
};

function testEmail(value: string) {
	if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)) {
		return {
			isError: true,
			msg: "Incorrect email address",
		};
	}
	return { isError: false, msg: "" };
}

function testEmptyString(value: string) {
	return value === "" || value === null
		? {
				isError: true,
				msg: "The field cannot be empty",
		  }
		: {
				isError: false,
				msg: "",
		  };
}
