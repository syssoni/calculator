   let result = document.getElementById('result');

   function display(value){
        result.value += value;
   }

   function clr(){
        result.value = '';
   }

   function calculate(){
    try {
        result.value = eval(result.value);
    }
    catch(e) {
        result.value = 'Error';
    }
   }

