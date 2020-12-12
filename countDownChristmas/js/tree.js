window.addEventListener("load", function(){

var ChristmasTree = document.getElementById("christmasTree");
var hash="#";
var output="";
var limit=30; //Must be even number to get a star!
var middle=limit/2;
for(i=0; i<middle; i++){
  for(j=0; j<limit; j++){
    if(j==middle){
      if(i==0){
        output +="*";
      }else{
        output +="#";
      }
    }else{

      if(j>=(middle-i) && j<=(middle+i) ){
        output +="#";
      }else{
        output +="&nbsp;&nbsp;";
      }
    }

  }
  //console.log(output);
  ChristmasTree.innerHTML +=output + "<br>";
  output=""; //reset
}

//Trunk and presents:
for(i=0;i<limit; i++){
  if(i==(middle)){
    output +="|&nbsp;&nbsp;&nbsp;|";
  }else{
    if(i==limit/3-5){
    	
    }else{
    	output +="&nbsp;&nbsp;";
    }
  }
 

}

ChristmasTree.innerHTML +=output + "<br>";


    // ....
});