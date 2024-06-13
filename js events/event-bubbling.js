const output = document.querySelector("#output");
function handleClick(e){
  output.textContent += `You clicked on a ${e.currentTarget.tagname} element\n`;

}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick)