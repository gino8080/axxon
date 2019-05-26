const url = 'axxon/live/media/ENELPOC/DeviceIpint.10/SourceEndpoint.video:0:0?w=1536&h=920'
const MAIN_URL = 'https://progetti.polis-net.it/'
//https://progetti.polis-net.it/codice/sensoripompei/api/web/v1/sensoriced/getdiscodati?minuti=30
//https://dashboard.heroku.com/apps/axxon/
var express = require('express')
var proxy = require('http-proxy-middleware')
var cors = require('cors')
var port = process.env.PORT || 3000

var app = express()
app.use(cors())
app.options('*', cors()) // da includere prima delle altre routes
app.get('/test', (req, res) => {
	res.json({ status: 'ok' })
})
app.use(
	'/axxon',
	proxy({
		target: 'http://5.249.128.21/',
		//changeOrigin: true,
		auth: 'root:root'
	})
)
app.use(
	'/',
	proxy({
		target: 'https://5.249.128.24/',
		logLevel: 'debug',
		secure: false
		/*	prependPath: false,
		followRedirects: true*/
		//changeOrigin: false
		//auth: 'root:root'
	})
)

app.listen(port, function() {
	console.log(`Axoon app listening on port !`, port)
})
