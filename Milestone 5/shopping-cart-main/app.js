
document.getElementById('plusButton').addEventListener('click', function(){

    const operationPlus = document.getElementById('valueOfThePlusMinus');
    const operationPlusString = operationPlus.value;
    const operationPlusInt = parseInt(operationPlusString);

    const IncrementOperationPlus = operationPlusInt + 1;

    operationPlus.value = IncrementOperationPlus;


    const operationPrice = document.getElementById('priceText');
    const operationPricestring = operationPlus.innerText;
    const operationPriceInt = parseInt(operationPricestring);


    const operationPriceResult = IncrementOperationPlus * 1219;

    operationPrice.innerText = operationPriceResult;


    const operationSubTotal = document.getElementById('subTot');
    const operationSubTotalString = operationSubTotal.innerText;
    const operationSubTotalInt = parseInt(operationSubTotalString);

    operationSubTotal.innerText = operationPriceResult;




    // console.log(operationPricestring)
    // console.log(typeof operationPricestrings)


});



document.getElementById('minusButton').addEventListener('click', function(){

    const operationPlus = document.getElementById('valueOfThePlusMinus');
    const operationPlusString = operationPlus.value;
    const operationPlusInt = parseInt(operationPlusString);

    if(operationPlusInt <= 1 ){

        alert('Minimum Select One Product');

        return ;

    }


    const IncrementOperationPlus = operationPlusInt - 1;

    

    operationPlus.value = IncrementOperationPlus;


    const operationPrice = document.getElementById('priceText');
    const operationPricestring = operationPlus.innerText;
    const operationPriceInt = parseInt(operationPricestring);


    const operationPriceResult = IncrementOperationPlus * 1219;

    operationPrice.innerText = operationPriceResult;

    const operationSubTotal = document.getElementById('subTot');
    const operationSubTotalString = operationSubTotal.innerText;
    const operationSubTotalInt = parseInt(operationSubTotalString);

    operationSubTotal.innerText = operationPriceResult;




    // console.log(operationPricestring)
    // console.log(typeof operationPricestrings)


});

document.getElementById('removeItem').addEventListener('click', function(){

    const deleteRowww = document.getElementsByClassName('cart-item');
    const operationHtmlDel = deleteRowww.innerHTML;

    operationHtmlDel.remove();



})