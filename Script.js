  
  const product = document.querySelector('.product');
  
  let result = updateSubtotal(product);
  
  console.log(result);
  
  function calculateAll() {
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
  
    const allProduct = document.querySelectorAll(`.product`);
  
    const subtotal = Array.from(allProduct).map(product => updateSubtotal(product));

  
   let total = Array.from(allProduct).reduce((sum ,product)=>{return sum + updateSubtotal(product);},0)
  
    let totalElement = document.querySelector('#total-value span');
  
      totalElement.textContent = total;
  }
  
  
  function removeProduct(event) {  
    document.querySelectorAll('.btn btn-remove').forEach(button => {
      button.addEventListener('click', function(event) {
        const target = event.currentTarget;
        console.log('The target in remove is:', target);
      });
    });
  } 

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });
  
  

  



