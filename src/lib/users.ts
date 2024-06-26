import {hash} from "bcrypt";
import {db} from "./db";

export async function RegisterUser({
                                       firstName,
                                       lastName,
                                       email,
                                       password,
                                   }: { firstName: string, lastName: string, email: string, password: string }) {
    const existingUser = await db.users.findFirst({where: {email}});

    const passwordHash: string = await hash(password, 10);

    if (existingUser) {
        // Code runs if email is in use
        return {isError: true, message: "Email is in use"};
    }

    try {
        return db.users.create({
            data: {
                firstName,
                lastName,
                email,
                passwordHash,
            },
        });
    } catch (e) {
        console.log(e);
    }
}
