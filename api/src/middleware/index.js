import { verify } from "jsonwebtoken"



export function AuthMiddlewares(req, res, next) {
    const {authorization} = req.headers

    if(!authorization) {
        return res.status(401).json({error: "Token não provido"})
    }

    const [, token] = authorization.split(" ")

    try {
        const decoded = verify(token, process.env.SECRET_KEY)
        const {id} = decoded

        req.userId = id

        next()
    } catch (error) {
        return res.status(401).json({error: "Token Invalido"})
    }
}