//Brendan Smith
//AP Comp Sci Principles
//  Global variables


//  Global variables
// set up code here
var txt;

function preload(){
  //function's name is LoadStrings
  txt = loadStrings("words.txt");
}
function setup() {
noCanvas();
console.log("before bubble sorting ");
console.log(txt);
myBubbleSort(txt);
console.log("after bubble sorting");
console.log(txt);
}

// function that sorts
function myBubbleSort(){
  for(var i = txt.length - 1; i >= 1; i-- ){
    for(var j = 0; j < txt.length; j++ ){
      // defining i and j
      right_element = txt[i];
      left_element = txt[j];
      // if statement states when they should switch
if(right_element< left_element){
  // calls swap function
  swap(i, j);
}

}


}
}

// word swapping function
function swap(i, j){
   var temp = txt[i];
   txt[i] = txt[j];
   txt[j] = temp
}
