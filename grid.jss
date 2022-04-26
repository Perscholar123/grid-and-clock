// var colors = ["yellow", "blue", "red", "white"];
//   var currentColor = 0;
// const bright = document.querySelector(".gridContainer");
// bright.addEventListener("click", () =>{
//   let gridBoxes =  document.getElementsByClassName("box");
//     console.log(gridBoxes) 
//       for (let i = 0; i < gridBoxes.length; i++){
//         let gridBox = gridBoxes[i]
//         gridBox.style.backgroundColor = colors[currentColor]
//     }
//    if (currentColor < colors.length){
//        currentColor++       
//       }
//    else {
//        currentColor = 0
//       }
//  })




var colors = ["yellow", "blue", "red", "white"];
  var currentColor = 0;
  window.addEventListener('click', function(event){
      let box1 = document.querySelectorAll('.box');
      console.log(box1);

      box1.forEach(item=>
        item.style.backgroundColor = colors[currentColor]);
        if (currentColor===3)
        currentColor=0;
        currentColor++;
          });














/*

          const color=['blue','palevioletred','yellow','green','grey','red'];

          // fo color change funcction
          //random number between 9 and color.length
          function getRandomInt(min, max) {
              return Math.floor(Math.random() * (max - min +1)) + min; 
          }
          
          
          const colorChange = () => {
            //for(let i= 0;  i<children.length; i ++){
              var randomInt = getRandomInt(0,color.length);
              for(const div of allDivs){
              div.style.backgroundColor = color[randomInt]; //color[randomNumber];
              console.log(color[randomInt]);
            } 
          }
          const allDivs = document.querySelectorAll('.parent\ >\ div');
          console.log(allDivs);
          const parent = document.querySelector(".parent");
          console.log(parent);
          const children = document.querySelector(".parent").children;
          console.log(children);  // console.log(children.length);
          
          parent.addEventListener('click',colorChange);
          
*/










// const hoverColor=document.querySelector(".hoverChange");
// hoverColor.addEventListener("click", () =>{
//     var colors = ["yellow", "blue", "red", "white"];
//     var currentColor = 0;
//     for(currentColor=0;currentColor<=colors.length;currentColor++)
//     {
    
//      // const change=document.querySelector(".gridContainer()").innerHTML;
//     //  change.innerHTML()=changeColor;
//     }
//   //change.append(hoverChange);

// });
//console.log('red');

// const colorChange= () => {
//    var colors = ["yellow", "blue", "red", "white"];
//    for(let i=0; i<colors.length;i++)
//   // console.log("I'm in");
//    {
//       const  c1= document.getElementById(".win").style.backgroundColor(colors);
//    }
//    console.log("I'm in");
//   };


  // Modify the previous exercise so that the colour of the grid cells changes every time you click on the window. Use JavaScript and a list of pre-defined colors:
   // const random = Math.floor(Math.random() * colors.length);
  //  currentColor = colors[random];


//alert("red")


