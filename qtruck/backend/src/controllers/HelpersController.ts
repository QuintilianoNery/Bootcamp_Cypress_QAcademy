import { Request, Response } from 'express'

import User from '../models/User'

export default {
    async resetUser(req: Request, res: Response) {

        //recebe um valor de instagram, quando a rota helpers-reset for chamada
        const { instagram } = req.query
        //para apagar um usuário atravez do valor instagram que foi filtrado na query string com o instagram X
        await User.deleteMany({ instagram: instagram })
        //Passando o status 204 tudo certo sem resposta no corpo com end
        return res.status(204).end()
    }
}