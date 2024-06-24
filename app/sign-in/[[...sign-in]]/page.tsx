import { SignIn } from "@clerk/nextjs";
import React from "react";

;

const SignInPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[ #2C5364] h-screen">
      <main className="mx-auto lg:w-[40%] translate-y-1/4 p-4">
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              cardBox: "w-full shadow-md",
              headerTitle: "uppercase tracking-widest",
              formFieldInput: "p-4 rounded-sm",
            },
          }}
        />
      </main>
    </div>
  );
};

export default SignInPage;
