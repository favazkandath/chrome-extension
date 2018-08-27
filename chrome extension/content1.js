//console.log("content");
var result = "";
var content = document.body.innerText;
//function fun1() {
console.log("length = ", content.length);
for (var element of content) {
  if (
    element == "a" ||
    element == "e" ||
    element == "i" ||
    element == "o" ||
    element == "u"
  ) {
    result = result + element.toUpperCase();
  } else {
    result = result + element;
  }
}

document.body.innerText = result;
//console.log(result);
