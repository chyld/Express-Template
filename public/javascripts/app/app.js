$(document).ready(initialize);

var socket;

function initialize(){
  $(document).foundation();
  socket = io.connect('http://localhost:3000/app');
  socket.on('connected', socketConnected);
}

function socketConnected(data){
  console.log(data);
}
