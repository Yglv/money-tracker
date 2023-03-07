import { Transaction } from '../Models/transaction'
import express, { Request, Response, NextFunction } from 'express'

export const GetTransaction = (req: Request, res: Response, next: NextFunction): void => {
  res.render('index', { transactions: Transaction.getAll(), num: Transaction.getSum() })
}

export const AddTransaction = (req:Request, res:Response, next:NextFunction): void | express.Response => {
  if (!req.body) {
    return res.sendStatus(404)
  }
  console.log(req.body)
  const { sum, category } = req.body
  const transaction = new Transaction({ sum, category })
  transaction.save()
  res.status(200).json({ message: 'Ok' })
}