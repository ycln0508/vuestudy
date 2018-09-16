var http = require('http');

var data = {key: 'hello', hello: 'world'};
var datelist=[{
	id:1,
	itemName:"物流管理"
},{
	id:2,
	itemName:"客户管理"
},{
	id:3,
	itemName:"任务中心"
}]


var srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(datelist));
});


srv.listen(8090, function() {
  console.log('listening on localhost:8090');
});