import express from 'express'

const api = express()

api.get('/test', (req: Request, res: Response) => {
    res.json({sucess: true})
}
api.listen(5000, () => console.log('Express listening')) 