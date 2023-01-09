import "./Select.css";
import { useState, useEffect } from "react";

export default function Select(props) {
	let arrObjValues = sortByLabel(props.options);

	useEffect(() => {
		var x, i, j, selElmnt, a, b, c;
		x = document.getElementsByClassName("select-custom-" + props.id);

		for (i = 0; i < x.length; i++) {
			selElmnt = x[i].getElementsByTagName("select")[0];
			a = document.createElement("div");
			a.setAttribute("class", "select-selected");
			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			x[i].appendChild(a);
			b = document.createElement("div");
			b.setAttribute("class", "select-items select-hide");

			for (j = 1; j < selElmnt.length; j++) {
				c = document.createElement("div");
				c.innerHTML = selElmnt.options[j].innerHTML;
				c.addEventListener("click", function (e) {
					var y, i, k, s, h;
					s = this.parentNode.parentNode.getElementsByTagName("select")[0];
					h = this.parentNode.previousSibling;

					for (i = 0; i < s.length; i++) {
						if (s.options[i].innerHTML == this.innerHTML) {
							s.selectedIndex = i;
							h.innerHTML = this.innerHTML;
							y = this.parentNode.getElementsByClassName("same-as-selected");
							for (k = 0; k < y.length; k++) {
								y[k].removeAttribute("class");
							}
							this.setAttribute("class", "same-as-selected");
							break;
						}
					}

					h.click();
					handleChange();
				});
				b.appendChild(c);
			}

			x[i].appendChild(b);
			a.addEventListener("click", function (e) {
				e.stopPropagation();
				closeAllSelect(this);
				this.nextSibling.classList.toggle("select-hide");
				this.classList.toggle("select-arrow-active");
			});
		}

		function closeAllSelect(elmnt) {
			var x,
				y,
				i,
				arrNo = [];
			x = document.getElementsByClassName("select-items");
			y = document.getElementsByClassName("select-selected");
			for (i = 0; i < y.length; i++) {
				if (elmnt == y[i]) {
					arrNo.push(i);
				} else {
					y[i].classList.remove("select-arrow-active");
				}
			}
			for (i = 0; i < x.length; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add("select-hide");
				}
			}
		}

		document.addEventListener("click", closeAllSelect);
	}, []);

	function handleChange(e) {
		if (props.onChange !== undefined) {
			props.onChange();
		}
	}

	return (
		<>
			<div className="input-text-with-label">
				<label> {props.label} </label>
				<div className={"noselect select-custom select-custom-" + props.id}>
					<select onChange={handleChange} ref={props.innerRef}>
						{arrObjValues.map((v, i) => (
							<option key={i} value={v.value}>
								{v.label}
							</option>
						))}
					</select>
				</div>
			</div>
		</>
	);
}

function sortByLabel(arr) {
	let result = [];
	result.push(arr[0]);
	result.push(
		arr
			.slice(1)
			.sort((a, b) => (a.label < b.label ? -1 : Number(a.label > b.label)))
	);
	return result.flat(1);
}
