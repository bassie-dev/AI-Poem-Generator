function SearchPoem(event){
    event.preventDefault();
new Typewriter("#poem", {
  strings: "The fountains mingle with the river",
  autoStart: true,
  delay: 1,
  cursor:""
});
}

let formElement=document.querySelector("#poem-form")
formElement.addEventListener("submit",SearchPoem)