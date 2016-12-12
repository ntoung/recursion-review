// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var returnElementArray = [];
  var recurse = function (element, className) {
    console.log('classList');
    console.log(element.classList);

    if (element.classList === undefined) {
      return;
    }

    var classNameFound = false;
    for (var i = 0; i < element.classList.length; i++) {
      if (element.classList[i] === className) {
        classNameFound = true;
      }  
    }
    
    if (classNameFound) {
      returnElementArray.push(element);
    }

    for (var i = 0; i < element.childNodes.length; i ++) {
      console.log(i);
      console.log(element.childNodes[i].className);
      // if (element.childNodes[i].className === className) {
      //   returnElementArray.push(element.childNodes[i]);
      // }


      recurse(element.childNodes[i], className);
      
    }

    console.log('returnElement: ' + returnElementArray);

  };

  recurse(document.body, className);
  console.log(returnElementArray);
  return returnElementArray;

};
