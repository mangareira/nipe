import { prisma } from "../services/prisma";
import bcrypt from "bcrypt"


// create a user api

export const createUser = async (req, res) => {
    const {name, email, password, turma, periodo} = req.body

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {name, email, password: hashPassword,periodo, turma}
    })
    return res.json(user)
}
export const getAll = async (req, res) => {
    const users = await prisma.user.findMany({
        select:{
            id:true,
            name:true,
            Projetos:true
        }
    })
    return res.json(users)
}
export const getById = async(id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        
    })
    return user
}
export const updateUser = async (id, data) => {
    const user = await prisma.user.update({
        where: {
            id,
        },
        data,
        include:{
            projetos:true,
        }
    })
    return user
}
export const deleteUser = async (id) => {
        await prisma.user.delete({
            where: {
                id
            }
        })
    return
}
//creat projects user


export const createProjects = async (req, res) => {
    const {tema, resumo} = req.body
    const {authorId} = req.params


    const user = await prisma.projects.create({
        data : {
            tema,
            resumo,
            author:{
                connect:{
                    id:authorId
                }
            }
        },
        select: {
            id: true,
            tema: true,
            resumo: true,
            author: {
                select:{
                    name:true
                }
            }
        }
    })
    return res.json(user)
}
export const getAllProjects = async (req, res) => {
    const projects = await prisma.projects.findMany({
        select:{
            id:true,
            tema:true,
            resumo:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return res.json(projects)
}


//Create a prof api

export const createProf = async (req, res) => {
    const {name, email, password} = req.body

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await prisma.prof.create({
        data: {name, email, password: hashPassword}
    })
    return res.json(user)
}
export const getAllProf = async (req, res) => {
    const users = await prisma.prof.findMany({
        select:{
            id:true,
            name:true,
            Projetos:true
        }
    })
    return res.json(users)
}
export const getByIdProf = async(id) => {
    const prof = await prisma.prof.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            createdAt: true,
            updatedAt: false,
        }
    })
    return prof
}
export const updateProf = async (id, data) => {
    const prof = await prisma.prof.update({
        where: {
            id,
        },
        data,
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return prof
}
export const deleteProf = async (id) => {
    await prisma.prof.delete({
        where: {
            id
        }
    })
return
}

//creat projects user


export const createProjectsProf = async (req, res) => {
    const {tema, resumo} = req.body
    const {ProfId} = req.params


    const user = await prisma.projectsProf.create({
        data : {
            tema,
            resumo,
            Prof:{
                connect:{
                    id:ProfId
                }
            }
        },
        select: {
            id: true,
            tema: true,
            resumo: true,
            Prof: {
                select:{
                    name:true
                }
            }
        }
    })
    return res.json(user)
}
export const getAllProjectsProf = async (req, res) => {
    const projects = await prisma.projectsProf.findMany({
        select:{
            id:true,
            tema:true,
            resumo:true,
            Prof:{
                select:{
                    name:true
                }
            }
        }
    })
    return res.json(projects)
}

// discente api

export const createDis = async (req, res) => {
    const {name, email, password} = req.body

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await prisma.dicente.create({
        data: {name, email, password: hashPassword}
    })
    return res.json(user)
}
export const getAllDis = async (req, res) => {
    const users = await prisma.dicente.findMany({
        select:{
            id:true,
            name:true,
            Projetos:true
        }
    })
    return res.json(users)
}
export const getByIdDis = async(id) => {
    const dis = await prisma.dicente.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            createdAt: true,
            updatedAt: false,
        }
    })
    return dis
}
export const updateDIs = async (id, data) => {
    const dis = await prisma.dicente.update({
        where: {
            id,
        },
        data,
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return dis
}
export const deleteDis = async (id) => {
    await prisma.dicente.delete({
        where: {
            id
        }
    })
return
}

export const createProjectsDis = async (req, res) => {
    const {tema, resumo} = req.body
    const {DicenteId} = req.params


    const user = await prisma.projectsDis.create({
        data : {
            tema,
            resumo,
            Dicente:{
                connect:{
                    id:DicenteId
                }
            }
        },
        select: {
            id: true,
            tema: true,
            resumo: true,
            Dicente: {
                select:{
                    name:true
                }
            }
        }
    })
    return res.json(user)
}
export const getAllProjectsDis = async (req, res) => {
    const projects = await prisma.projectsDis.findMany({
        select:{
            id:true,
            tema:true,
            resumo:true,
            Dicente:{
                select:{
                    name:true
                }
            }
        }
    })
    return res.json(projects)
}

// grup api

export const createGrup = async (req, res) => {
    const {nameGrup, email, password} = req.body

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await prisma.gruPesq.create({
        data: {nameGrup, email, password: hashPassword}
    })
    return res.json(user)
}
export const getAllGrup = async (req, res) => {
    const users = await prisma.gruPesq.findMany({
        select:{
            id:true,
            nameGrup:true,
            email:true,
            Projetos:true
        }
    })
    return res.json(users)
}
export const getByIdGrup = async(id) => {
    const Grup = await prisma.gruPesq.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            tema: true,
            nameGrup: true,
            description: true,
            createdAt: true,
            updatedAt: false,
        }
    })
    return Grup
}
export const updateGrup = async (id, data) => {
    const Grup = await prisma.gruPesq.update({
        where: {
            id,
        },
        data,
        select: {
            id: true,
            tema: true,
            nameGrup: true,
            description: true,
            createdAt: true,
            updatedAt: true,
        }
    })
    return Grup
}
export const deleteGrup = async (id) => {
    await prisma.gruPesq.delete({
        where: {
            id
        }
    })
return
}

export const createProjectsGrup = async (req, res) => {
    const {tema, resumo} = req.body
    const {gruPesqId} = req.params


    const user = await prisma.projectsGrup.create({
        data : {
            tema,
            resumo,
            GruPesq:{
                connect:{
                    id:gruPesqId
                }
            }
        },
        select: {
            id: true,
            tema: true,
            resumo: true,
            GruPesq: {
                select:{
                    nameGrup:true
                }
            }
        }
    })
    return res.json(user)
}
export const getAllProjectsGrup = async (req, res) => {
    const projects = await prisma.projectsGrup.findMany({
        select:{
            id:true,
            tema:true,
            resumo:true,
            GruPesq:{
                select:{
                    nameGrup:true
                }
            }
        }
    })
    return res.json(projects)
}
// upload api 

export const uploadCreate = async (data) => {
    const upload = await prisma.image.create({
        data,
        select: {
            id: true,
            nome: true,
            path: true,
            type: true,
        }
    })
    return upload
}
export const getAllUpload = async () => {
    const upload = await prisma.image.findMany({
        select: {
            id: true,
            nome: true,
            path: true,
            type: true,
        }
    })
    return upload
}
export const getByIdUpload = async(id) => {
    const upload = await prisma.image.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            nome: true,
            path: true,
            type: true,
        }
    })
    return upload
}
export const updateUpload = async (id, data) => {
    const upload = await prisma.image.update({
        where: {
            id,
        },
        data,
        select: {
            id: true,
            nome: true,
            path: true,
            type: true,
        }
    })
    return upload
}
export const deleteupload = async (id) => {
    await prisma.image.delete({
        where: {
            id
        }
    })
return
}