import React from "react";
import Service from "@/components/Service";

const Page = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-semibold pt-2">Sign up Page</h2>
            <div className="flex flex-col mx-auto justify-center">
                <form action="/account/register" method="post" id="login" className="flex flex-col mx-auto justify-center">
                    <div className="flex flex-col mt-8">
                        <label>First Name</label>
                        <input type="text" name="account_firstname" id="firstname" required 
                        className="bg-customBackgroundDark rounded-md p-3 my-1"
                        />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label>Last Name</label>
                        <input type="text" name="account_lastname" id="lastname" required 
                        className="bg-customBackgroundDark rounded-md p-3 my-1" />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label>Email</label>
                        <input type="email" name="account_email" id="email" required
                        className="bg-customBackgroundDark rounded-md p-3 my-1" />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label>Password</label>
                        <input type="password" name="password" id="password" required
                        className="bg-customBackgroundDark rounded-md p-3 my-1" />
                    </div>
                    <div className="mx-auto my-8">
                        <input type="submit" value="Create Account" id="button" className="text-sm py-1.5 px-2 font-bold rounded-3xl border-2 bg-customPrimaryDefault text-white hover:border-customPrimaryDark"/>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Page;