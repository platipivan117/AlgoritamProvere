var s1;
var s2;
var date;
var kliknutaUcionica=0;
  
  // POPUNJAVA ZA DANASNJI TJ TRENUTNI DATUM ONLOAD
$( document ).ready((e)=>{
   // e.preventDefault();
        date= new Date();
        //date.setDate(today.getDate());
        
       
        var dan= date.getDate();
        var mesec=date.getMonth()+1;
        
        var date1= new Date();
        

        

        var requString= '/zak/'+dan+'-'+mesec;
        //get req da uzmemo potrebde podatke za datume
        $.get('/zak/data',(data,status)=>{
         
          var u1fil=[];
          var u2fil=[];
          var u3fil=[];
          var u4fil=[];
          // pravimo niz objekata date
          data.u1.forEach((element)=>{
              
            
              u1fil.push(new Date(element.start));
              
          });
          data.u2.forEach((element)=>{
              
              u2fil.push(new Date(element.start));
          });
          data.u3.forEach((element)=>{
              
              u3fil.push(new Date(element.start));
          });
          data.u4.forEach((element)=>{
              
              u4fil.push(new Date(element.start));
          });
                    

          
          data.u1.forEach(element => {
              let d= new Date(element.start);

              if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#1').append(string);
          }
                 
          });

          
          data.u2.forEach(element => {
            
            let d= new Date(element.start);
            if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#2').append(string);
          }
        });
        data.u3.forEach(element => {
          
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#3').append(string);
          }
        });

        data.u4.forEach(element => {
          
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#4').append(string);
          }
        });


        $('#right').attr('disabled',false);

          

        //alert(JSON.stringify(data));
        
        });   
$('#right').click((e)=>{
    $('#right').attr('disabled',true);
    $('#left').attr('disabled',true);
    $('#left').css('display','inline-block');
     e.preventDefault();
 
     $( ".card-text" ).remove();
        var newdate= new Date();
        
        newdate.setDate(date.getDate()+1);
        date=newdate;

      
        
        var dan= newdate.getDate();
        var mesec=newdate.getMonth()+1;
        var requString= '/zak/'+dan+'-'+mesec;
      
      $.get('/zak/data',(data,status)=>{
       
        
        var u1fil=[];
          var u2fil=[];
          var u3fil=[];
          var u4fil=[];
          // pravimo niz objekata date
          data.u1.forEach((element)=>{
              
            
              u1fil.push(new Date(element.start));
              
          });
          data.u2.forEach((element)=>{
              
              u2fil.push(new Date(element.start));
          });
          data.u3.forEach((element)=>{
              
              u3fil.push(new Date(element.start));
          });
          data.u4.forEach((element)=>{
              
              u4fil.push(new Date(element.start));
          });
                    

          
          data.u1.forEach(element => {
              let d= new Date(element.start);
              
              if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#1').append(string);
          }
                 
          });

          
          data.u2.forEach(element => {
            
            let d= new Date(element.start);
            if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#2').append(string);
          }
        });
        data.u3.forEach(element => {
        
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#3').append(string);
          }
        });

        data.u4.forEach(element => {
         
          let d= new Date(element.start);
          if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
            var string="<p class=\"card-text\">" +element.prof +"</p>"
            $('#4').append(string);
          }
        });


        $('#right').attr('disabled',false);
        $('#left').attr('disabled',false);
          



      });






    });

$('#left').click((e)=>{
    e.preventDefault();
    $('#left').attr('disabled',true);
    $('#right').attr('disabled',true);
    var today= new Date();
    today.setDate(today.getDate()+1);
    
    if(today.getDate()==date.getDate()&&today.getMonth()==date.getMonth() ){
        $('#left').css('display','none');
    }
 
    $( ".card-text" ).remove();
       var newdate= new Date();
       
       newdate.setDate(date.getDate()-1);
       date=newdate;

     
       
       var dan= newdate.getDate();
       var mesec=newdate.getMonth()+1;
       var requString= '/zak/'+dan+'-'+mesec;
     
     $.get('/zak/data',(data,status)=>{
      
       
       var u1fil=[];
         var u2fil=[];
         var u3fil=[];
         var u4fil=[];
         // pravimo niz objekata date
         data.u1.forEach((element)=>{
             
           
             u1fil.push(new Date(element.start));
             
         });
         data.u2.forEach((element)=>{
             
             u2fil.push(new Date(element.start));
         });
         data.u3.forEach((element)=>{
             
             u3fil.push(new Date(element.start));
         });
         data.u4.forEach((element)=>{
             
             u4fil.push(new Date(element.start));
         });
                   

         
         data.u1.forEach(element => {
             let d= new Date(element.start);
             
             if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#1').append(string);
         }
                
         });

         
         data.u2.forEach(element => {
           
           let d= new Date(element.start);
           if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#2').append(string);
         }
       });
       data.u3.forEach(element => {
       
         let d= new Date(element.start);
         if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#3').append(string);
         }
       });

       data.u4.forEach(element => {
        
         let d= new Date(element.start);
         if(d.getDate()==date.getDate()&&d.getMonth()==date.getMonth() ){
           var string="<p class=\"card-text\">" +element.prof +"</p>"
           $('#4').append(string);
         }
       });


       $('#right').attr('disabled',false);
       $('#left').attr('disabled',false);

         



     });



  
});
function Provera(nizDatuma) {
  
alert(date);

 
  alert(s1);

  var dateUnetStart= date;
 
  var n=s1.split(":");
  alert(n);
  dateUnetStart.setHours(n[0]);
  dateUnetStart.setMinutes(n[1]);

  var dateUnetFinish= date;
 
  var n=s2.split(":");
 
  dateUnetFinish.setHours(n[0]);
  dateUnetFinish.setMinutes(n[1]);

alert(dateUnetStart);
alert(dateUnetFinish);
 

  var index;
  var razlikaUnetog=razlikaDatuma(dateUnetStart,dateUnetFinish);
  var moguceUpisivanje=false;
  var  ifBreak=false;

for(var i =1; i<nizDatuma.length;i++){

  if(razlikaDatuma(nizDatuma[i-1].finish,nizDatuma[i].start)>razlikaUnetog){
      alert("negde ima mesta");
      index=i-1;
      for(var j = 0;j<nizDatuma.length;j++){
          if(dateUnetStart.getTime()-nizDatuma[j].finish.getTime()>0){
              alert("uslo u prvi if");
              if(j==index){
                  moguceUpisivanje=true;
                  validacija=true;
                  ifBreak=true;
                  break;
              }
          
  }
          if(ifBreak){
              break;

          }
 
          moguceUpisivanje=false;
      }
   
  }

}
  ifBreak=false;



if(moguceUpisivanje==false){
  if(dateUnetFinish.getTime()<nizDatuma[0].start){
      moguceUpisivanje=true;
      validacija=true;


  }
  alert("uslo u peslednji evili if");
  if(dateUnetStart.getTime()>nizDatuma[nizDatuma.length-1].finish.getTime()){
      moguceUpisivanje=true;
      validacija=true;

  } 
}
if(moguceUpisivanje==true){
  alert("ima mesta da se zakaze");
}













}
function razlikaDatuma(date1,date2) {
  
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return timeDiff;
}


$('#postdugme').click((e)=>{
 


  var u1fil=[];
  var u2fil=[];
  var u3fil=[];
  var u4fil=[];
  var u1=[];
  var u2=[];
  var u3=[];
  var u4=[];
  var klinutaUcionica=1;

  var validacija=false;
  var getFunc= (callback)=>{
    $.get('/zak/data',(data,status)=>{
      u1=data.u1;
      u2=data.u2;
      u3=data.u3;
      u4=data.u4;
 
      
      callback();
      if(kliknutaUcionica==1){
        Provera(nizDatuma1);
      
      
      }

});


  };
  
  function callback (){
    
    
    var nizDatuma1=[];
    u1.forEach((element)=>{
      var obj={
        start: new Date(element.start),
        finish: new Date(element.finish)
      }
      nizDatuma1.push(obj);
    });

   nizDatuma1.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);
 





   
   var nizDatuma2=[];
   u2.forEach((element)=>{
     var obj={
       start: new Date(element.start),
       finish: new Date(element.finish)
     }
     nizDatuma2.push(obj);
   });

  nizDatuma2.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);





  var nizDatuma3=[];
  u3.forEach((element)=>{
    var obj={
      start: new Date(element.start),
      finish: new Date(element.finish)
    }
    nizDatuma3.push(obj);
  });

 nizDatuma3.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);






 
 var nizDatuma4=[];
 u4.forEach((element)=>{
   var obj={
     start: new Date(element.start),
     finish: new Date(element.finish)
   }
   nizDatuma4.push(obj);
 });

nizDatuma4.sort((a,b)=>(a.start.getTime()>b.start.getTime())? 1:-1);









  }
 

  getFunc(callback);
 











 
  });

  $('#btn1').click(()=>{
    kliknutaUcionica=1;
  });



});
$('#kurac').click(()=>{
  alert($("#1").val());
});