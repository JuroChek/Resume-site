const output = document.querySelector("#output");
const input = document.querySelector("#input");
const login = document.querySelector('#in_log')
const info = document.querySelector('#info');
const btn = document.querySelector('#switcher');
const button = document.querySelector('#registr')

const a = "Arbeitgeber"
const b = "Password"
 
btn.addEventListener('click', () => {
    
  if (input.getAttribute('type') === 'password') {
    input.setAttribute('type', 'text')
    btn.setAttribute('class', 'show_btn active')

   }
    else {
        input.setAttribute('type', 'password')
        btn.setAttribute('class', 'show_btn')
   }
});
  
input.addEventListener("input", (event) => {
    const l = event.currentTarget.value;
    const lange  = l.length;
    let substr = 8 - lange;
    
    if (l.length <= 7) {  
        info.style.color  = "var(--accent-6)";
        info.innerHTML = `Password kurz ist ${lange} Zeichen eingeben ${substr} noch `;
        }
        else 
    {
        info.style.color  = "var(--primary-1)";
        info.innerHTML = "Das Password ist Gut!"
       }
;});

button.addEventListener('click', () => {
    if (login.value === a) {
        login.style.borderLeft = '7px solid var(--primary-1)'
        if (input.value === b) {
            input.style.borderLeft = '7px solid var(--primary-1)'
            setTimeout(() => {window.location.href = "lebenslauf.html";}, 1_000);
        }
        else {
            input.style.borderLeft = '7px solid var(--accent-6)'
            info.innerHTML = "Der Kennwort ist falsch"
        }
    } 
    else{
        //info.innerHTML = "login ist falsch";
        login.style.borderLeft = '7px solid var(--accent-6)'
    }
})

     