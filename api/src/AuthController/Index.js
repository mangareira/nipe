import { compare } from "bcrypt"
import { prisma } from "../services/prisma"
import { sign } from "jsonwebtoken"



export class AuthController{
    async authenticate(req, res) {
        const {email, password} = req.body
        

        const user = await prisma.user.findUnique({where: {email}})

        if(!user){
            return res.json({error: "Email Incorreto" })
        }

        const isValuePassword = await compare(password, user.password)

        if(!isValuePassword) {
            return res.json({error: "Senha Incorreto" })
        }
        const {id} = user
        const token = sign({id: user.id}, "secret", {expiresIn: "1h"})

        return res.json({user: {id, email}, token})
    }
}
export class AuthControllerProf{
    async authenticate(req, res) {
        const {email, password} = req.body
        

        const user = await prisma.prof.findUnique({where: {email}})

        if(!user){
            return res.json({error: "Email Incorreto" })
        }

        const isValuePassword = await compare(password, user.password)

        if(!isValuePassword) {
            return res.json({error: "Senha Incorreto" })
        }
        const {id} = user
        const token = sign({id: user.id}, "secret", {expiresIn: "1h"})

        return res.json({user: {id, email}, token})
    }
}
export class AuthControllerDis{
    async authenticate(req, res) {
        const {email, password} = req.body
        

        const user = await prisma.dicente.findUnique({where: {email}})

        if(!user){
            return res.json({error: "Email Incorreto" })
        }

        const isValuePassword = await compare(password, user.password)

        if(!isValuePassword) {
            return res.json({error: "Senha Incorreto" })
        }
        const {id} = user
        const token = sign({id: user.id}, "secret", {expiresIn: "1h"})

        return res.json({user: {id, email}, token})
    }
}
export class AuthControllerGrup{
    async authenticate(req, res) {
        const {email, password} = req.body
        

        const user = await prisma.gruPesq.findUnique({where: {email}})

        if(!user){
            return res.json({error: "Email Incorreto" })
        }

        const isValuePassword = await compare(password, user.password)

        if(!isValuePassword) {
            return res.json({error: "Senha Incorreto" })
        }
        const {id} = user
        const token = sign({id: user.id}, "secret", {expiresIn: "1h"})

        return res.json({user: {id, email}, token})
    }
}