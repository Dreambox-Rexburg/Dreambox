"use server";

import {RegisterUser} from "@/lib/users";

interface Data {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export async function registerAction(formData: FormData) {
    const data: Data = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    await RegisterUser(data);

// todo set session cookie. set firstName and email into cookie
}
