//NAME VALIDATION================================================================================================
(function() {
  
    const input              = document.getElementById('username');
    const nameInput          = document.getElementById('nameInput');
    const elem               = document.createElement('div');
          elem.id            = 'notify';
          elem.style.display = 'none';
  
          nameInput.appendChild(elem);
  
    input.addEventListener('invalid', function(event){
      event.preventDefault();
      if ( ! event.target.validity.valid ) {
        input.className    = 'invalid animated shake';
        elem.textContent   = 'Name should only contain letters e.g. John';
        elem.className     = 'error';
        elem.style.display = 'block';
      } 
    });
  
    input.addEventListener('input', function(event){
      if ( 'block' === elem.style.display ) {
        input.className = '';
        elem.style.display = 'none';
      }
    });
  
  })();

  //PHONE VALIDATION================================================================================================
  (function() {
  
    const inputPhone          = document.getElementById('userPhone');
    const phoneInput          = document.getElementById('phoneInput');
    const elemP               = document.createElement('div');
          elemP.id            = 'notify';
          elemP.style.display = 'none';
  
          phoneInput.appendChild(elemP);
  
    inputPhone.addEventListener('invalid', function(event){
      event.preventDefault();
      if ( ! event.target.validity.valid ) {
        inputPhone.className    = 'invalid animated shake';
        elemP.textContent   = 'Please, enter valid phone number';
        elemP.className     = 'error';
        elemP.style.display = 'block';
      } 
    });
  
    inputPhone.addEventListener('input', function(event){
      if ( 'block' === elemP.style.display ) {
        inputPhone.className = '';
        elemP.style.display = 'none';
      }
    });
  
  })();

  //ADRESS VALIDATION================================================================================================
  (function() {
  
    const inputAdress          = document.getElementById('userAdress');
    const adressInput          = document.getElementById('adressInput');
    const elemA               = document.createElement('div');
          elemA.id            = 'notify';
          elemA.style.display = 'none';
  
          adressInput.appendChild(elemA);
  
    inputAdress.addEventListener('invalid', function(event){
      event.preventDefault();
      if ( ! event.target.validity.valid ) {
        inputAdress.className    = 'invalid animated shake';
        elemA.textContent   = 'Please, enter shipping adress';
        elemA.className     = 'error';
        elemA.style.display = 'block';
      } 
    });
  
    inputAdress.addEventListener('input', function(event){
      if ( 'block' === elemA.style.display ) {
        inputAdress.className = '';
        elemA.style.display = 'none';
      }
    });
  
  })();