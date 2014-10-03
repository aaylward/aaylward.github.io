!(function(undefined) {
  "use strict";

  console.log('is this thing on?')

  var hasOwn = {}.hasOwnProperty;

  function bindEvent(context, className, event) {
    context[className] = event.target.value;
  }

  var AA;
  this.AA = AA = {};
  AA.link = function(domNode, object) {
    for (var prop in object) {
      if (hasOwn.call(object, prop)) {
        var classLinkedNode = domNode.querySelectorAll('.' + prop)[0];
        console.log(classLinkedNode);
        if (classLinkedNode != null) {
          classLinkedNode.addEventListener('change', bindEvent.bind(null, object, prop));
        }
      }
    }
  }
}).call((1,eval)("this"));
