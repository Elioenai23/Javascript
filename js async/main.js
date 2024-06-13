const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
log.textContent = "";

const xhr = new XMLHttpRequest();

xhr.addEventListener("loaded", () => {
  log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
});


xhr.open(
  "GET",
  "https://raw.githubuser.content.com/mdn/content/main/files/en-us/_wikihistory/json",
);

xhr.send();
log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});