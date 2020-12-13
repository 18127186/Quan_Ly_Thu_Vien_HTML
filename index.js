var express = require('express')
var app = express()

var models = require('./models')


app.get('/sync',function(req,res){
    models.sequelize.sync().then(function(){
        res.send('database sync complete!');
    })
  })

app.set('port',process.env.PORT |5000)
app.listen(app.get('port'),function(){
    console.log('server is listening on port' + app.get('port'))
})