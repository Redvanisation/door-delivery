const apiUrl = "https://grocerybear.com/getitems";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	
	console.log("clicked");

	fetch(apiUrl).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err));
	
});
