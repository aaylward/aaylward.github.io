!(function(undefined) {
  "use strict";

  if (!AA.linkWorks) {
    document.querySelector('body').innerHTML = 'This page doesn\'t work in your browser yet. Please <a href="https://github.com/aaylward/aaylward.github.io/issues/new">file an issue</a> if you care.';
  }

  var model = {
    linktest: ''
  };

  AA.link(document.querySelector('body'), model);

}).call(this);

