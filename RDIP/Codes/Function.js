
  var English =
    '{"English":[' +
    '{"a":"John ate an apple before afternoon <br>","b":"before afternoon John ate an apple <br>","c":"John before afternoon ate an apple <br>" },' +
    '{"a":"some students like to study in the night<br>","b":"at night some students like to study" },' +
    '{"a":"John and Mary went to church <br>","b":"Mary and John went to church" },' +
    '{"a":"John went to church after eating <br>","b":"after eating John went to church <br>" ,"c":"John after eating went to church"},' +
    '{"a":"John ate an apple so did she <br>","b":"she ate an apple so did John" },' +
    '{"a":"John goes to the library and studies <br>","b":"John studies and goes to the library<br>" },' +
    '{"a":"the teacher returned the book after she noticed the error <br>","b":"the teacher noticed the error after she returned the book<br>","c":"after the teacher returned the book she noticed the error<br>","d":"after the teacher noticed the error she returned the book<br>","e":"she returned the book after the teacher noticed the error<br>","f":"she noticed the error after the teacher returned the book<br>","g":" after she returned the book the teacher noticed the error<br>","h":" after she noticed the error the teacher returned the book<br>"},' +
    '{"a":"the woman who called my sister sells cosmetics<br>","b":"the woman who sells cosmetics called my sister<br>" ,"c":"my sister who sells cosmetics called the woman<br>","d":"my sister who called the woman sells cosmetics"}]}';







  





       var hindi = 
       '{"hindi":[' +
    '{"a":" राम और श्याम बाजार गयें<br>","b":" राम और श्याम गयें बाजार<br>","c":"बाजार गयें राम और श्याम <br>"}]}'





/*
function check()
{



  obj = JSON.parse(English);
  document.getElementById("output").innerHTML =
    obj.english[0].a + " " + obj.english[0].b + obj.english[0].c;

  document.getElementById("output1").innerHTML =
    obj.english[1].a + " " + obj.english[1].b;
  document.getElementById("output2").innerHTML =
    obj.english[2].a + " " + obj.english[2].b;
  document.getElementById("output3").innerHTML =
    obj.english[3].a + " " + obj.english[3].b + " " + obj.english[3].c;
  document.getElementById("output4").innerHTML =
    obj.english[4].a + " " + obj.english[4].b;
  document.getElementById("output5").innerHTML =
    
    obj.english[5].a +
    " " +
    obj.english[5].b +
    " " +
    obj.english[5].c +
    " " +
    obj.english[5].d ;
    
  document.getElementById("output6").innerHTML =
    obj.english[6].a +
    " " +
    obj.english[6].b ;
  
  document.getElementById("output7").innerHTML =
    obj.employees[7].a +
    " " +
    obj.employees[7].b;
    
document.getElementById("output8").innerHTML =
    
    obj.english[8].a +
    " " +
    obj.english[8].b +
    " " +
    obj.english[8].c +
    " " +
    obj.english[8].d +
" "+

    obj.english[8].e +
    " " +
    obj.english[8].f +
    " " +
    obj.english[8].g +
    " " +
    obj.english[8].h ;
  
document.getElementById("output9").innerHTML =
    
    obj.english[9].a +
    " " +
    obj.english[9].b +
    " " +
    obj.english[9].c +
    " " +
    obj.english[9].d +
" "+

    obj.english[9].e +
    " " +
    obj.english[9].f ;
    
    
    
    
    




  



  obj = JSON.parse(Hindi);
  
  document.getElementById("output10").innerHTML =
    
    obj.hindi[0].a +
    " " +
    obj.hindi[0].b +
    " " +
    obj.hindi[0].c +
    " " +
    obj.hindi[0].d ;


  document.getElementById("output11").innerHTML =
    
    obj.hindi[1].a +
    " " +
    obj.hindi[1].b +
    " " +
    obj.hindi[1].c +
    " " +
    obj.hindi[1].d ;



  document.getElementById("output12").innerHTML =
    
    obj.hindi[2].a +
    " " +
    obj.hindi[2].b +
    " " +
    obj.hindi[2].c +
    " " +
    obj.hindi[2].d +
" "+

    obj.hindi[2].e +
    " " +
    obj.hindi[2].f +
    " " +
    obj.hindi[2].g +
    " " +
    obj.hindi[2].h +
" "+

    obj.hindi[2].i +
    " " +
    obj.hindi[2].j +
    " " +
    obj.hindi[2].k +
    " " +
    obj.hindi[2].l ;



  document.getElementById("output13").innerHTML =
    
    obj.hindi[3].a +
    " " +
    obj.hindi[3].b +
    " " +
    obj.hindi[3].c +
    " " +
    obj.hindi[3].d +
" "+

    obj.hindi[3].e +
    " " +
    obj.hindi[3].f ;




  
  document.getElementById("output14").innerHTML =
    
    obj.hindi[4].a +
    " " +
    obj.hindi[4].b +
    " " +
    obj.hindi[4].c +
    " " +
    obj.hindi[4].d +
" "+

    obj.hindi[4].e +
    " " +
    obj.hindi[4].f +
    " " +
    obj.hindi[4].g +
    " " +
    obj.hindi[4].h ;



  document.getElementById("output15").innerHTML =
    
    obj.hindi[5].a +
    " " +
    obj.hindi[5].b +
    " " +
    obj.hindi[5].c +
    " " +
    obj.hindi[5].d ;




  document.getElementById("output16").innerHTML =
    
    obj.hindi[6].a +
    " " +
    obj.hindi[6].b +
    " " +
    obj.hindi[6].c +
    " " +
    obj.hindi[6].d +
" "+

    obj.hindi[6].e +
    " " +
    obj.hindi[6].f +
    " " +
    obj.hindi[6].g +
    " " +
    obj.hindi[6].h ;
}*/

function my_select()
{

 var x = document.getElementById("lang").value;
	if(x=="English")
	{

 obj = JSON.parse(English);
  document.getElementById("result").innerHTML =
    obj.English[0].a ;
	}
	else if(x=="hindi")
	{
		obj = JSON.parse(hindi);
  
  document.getElementById("result").innerHTML =
    
    obj.hindi[0].a;
	}

}