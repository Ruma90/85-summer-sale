total = 0

function handleCLikBtn(target) {
    const selectedItem = document.getElementById('selected-items')
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;

    selectedItem.appendChild(li)


    const taka = target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    total = parseInt(total) + parseInt(taka)

    const totalPrice = document.getElementById('total-price').innerText = total.toFixed(2)


    const parseButton = document.getElementById('purchase-btn')
    if (totalPrice >= 0) {
        parseButton.removeAttribute('disabled')
    }
    else {
        parseButton.setAttribute('disabled', true)
    }

    const applyButton = document.getElementById('apply-btn')
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled')
    }
    else {
        applyButton.setAttribute('disabled', true)
    }

    document.getElementById('code-btn').addEventListener('keyup', function (event) {
        const text = event.target.value
        const discount = ((totalPrice * 20) / 100);
        const totalTaka = totalPrice - discount;
        document.getElementById('apply-btn').addEventListener('click',function(){
            if (text === 'SELL200') {

                document.getElementById('total-discount').innerText = discount
                document.getElementById('total-Amount').innerText = totalTaka
    
            }
            event.target.value = ''
        })
        

    })

}

document.getElementById('home-btn').addEventListener('click', function () {
    document.getElementById('total-price').innerText = "00.00"
    document.getElementById('total-discount').innerText = "00.00"
    document.getElementById('total-Amount').innerText = "00.00"
    document.getElementById('code-btn').value = ''
    
    



})

// document.getElementById('total-price').addEventListener('')

// const total1 = document.getElementById('total-price').value

// const parseButton = document.getElementById('purchase-btn')
// if (total1 >= 0) {
//     parseButton.removeAttribute('disabled')
// }
// else {
//     parseButton.setAttribute('disabled', true)
// }

