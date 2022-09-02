//phone Plus Minus
 document.getElementById("phonePlus").addEventListener('click', function(){
   updateAmount(true);
})
document.getElementById('phoneMinus').addEventListener('click', function(){
 updateAmount(false);
});
 function updateAmount(isPlus){
   const numberPlus = document.getElementById("numberPlus").value;
   let numberPlusBtn = parseInt(numberPlus);
   let result = numberPlusBtn;
   if(isPlus == true){
      result = numberPlusBtn + 1;
   }
    if(isPlus == false && numberPlusBtn > 0){
      result = numberPlusBtn - 1;
   }
    document.getElementById("numberPlus").value = result;
     const newResult = result * 1219;
     document.getElementById('amount').innerText = newResult;
      upDateTotal(); 
 }

//case plus Minus
document.getElementById('casePlus').addEventListener('click', function(){
   updateCase(true); 
})
document.getElementById('caseMinus').addEventListener('click', function(){
   updateCase(false) 
})
 function updateCase(isMinus){
   const caseNum = document.getElementById('caseNumber').value;
   const caseNumber = parseInt(caseNum);
      let caseAmount = caseNumber;
   if(isMinus == true){
      caseAmount = caseNumber + 1;
   }
   if(isMinus == false && caseNumber > 0){
      caseAmount = caseNumber - 1;
   }
   document.getElementById('caseNumber').value = caseAmount;
   const newAmount = caseAmount * 59;
   document.getElementById('toAmount').innerText = newAmount;
    upDateTotal();
    }

 function upDateTotal(){
   const phonePlus = document.getElementById('numberPlus').value;
   const phoneNumberBtn = parseInt(phonePlus);
   const caseNum = document.getElementById('caseNumber').value;
   const caseNumber = parseInt(caseNum);
   const total = phoneNumberBtn * 1219 + caseNumber * 59;
   document.getElementById('subtotal').innerText = total;
   const tax = Math.round(total * 15 / 100);
   document.getElementById('tax').innerText = tax;
   const grandTotal = Math.round(total + tax);
   document.getElementById('total').innerText = grandTotal;
 }
//plus mines ar total ar jonno
  // document.getElementById('subtotal').innerText;
      // const subtotal = newResult + 1278;
      // document.getElementById('subtotal').innerText = subtotal;
      // document.getElementById('tax').innerText;
      // const phoneTax = subtotal * 15 / 100;
      // document.getElementById('tax').innerText = phoneTax;

 //plus mines same hobe
    // const numberPlus = document.getElementById("numberPlus").value;
    // let numberPlusBtn = parseInt(numberPlus);
    // let result = numberPlusBtn - 1;
    //  document.getElementById("numberPlus").value = result;
    //  const newResult = result * 1219;
    //   document.getElementById('amount').innerText = newResult;