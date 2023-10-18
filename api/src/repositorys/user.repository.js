import { prisma } from "../services/prisma";


// create a user api

export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            turma:true,
            periodo:true,
            createdAt: true,
            updatedAt: false,
        }
    })
    return user
}

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email:true,
            turma:true,
            periodo:true,
            description: true,
            createdAt: true,
            updatedAt: false,
        }
    })
    return users
}
export const getById = async(id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            turma:true,
            periodo:true,
            createdAt: true,
            updatedAt: false,
        }
    })
    return user
}

export const updateUser = async (id, data) => {
    const user = await prisma.user.update({
        where: {
            id,
        },
        data,
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            turma:true,
            periodo:true,
            createdAt: true,
            updatedAt: true,
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

//Create a prof api

export const createProf = async (data) => {
    const prof = await prisma.prof.create({
        data,
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

export const getAllProf = async () => {
    const profs = await prisma.prof.findMany({
        select: {
            id: true,
            name: true,
            email:true,
            description: true,
            createdAt: true,
            updatedAt: false,
        }
    })
    return profs
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


// discente api

export const createDis = async (data) => {
    const dis = await prisma.dicente.create({
        data,
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

export const getAllDis = async () => {
    const dis = await prisma.dicente.findMany({
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

// grup api

export const createGrup = async (data) => {
    const Grup = await prisma.gruPesq.create({
        data,
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

export const getAllGrup = async () => {
    const Grup = await prisma.gruPesq.findMany({
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