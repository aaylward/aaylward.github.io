!(function(undefined) {
  "use strict";

  var hasOwn = {}.hasOwnProperty;

  function updateObjectFromDOM(object, className, event) {
    object[className] = event.target.value;
  }

  function updateDomFromObject(domNode, changes) {
    console.log(changes);
  }

  var AA;
  this.AA = AA = {};
  AA.link = function(domNode, object) {
    for (var prop in object) {
      if (hasOwn.call(object, prop)) {
        //find matching node
        var classLinkedNode = domNode.querySelectorAll('.' + prop)[0];

        if (classLinkedNode != null) {
          //bind dom change events
          classLinkedNode.addEventListener('change', updateObjectFromDOM.bind(null, object, prop));

          //bind object change events
          Object.observe(object, updateDomFromObject.bind(null, classLinkedNode));
        }
      }
    }
  }
}).call((1,eval)("this"));
