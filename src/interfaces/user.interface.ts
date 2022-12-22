export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm: boolean
}


export interface IUserResponse{
    id:string,
    email:string,
    isAdm:boolean,
    isActive:boolean,
    createdAt: Date
    updatedAt: Date
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    
    name?: string
    email?: string
    password?: string
}