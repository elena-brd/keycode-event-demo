function createKeyCodes(e) {
    const container = document.querySelector('.container');
    container.innerHTML = '';


    const keyCodes = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    for (let keys in keyCodes) {

        const div = document.createElement('div');
        div.className = 'key-box';
        const span = document.createElement('span');

        const keyTitle = document.createTextNode(keys);
        const keyValue = document.createTextNode(keyCodes[keys]);

        span.appendChild(keyTitle)
        div.appendChild(keyValue);
        div.appendChild(span)
        container.appendChild(div)
    }
}

window.document.addEventListener('keydown', createKeyCodes);