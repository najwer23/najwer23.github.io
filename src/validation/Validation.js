//todo rewrite into typescript

export default function Validation(code, parent, value) {
  let errorCreated = document.createElement("p");
  errorCreated.className = "error";
  let objVR;
  let errorCurrent = parent.querySelector("." + errorCreated.className);

  switch (code) {
    case "email": objVR = testEmail(value); break;
    case "emptyString": objVR = testEmptyString(value); break;
    case "credentialsFail": objVR = testCredentialsFail(value); break;
    case "sameInputs": objVR = testIfTheSameInputs(value); break;
    case "customError": objVR = testCustomError(value); break;
    case "weight": objVR = testWeight(value); break;
    case "positiveResponse": objVR = testPositiveResponse(value); break;
    case "date": objVR = testDate(value); break;
    case "clearError": objVR = clearError(value); break;
    case "naturalNumber": objVR = testNaturalNumber(value); break;
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

    if (objVR.positiveResponse) {
      errorCreated.className += " positiveResponse"
      setTimeout(function () {
        errorCreated.remove();
      }, 1500);
    }

    errorCreated.innerHTML = objVR.msg;
    parent.appendChild(errorCreated);
    return false;
  } else {
    if (errorCurrent) {
      parent.removeChild(errorCurrent);
    }
  }

  return true;
}

function testPositiveResponse(value) {
  return {
    isError: true,
    msg: value,
    positiveResponse: true,
    color: "green"
  };
}

function testCustomError(value) {
  return  {
    isError: true,
    msg: value,
  }
}

function clearError(value) {
  return {
    isError: false,
  };
}

function testDate(value) {
  let date = value.split(",")[0]

  if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
    return {
      isError: true,
      msg: "Date is incorrect",
    };
  }

  return { isError: false };
}

function testIfTheSameInputs(value) {
  return value.v1 !== value.v2
    ? {
        isError: true,
        msg: "Values are not the same",
      }
    : { isError: false };
}

function testWeight(value) {
  let empty = testEmptyString(value);

  if (empty.isError) {
    return empty;
  }

  if (!Number.isFinite(+value)) {
    return {
      isError: true,
      msg: "Weight is not the number",
    };
  }

  if (Number.isFinite(+value)) {
    if (+value < 500 && +value > 0) {
      return {
        isError: false,
      };
    } else {
      return {
        isError: true,
        msg: "Weight is out of range",
      };
    }
  }
}

function testNaturalNumber(value) {
  let empty = testEmptyString(value);

  if (empty.isError) {
    return empty;
  }

  if (!Number.isFinite(+value)) {
    return {
      isError: true,
      msg: "Reps are not the number",
    };
  }

  if (!((Math.floor(+value) === +value) && !value.includes(",") && !value.includes("."))) {
    return {
      isError: true,
      msg: "Reps can not be float number",
    };
  }

  if (!(+value < 1000 && +value > 0)) {
    return {
      isError: true,
      msg: "Reps are out of range",
    };
  }

  return {
    isError: false,
  };
}

function testCredentialsFail(value) {
  return value === null
    ? {
        isError: true,
        msg: "Incorrect credentials",
      }
    : { isError: false };
}

function testEmptyString(value) {
  return (value === "" || value === null)
    ? {
        isError: true,
        msg: "The field cannot be empty",
      }
    : { isError: false };
}

function testEmail(value) {
  if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return {
      isError: true,
      msg: "Incorrect email address",
    };
  }
  return { isError: false };
}

// function addCss2Element(element, style) {
//   for (const property in style) {
//     element.style[property] = style[property];
//   }
// }

/*
 addCss2Element(errorCreated, {
   margin: "3px 0 0 0",
   color: "red",
 });
 */