console.log('process.env.SERVER_PORT', process.env.SERVER_PORT)
console.log('process.env.DOMAIN', process.env.DOMAIN)

const app = require('express')()
const port = process.env.SERVER_PORT ||  8000
const domain = 'localhost'


app.get('*', (req, res) => {
  res.send(`ok ${port} ${domain}`)
})

app.listen(port, () => {
  console.log(`server started at http://${domain}:${port}`)
})