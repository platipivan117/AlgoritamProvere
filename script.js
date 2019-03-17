
$(document).ready(()=>{

$("#dugme").click(()=>{
    var s1= $("#1").val();
    var s2= $("#2").val();
 
    var dateUnetStart= new Date();
   
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
         start:   new Date(2019,2,17,14,5),
          finish:  new Date(2019,2,17,15,35)   
        },
        {
            start:   new Date(2019,2,17,16,5),
             finish:  new Date(2019,2,17,17,35)   
           }
    ];
  
    var index;
    var razlikaUnetog=razlikaDatuma(dateUnetStart,dateUnetFinish);
    var moguceUpisivanje=false;
  
for(var i =1; i<nizDatuma.length;i++){

    if(razlikaDatuma(nizDatuma[i-1].finish,nizDatuma[i].start)>razlikaUnetog){
        alert("negde ima mesta");
        index=i-1;
    }

}
for(var i = 0;i<nizDatuma.length;i++){
    if(dateUnetStart.getTime()-nizDatuma[i].finish.getTime()>0){
        alert("uslo u prvi if");
        if(i==index){
            moguceUpisivanje=true;
            break;
        }
        moguceUpisivanje=false;
    }
 
}


if(moguceUpisivanje==false){
    if(dateUnetFinish.getTime()<nizDatuma[0].start){
        moguceUpisivanje=true;

    }
    alert("uslo u peslednji evili if");
    if(dateUnetStart.getTime()>nizDatuma[nizDatuma.length-1].finish.getTime()){
        moguceUpisivanje=true;

    } 
}
if(moguceUpisivanje==true){
    alert("ima mesta da se zakaze");
}











function razlikaDatuma(date1,date2) {
    
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return timeDiff;
}





    
    
    
    
    
    });
});
