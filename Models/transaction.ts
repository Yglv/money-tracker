const transactions = new Map()

interface ITransaction{
  sum: number,
  category: string
}

export class Transaction {
  sum: number
  category: string
  date: string
  time: string
  id: string
  constructor (options: ITransaction) {
    this.sum = options.sum
    this.category = options.category
    this.date = new Date().toLocaleDateString()
    this.time = new Date().toLocaleTimeString()
    this.id = this.date + this.time
  }

  save(): void {
    transactions.set(this.id, this)
  }

  static getSum(): number {
    let sum = 0
    // eslint-disable-next-line no-return-assign
    transactions.forEach(item => sum += Number(item.sum))
    return sum
  }

  static getAll(): Object {
    console.log(Object.fromEntries(transactions))
    return Object.fromEntries(transactions)
  }

  static deleteTransaction(id: string): void {
    transactions.delete(id)
  }
}
