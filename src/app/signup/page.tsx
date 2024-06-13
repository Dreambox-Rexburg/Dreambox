"use client"

import React, {FormEvent} from "react";
import {registerAction} from "@/app/signup/action";

const Page = () => {
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    console.log("formData", formData);
    await registerAction(formData)
  }

  return (
    <div>
      <h2 className="text-center text-4xl font-semibold pt-2">Sign up Page</h2>
      <div className="flex flex-col mx-auto justify-center">
        <form
          className="flex flex-col mx-auto justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mt-8">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="bg-customBackgroundDark rounded-md p-3 my-1"
            />
          </div>
          <div className="flex flex-col mt-8">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              className="bg-customBackgroundDark rounded-md p-3 my-1"
            />
          </div>
          <div className="flex flex-col mt-8">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-customBackgroundDark rounded-md p-3 my-1"
            />
          </div>
          <div className="flex flex-col mt-8">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="bg-customBackgroundDark rounded-md p-3 my-1"
            />
          </div>
          <div className="mx-auto my-8">
            <input
              type="submit"
              value="Create Account"
              className="text-sm py-1.5 px-2 font-bold rounded-3xl border-2 bg-customPrimaryDefault text-white hover:border-customPrimaryDark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
