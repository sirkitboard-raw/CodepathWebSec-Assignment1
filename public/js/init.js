define([
    "react",
    "react-dom",
    "jsx!components/root"
], function(React, ReactDOM, AppComponent) {
    var app = React.createElement(AppComponent, {});
    ReactDOM.render(app, document.getElementById('content'));
})