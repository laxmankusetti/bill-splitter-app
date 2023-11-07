document.addEventListener('DOMContentLoaded', function() {
    const billInput = document.getElementById('bill');
    const peopleInput = document.getElementById('people');
    const percentageBtns = document.querySelectorAll('.percentage-btn');

    const customInput = document.getElementById('custom');

    const tip_amnt = document.getElementById('tip-amnt');
    const total_amnt = document.getElementById('total-amnt');

    function calculateValue() {
        const bill = parseFloat(billInput.value)
        const people = parseFloat(peopleInput.value)

        if(customInput.value){
            let percentage = parseFloat(customInput.value)
            const billPerHead = bill / people 
            const tip = billPerHead * (parseFloat(percentage) / 100)
            const totalAmount = (billPerHead + tip).toFixed(2)
            tip_amnt.innerText = tip.toFixed(2)
            total_amnt.innerText = totalAmount

        }

        percentageBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
            let percentage = e.target.getAttribute('percentage');
            const billPerHead = bill / people 
            const tip = billPerHead * (parseFloat(percentage) / 100)
            const totalAmount = (billPerHead + tip).toFixed(2)

            tip_amnt.innerText = tip.toFixed(2)
            total_amnt.innerText = totalAmount
           })
        })
    }

    percentageBtns.forEach(btn => {
        btn.addEventListener('click', calculateValue)
    })

    percentageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            percentageBtns.forEach(btn => btn.classList.remove('selected'))
            btn.classList.add('selected')
        })
    })

    customInput.addEventListener('input', calculateValue)
})