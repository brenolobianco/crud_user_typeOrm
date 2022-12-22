import { Request, Response } from 'express'
import { ISessionRequest } from '../interfaces/session.interface'
import createSessionService from '../services/sessions/createSession.service'

const createSessionController = async(req: Request, res: Response) => {
    const sessionData: ISessionRequest = req.body
    const [status, token] = await createSessionService(sessionData)
    return res.status(200).json({token})
}

export { createSessionController }
