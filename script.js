// Please Translate the webpage into English First

let publicationDate = document.querySelectorAll('.lbl-licitacao font font')[1].innerText;
let biddingDate = document.querySelectorAll('.lbl-licitacao font')[18].innerText;
let objectV = document.querySelector('.field-content p font').innerText;
let links = document.querySelectorAll('.field.field--name-field-icone.field--type-image.field--label-hidden.field__item a');
let linksArr = [...links].map(link => link.href);

console.log(`Publication Date : ${publicationDate}`);
console.log(`Bidding Date : ${biddingDate}`);
console.log(`Object : ${objectV}`);
console.log(`Links: ${linksArr}`);
