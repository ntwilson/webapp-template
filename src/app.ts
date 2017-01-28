import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import * as serveStatic from 'serve-static'

const app = express()

app.use(
  (req:Request, res:Response, next:NextFunction) => {
    console.log(`received request: ${req.method}: ${req.path}`)
    next()
  })

app.use(
  express.static('../static'),
  express.static('./'), 
  (req:Request, res:Response) => {
    console.log(`404 - couldn't find request target`) 
    res.status(404).send(`Sorry can't find that!`)
  })

app.listen(8080, () => console.log('listening on port 8080...'))