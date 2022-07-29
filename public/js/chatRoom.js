const sendMsgBtn = document.getElementById('send-btn')
const chatDisplayArea = document.getElementById('chat')

sendMsgBtn.addEventListener('click', sendMessage)

function sendMessage (e) {
    console.log(e)
    
    // When the button is clicked:
    // 1. Get the message the user has typed
    const inputBox = document.querySelector('input') 
    const txt = inputBox.value

    // 2. Add a <p> element to the <section id="chat"> which contains the user's message
    const p = document.createElement('p')
    p.innerText = txt
    chatDisplayArea.appendChild(p)

    // 3. Empty the input box
    inputBox.value = ''
}
