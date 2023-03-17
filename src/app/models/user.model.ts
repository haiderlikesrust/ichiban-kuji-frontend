interface User {
    id: string,
    email: string,
    username: string,
    created_at: string,
    is_superuser: boolean,
    owned_products: string[],
    points: number
}



export default User;