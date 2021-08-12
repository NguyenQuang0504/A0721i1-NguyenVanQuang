let i;
let Number;
let n=2;
let dem=1;
let count = 0;
Number=parseInt(prompt('Ban hay nhap so cac so nguye to muon in ra'));
while(dem<=Number){
        for(i=2; i<=Math.sqrt(n);i++){
            if(n%i==0){
                count=count+1;
            }
        }
        if(count===0){
            document.write(n+"<br>");
            dem = dem+1;
        }
        else{
            count=0;
        }
        n++;
    }
