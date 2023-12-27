//import langArr from "./langArr.js";

const select = document.querySelector("#lang");
const allLang = ['de', 'en', 'ru'];

console.log(select.value)
select.addEventListener("change", () => {
   location.href = window.location.pathname + "#" + select.value;
   location.reload();
    console.log(select.value);
});
function changeLanguage(){
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)){
    location.href = window.location.pathname + "#de";
    location.reload();
  }
  select.value = hash;
  for (let key in langArr) {
    let elem = document.querySelector('#lng-' + key);
    if (elem) {
        elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();