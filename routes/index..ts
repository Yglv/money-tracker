import { Transaction } from '../Models/transaction'
import express, { Request, Response, NextFunction, Router } from 'express'
import { GetTransaction, AddTransaction } from '../Controllers/transactionController'
const router: Router = express.Router()

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  GetTransaction(req, res, next)
})

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  AddTransaction(req, res, next)
})

router.post('/delete', (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    return res.sendStatus(404)
  }
  const transactionBody = req.body
  Transaction.deleteTransaction(transactionBody.id)
  res.redirect('/')
})

export { router }
