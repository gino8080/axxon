const url = 'axxon/live/media/ENELPOC/DeviceIpint.10/SourceEndpoint.video:0:0?w=1536&h=920'
var express = require('express')
var proxy = require('http-proxy-middleware')

var port = process.env.PORT || 3000

var app = express()
app.get('/test', (req, res) => {
	res.json({ status: 'ok' })
})
app.use(
	'/',
	proxy({
		target: 'http://5.249.128.21/',
		//changeOrigin: true,
		auth: 'root:root'
	})
)

app.listen(port, function() {
	console.log(`Axoon app listening on port !`, port)
})
