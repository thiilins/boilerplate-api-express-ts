import { Request, Response } from 'express'

export const Index = async (req: Request, res: Response) => {
  res.status(200).send('Hello World')
}
