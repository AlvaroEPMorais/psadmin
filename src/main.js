$ = jQuery = require('jquery');
var React = require('react');
 
(function(win){
    "use strict";

function render(){
    var route = win.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

win.addEventListener('hashchange', render);
render();

})(window);

//React.render(<Home />, document.getElementById('app'));
