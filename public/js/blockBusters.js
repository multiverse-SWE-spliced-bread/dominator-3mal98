const redBlocks = document.getElementById('blocks')
const addBlock = document.createElement('div')
redBlocks.appendChild(addBlock)

for (let i = 1; i < 100; i++) {
    const addBlock = document.createElement('div')
    addBlock.innerHTML = '<div class="red-block" id="block-1"></div>'
    redBlocks.appendChild(addBlock)
}