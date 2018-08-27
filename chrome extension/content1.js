var tags;
tags = document.getElementsByTagName("*");
add();
/*
tags = document.getElementsByTagName("div");
add();
tags = document.getElementsByTagName("h1");
add();
tags = document.getElementsByTagName("head");
add();
tags = document.getElementsByTagName("a");
add();
tags = document.getElementsByTagName("h2");
add();
tags = document.getElementsByTagName("title");
add();
tags = document.getElementsByTagName("span");
add();
*/
//console.log("content");
function add() {
  //document.body.innerText = result;
  //console.log(result);

  for (var i = 0; i < tags.length; i++) {
    var element = tags[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var oldText = element.childNodes[j];
      if (oldText.nodeType == 3) {
        var words = oldText.nodeValue.split(" ");
        // console.log(words);
        for (var a = 0; a < words.length; a++) {
          words[a] = capitalize(words[a]);

          var newText = words.join(" ");
          // console.log("in function", newText);
          //console.log("child", oldText.textContent);
        }
        element.replaceChild(document.createTextNode(newText), oldText);
      }
    }
  }
}

//document.body.innerText = result;
//console.log(result);

function capitalize() {
  var word = arguments[0];
  var wor = "";
  for (var i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      wor += word[i].toUpperCase();
    } else {
      wor += word[i];
    }
  }
  //console.log(wor);

  return wor;
}
