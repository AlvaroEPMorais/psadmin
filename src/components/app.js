'use strict';

var React = require('react');
var Header = require('./components/common/header');
var RoutetHandler = require('reat-router');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
var RoutetHandler = require('reat-router');
                <Child />
            </div>
        );
    }
});

module.exports = App;