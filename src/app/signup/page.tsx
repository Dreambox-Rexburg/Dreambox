import React from "react";
import Service from "@/components/Service";

const Page = () => {
    return (
        <div>
            <h2>Sign up Page</h2>
            <form action="/account/register" method="post" id="login">
                <div>
                    <label>First Name</label>
                    <input type="text" name="account_firstname" id="firstname" required placeholder="Enter your first name" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="account_lastname" id="lastname" required placeholder="Enter your last name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="account_email" id="email" required placeholder="Enter a valid email address" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" required placeholder="Enter a valid password" />
                </div>
                <div>
                    <input type="submit" value="Create Account" id="button"/>
                </div>
            </form>
        </div>

    );
};

export default Page;