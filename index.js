// console.log("hello world");
// console.log(window);


// ******************** EXAMPLE 0: ********************
// let numArr = [1, 2, 3, 4, 5];
// for (let i = 0; i <numArr.length; i++) {
//   console.log('example0', numArr[i]);
// }


// ******************** EXAMPLE 1: ********************
// let mappedArr = numArr.map(function(num) {
//   console.log('example1', num);
// })


// ******************** EXAMPLE 2: ********************
// let numArr = [1, 2, 3, 4, 5];
// for (let num in numArr) {
//   console.log('example2', numArr[num]);
// }


// ******************** Implementing 1 of the EXAMPLES: ********************
// function elementChecker(arr) {
//   for (let num in arr) {
//     console.log('example2', arr[num])
//   }
// }
// elementChecker(numArr);

// ==============================================================================================================================================

const element = document.getElementById("counter");

let count = 0;

function increase() {
  count += 1;
  console.dir(element);
  element.innerText = count;
}

function decrease() {
  count -= 1;
  console.log(count);
  element.innerText = count;
}

function reset() {
  count = 0;
  console.log(count);
  element.innerHTML = "<mark>" + count + "</mark>";
}

function selectTheme(theme) {
 let body = document.getElementsByTagName("body");
 body[0].className = theme;
 
 let main = document.getElementsByTagName("main");
 main[0].className = theme;
 
 let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}
