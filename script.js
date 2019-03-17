
$(document).ready(()=>{


$("#dugme").click(()=>{
    var s1= $("#1").val();
    var s2= $("#2").val();
 
    var dateUnetStart= new Date();
    var validacija=false;
    var n=s1.split(":");
   
    dateUnetStart.setHours(n[0]);
    dateUnetStart.setMinutes(n[1]);

    var dateUnetFinish= new Date();
   
    var n=s2.split(":");
   
    dateUnetFinish.setHours(n[0]);
    dateUnetFinish.setMinutes(n[1]);


    var date = new Date();


    var nizDatuma = [
        {
         start:   new Date(2019,2,18,14,5),
          finish:  new Date(2019,2,18,15,35)   
        },
        {
            start:   new Date(2019,2,18,16,5),
             finish:  new Date(2019,2,18,17,35)   
           },
       {    start:   new Date(2019,2,18,18,5),
          finish:  new Date(2019,2,18,19,35)
       } ,
       {    start:   new Date(2019,2,18,20,0),
        finish:  new Date(2019,2,18,19,35)
     } 
        
    ];
   
        validacija=false;
        var provera=true;
        var brojac=null;
        for(var i=1;i<nizDatuma.length;i++){

            if((nizDatuma[i-1].start.getTime()<dateUnetStart.getTime() && nizDatuma[i-1].finish.getTime()>dateUnetStart.getTime()) || (nizDatuma[i-1].start.getTime()<dateUnetFinish.getTime() && nizDatuma[i-1].finish.getTime()>dateUnetFinish.getTime()) ){
                alert("nalazi se unutar");
                validacija=false;
                provera=false;
                break;
            }
            else if(dateUnetStart.getTime()< nizDatuma[i].start.getTime() && dateUnetFinish.getTime()<nizDatuma[i].start.getTime()){
                alert("ne nalazi se unutra");
                 validacija=true;
                 break;
             }
             
        }

        if(validacija==true){
            alert("moze");
        }
        else{

            if(dateUnetStart.getTime()>nizDatuma[nizDatuma.length-1].finish.getTime()  ){
                alert("moze");

            }
            else{
                alert("jok");
            }
        }
       
    
    
    
    
    });
});
