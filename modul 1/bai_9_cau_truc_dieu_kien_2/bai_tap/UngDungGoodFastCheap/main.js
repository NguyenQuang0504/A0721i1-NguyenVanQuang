let vlueGood = document.getElementById('Good');
let vlueFast = document.getElementById('Fast');
let vlueCheap = document.getElementById('Cheap');
function range(value) {
 switch (value) {
     case 'good' :
         if( vlueFast.value == 1){
             vlueCheap.value = 0;
         }
         break;
     case 'fast' :
         if( vlueCheap.value == 1){
             vlueGood.value = 0;
         }
         break;
     case 'cheap' :
         if( vlueGood.value == 1){
             vlueFast.value = 0;
         }
         break;
 }
}