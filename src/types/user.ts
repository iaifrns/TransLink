import { UserStatus } from "../enum/UserStatus";

export interface User{
    name:string,
    username:string,
    email: string,
    position: UserStatus,
    image ?:string
}