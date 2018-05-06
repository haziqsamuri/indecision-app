'use strict';

console.log('build-it-visible.js is running!');

var build = {
    title: 'Visibility Toggle',
    details: 'Some Details'
};

var visibility = false;

var appRoot = document.getElementById('app');
var changeVisibility = function changeVisibility() {
    if (visibility == true) {
        visibility = false;
    } else {
        visibility = true;
    }
    render();
};

var render = function render() {
    var templateOne = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            build.title
        ),
        React.createElement(
            'button',
            { onClick: changeVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                ' Some Details '
            )
        )
    );
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            build.title
        ),
        React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                { onClick: ReactDOM.render(templateOne, appRoot) },
                'Hide Details'
            )
        ),
        React.createElement(
            'p',
            null,
            ' ',
            build.details,
            ' '
        )
    );
    ReactDOM.render(templateOne, appRoot);
    console.log('rendering');
};

render();
