import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('jquery');

require("./css/layout.css");
require("./css/main.css");
require("./css/griddle.css");

import App from './jsx/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));