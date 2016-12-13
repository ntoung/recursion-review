// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var returnElementArray = [];
  var recurse = function (element, className) {

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
      recurse(element.childNodes[i], className);
      
    }

  };

  recurse(document.body, className);
  return returnElementArray;

};
