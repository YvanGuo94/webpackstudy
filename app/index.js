require('./main.scss');
var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = '<h1>Heqweqweqweaaaaaaaaa</h1>';
app.appendChild(sub());
document.body.appendChild(app);
