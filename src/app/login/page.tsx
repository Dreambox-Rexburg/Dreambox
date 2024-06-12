import React, {FormEvent} from "react";
import {loginAction} from "@/app/login/actions";

const Page = () => {
    const submitHandler = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = new FormData(form)
        await loginAction(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
        </form>
    );
};

export default Page;
