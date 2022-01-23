const { hash } = window.location;

const message = atob(hash.replace("#", ""));
console.log(message);
if (message) {
	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#message-show").classList.remove("hide");

	document.querySelector("h3").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault(); //prevent default behaviour of browser

	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#link-form").classList.remove("hide");

	const input = document.querySelector("#message-input");
	const encripted = btoa(input.value);

	const linkInput = document.querySelector("#link-input");
	linkInput.value = `${window.location}#${encripted}`;
	linkInput.select();
});
