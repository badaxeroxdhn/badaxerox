/*to show a live preview of the keys and values of all items in the localeStorage, click right click in the page and select inspect, then select the Application tap beside the console tab and then select local Storage in the Storage Tab and then open the local Storage option and select the file:// option */

/*global document*/
//first, define variables
let keyInput       = document.querySelector(".key"),
	valueDiv       = document.querySelector(".value-div"),
	valueInput     = document.querySelector(".value-div input"),
	valueAddSpan   = document.querySelector(".value-div .add"),
	valueBackSpan  = document.querySelector(".value-div .back"),
	buttonsDiv     = document.querySelector(".buttons"),
	buttons        = document.querySelectorAll(".buttons span"),
	checkItem      = document.querySelector(".check"),
	deleteItem     = document.querySelector(".delete"),
	deleteAllItems = document.querySelector(".delete-all"),
	setItem        = document.querySelector(".set"),
	getItems       = document.querySelector(".get"),
	result         = document.querySelector(".result"),
	resultSpan     = document.querySelector(".result > span");


//second, make a loob for each the check and set and get buttons in the buttons div
buttons.forEach((button) => {
	document.addEventListener("click", (e) => {
		if(e.target.classList.contains("check")){
			checkFun();
		}
		if(e.target.classList.contains("set")){
			setFun();
		}
		if(e.target.classList.contains("get")){
			getFun();
		}
	});
});

//fifth, checkFun()
function checkFun() {
	if(keyInput.value == "" || keyInput.value == (" ") * 1) {
		resultSpan.innerHTML  = `<span>can Not Check empty Item</span>`;
		keyInput.focus();
	} else {
		if(localStorage.getItem(keyInput.value)) {
			resultSpan.innerHTML = `Found Local Storage Item Called <span>${keyInput.value}</span>`;
			keyInput.focus();
		} else {
			resultSpan.innerHTML = `No Local Storage Item With The Name <span>${keyInput.value}</span>`;
			keyInput.focus();
		}
	}
}

//sixth, deleteFun()
deleteItem.onclick = function () { 
	if(keyInput.value == "" || keyInput.value == (" ") * 1) {
		resultSpan.innerHTML  = `<span>can Not delete empty Item</span>`;
		keyInput.focus();
	} else {
		if (localStorage.getItem(keyInput.value)) {
		localStorage.removeItem(keyInput.value);
		resultSpan.innerHTML = `Storage Item<span> ${keyInput.value} </span>has been deleted`;
		keyInput.focus();
		keyInput.value = "";
		} else {
			resultSpan.innerHTML = `No Local Storage item with the Name <span> ${keyInput.value} </span> is found to be deleted`;
			keyInput.focus();
		}
	}
}

//seventh, deleteAllFun
deleteAllItems.onclick = function () {
	if (localStorage.length == 0) {
		resultSpan.innerHTML = `No Items in the Local Storage to be deleted..`
		keyInput.focus();
	} else {
		localStorage.clear();
		resultSpan.innerHTML = `All Items in the Local Storage has been deleted, Storage is clear Now`
		keyInput.focus();
	}
}
//eigth, setFun()
function setFun() {
	if(keyInput.value == "" || keyInput.value == (" ") * 5) {
		resultSpan.innerHTML = `<span>can Not set empty Item</span>`;
	} else {
		valueInput.classList.add("show-input");
		valueAddSpan.classList.add("show-span");
		valueBackSpan.classList.add("show-span");
		buttonsDiv.classList.add("hide");
		result.classList.add("special");
		valueInput.focus();
		
		//if click in the back button
		valueBackSpan.onclick = function(){
			valueInput.classList.remove("show-input");
			valueAddSpan.classList.remove("show-span");
			valueBackSpan.classList.remove("show-span");
			buttonsDiv.classList.remove("hide");
			result.classList.remove("special");
			keyInput.focus();
			valueInput.value = "";
		}
		
		//if clicked in the add button
		valueAddSpan.onclick = function() {
			if(valueInput.value == "" || valueInput.input == (" ") * 1) {
				resultSpan.innerHTML = `<span>You must enter a value name to your item</span>`;
				
			} else if (keyInput.value == "" || keyInput.value == (" ") * 1){
				resultSpan.innerHTML = `<span>can Not set a value without its name</span>`;
			} else {
				localStorage.setItem(`${keyInput.value}`, `${valueInput.value}`);
				resultSpan.innerHTML = `Storage Item has been added with the Name <span>${keyInput.value}</span> and the value <span>${valueInput.value}`;
				
				valueInput.classList.remove("show-input");
				valueAddSpan.classList.remove("show-span");
				valueBackSpan.classList.remove("show-span");
				buttonsDiv.classList.remove("hide");
				result.classList.remove("special");
				
				valueInput.value = "";
				keyInput.value   = "";
				keyInput.focus();
			}
		}
	}
}

//ninth, getFun()
function getFun() {
	if(localStorage.length) {
		resultSpan.innerHTML = "";
		for ([key, value] of  Object.entries(localStorage)){
			resultSpan.innerHTML += `<span class= "keys">Information: ${key}<br>Notice: ${value}</span>`;
			keyInput.focus();
		}
	
	} else {
		resultSpan.innerHTML = `Local Storage is Empty, No Items are existed`;
		keyInput.focus();
	}
}

//tenth, focus on the keyInput if reload
window.onload = function() {
	keyInput.focus();
}