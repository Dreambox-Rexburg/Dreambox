interface Data {
    email:string
    password:string
}

export async function loginAction(formData:FormData) {
    const data: Data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    }
}
