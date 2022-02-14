        // case function
function updateProductNumber (product,price,isIncreasing){
    const productInput =document.getElementById(product + '-number')
    let productNumber = productInput.value ;
    if(isIncreasing==true){
        productNumber = parseInt(productNumber)+ 1;
    }
    else if( productNumber > 0){
        productNumber = parseInt( productNumber)-  1;
    }
    productInput.value =productNumber;
    // update case total price
    const productTotal=document.getElementById(product + "-total");
    productTotal.innerText= productNumber * price;

    calculateTotal();
}
                // calculate total
function getInputValue (product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal =getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal/10;
    const total = tax + subTotal;
    // update on html
    document.getElementById("sub-total").innerText =subTotal;
    document.getElementById("tax-amount").innerText =tax;
    document.getElementById("total-price").innerText =total;
}
 
function remove(){
    document.get
}


// function updateCaseNumber (isIncreasing){
//     const caseInput =document.getElementById("case-number")
//     let caseNumber = caseInput.value ;
//     if(isIncreasing==true){
//         caseNumber = parseInt(caseNumber)+ 1;
//     }
//     else if( caseNumber > 0){
//         caseNumber = parseInt(caseNumber)-  1;
//     }
//     caseInput.value = caseNumber;
//     // update case total price
//     const caseTotal=document.getElementById("case-total");
//     caseTotal.innerText=caseNumber * 59;
    
// }
        // calculate total





            // calling case 
document.getElementById("case-plus").addEventListener("click", function(){
   updateProductNumber("case",59,true);          
})
document.getElementById("case-minus").addEventListener("click", function(){
    updateProductNumber("case",59,false);

            
})
            // calling phone
document.getElementById("phone-plus").addEventListener("click", function(){
    updateProductNumber("phone",1219,true);
   
})
document.getElementById("phone-minus").addEventListener("click", function(){
    updateProductNumber("phone",1219,false);
   
})


