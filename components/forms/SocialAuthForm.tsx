"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const ButtonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "An Error occurred during sing-in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={ButtonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login in with GitHub</span>
      </Button>
      <Button className={ButtonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="google"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Login in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;