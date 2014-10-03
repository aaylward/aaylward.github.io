!(function(undefined) {
  "use strict";

  var AA;
  var hasOwn = {}.hasOwnProperty;
  var forEach = [].forEach;

  function updateObjectFromDOM(object, className, event) {
    var newValue = event.target.value;
    if (newValue !== object[className]) {
      object[className] = event.target.value;
    }
  }

  function updateDomFromObject(domNode, prop, changes) {
    var newValue = changes[0].object[prop];
    var contentProperty;

    if (typeof domNode.value === 'undefined') {
      contentProperty = 'textContent';
    } else {
      contentProperty = 'value';
    }

    if (newValue !== domNode[contentProperty]) {
      domNode[contentProperty] = newValue;
    }
  }

  this.AA = AA = {};
  AA.link = function(domNode, object) {
    for (var prop in object) {
      if (hasOwn.call(object, prop)) {
        var targetNodes = domNode.querySelectorAll('.' + prop);

        forEach.call(targetNodes, function(targetNode) {
          
          targetNode.addEventListener('change', updateObjectFromDOM.bind(null, object, prop));
          targetNode.addEventListener('keyup', updateObjectFromDOM.bind(null, object, prop));

          Object.observe(object, updateDomFromObject.bind(null, targetNode, prop));
        });
      }
    }
  }
}).call((1,eval)("this"));

