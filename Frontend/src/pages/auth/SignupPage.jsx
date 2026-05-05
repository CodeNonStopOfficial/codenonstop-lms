import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterUserMutation } from "@/features/api/authApi";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const SignupPage = () => {
  const navigate = useNavigate();
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });
  };

  const handleRegistration = async () => {
    try {
      await registerUser(signupInput).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (registerIsSuccess) {
      navigate("/auth/sign-in");
    }
  }, [navigate, registerIsSuccess]);

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData?.message || "Signup successful ✅.");
    }
    if (registerError) {
      toast.error(registerError?.data?.message || "Signup Failed ⚠️");
    }
  }, [registerData, registerError, registerIsSuccess]);

  return (
    <section className="bg-gray-100">
      <div className=" absolute w-fit px-8 py-5 ">
        <Button
          onClick={() => navigate("/")}
          className={buttonVariants({
            className: "w-fit px-8 py-4 hover:bg-blue-900",
          })}
        >
          Back
        </Button>
      </div>
      <div className="min-h-screen flex items-center justify-center  dark:bg-[#0A101E] px-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>
              Enter your details below to create your account
            </CardDescription>
            <CardAction>
              <Link to="/auth/sign-in">
                <Button
                  onClick={() => navigate("/auth/sign-in")}
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
            </CardAction>
          </CardHeader>

          <CardContent>
            <div>
              <div className="flex flex-col gap-5">
                {/* Name */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={signupInput.name}
                    onChange={changeInputHandler}
                    placeholder="Enter Your Name:"
                    required
                  />
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={signupInput.email}
                    onChange={changeInputHandler}
                    placeholder="Ex@example.com"
                    required
                  />
                </div>

                {/* Password */}
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    value={signupInput.password}
                    onChange={changeInputHandler}
                    required
                    placeholder="Password"
                  />
                </div>
              </div>

              <Button
                disabled={registerIsLoading}
                type="submit"
                onClick={handleRegistration}
                className="w-full mt-6"
              >
                {registerIsLoading ? "Creating..." : "Sign Up"}
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-3">
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default SignupPage;
