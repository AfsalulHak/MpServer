const jsonServer = require('json-server')

const MpServer=jsonServer.create()

const middlileware=jsonServer.defaults()

const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

MpServer.use(middlileware)
MpServer.use(route)

MpServer.listen(PORT,()=>{
    console.log(`media player server running at ${PORT} and waiting for client Request`);
        
})


