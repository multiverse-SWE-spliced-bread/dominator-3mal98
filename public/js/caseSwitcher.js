const btn1 = document.getElementById('quiet-btn')
const btn2 = document.getElementById('loud-btn')
const btn3 = document.getElementById('sarc-btn')
const p = document.getElementById('patrick')
btn1.addEventListener('click', lowercase)
btn2.addEventListener('click', uppercase)
btn3.addEventListener('click', sarcasm)

function lowercase (e) {
    console.log(e)
    let txt = p.innerText
    p.innerText = txt.toLowerCase()
}

function uppercase (e) {
    console.log(e)
    let txt = p.innerText
    p.innerText = txt.toUpperCase()
}

function sarcasm () {
    const p = document.getElementById('patrick')
    let txt = p.innerText
    let sarc = ''
  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
   
    let i = 0
    for (let c of txt) {
      if (alphabet.includes(c.toLowerCase())) {
        c = i % 2 ? c.toUpperCase() : c.toLowerCase()
        i++
      }
      sarc += c
    }
  
    p.innerText = sarc
}
