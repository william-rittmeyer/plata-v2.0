require('dotenv').config()
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const Web3 = require('web3')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const router = require('./router')

config.dev = process.env.NODE_ENV !== 'production'


async function start() {

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(session({
    secret: '010b4cb83bf8b1e96b49bd28',
    resave: false,
    saveUninitialized: false
  })
  )

  app.use('/', router)

 
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
