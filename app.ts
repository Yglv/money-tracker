import express, { Express, Request, Response, NextFunction } from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import path from 'path'
import createError from 'http-errors'
import http from 'http'
import { router as indexRouter }  from './routes/index.'

const port: number = 3000
const app: Express = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404))
})

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(500)
  res.render('error')
})

app.listen(port, () => {
  console.log(`Work on ${port}`)
})

module.exports = app
