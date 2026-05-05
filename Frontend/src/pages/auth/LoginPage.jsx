import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginUserMutation } from "@/features/api/authApi";
import { LogInIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const LoginPage = () => {
  const date = new Date().getFullYear();
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: loginIsSuccess,
      isError: loginIsError,
      isLoading: loginIsLoading,
    },
  ] = useLoginUserMutation();
  const changeInputHandle = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };
  const handleLogin = async () => {
    try {
      await loginUser(loginInput).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loginIsSuccess) {
      navigate("/");
    }
  }, [loginIsSuccess, navigate]);

  useEffect(() => {
    if (loginData && loginIsSuccess) {
      toast.success(loginData?.message || "Login Successfully ✅");
    }
    if (loginIsError) {
      toast.error(loginIsError?.data?.message || "Login Error ⚠️");
    }
  }, [loginData, loginIsError, loginIsSuccess]);
  return (
    <section className="max-w-full">
      <div className="absolute w-fit px-8 py-5">
        <Button
          onClick={() => navigate("/")}
          className={buttonVariants({
            variant: "outline",
            className: "px-8 py-4 text-black",
          })}
        >
          Back
        </Button>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="flex items-center justify-between gap-5">
            <div>
              <CardTitle className="text-2xl font-bold">
                Sign-In to Account?
              </CardTitle>
              <CardDescription className="text-sm">
                Learn on your own time from top universities and businesses.{" "}
                {date}
              </CardDescription>
            </div>
            <div>
              <Button
                onClick={() => navigate("/auth/sign-up")}
                className={buttonVariants({
                  variant: "outline",
                  className: "text-black",
                })}
              >
                Sign-Up
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form action="" method="post" className="space-y-2">
              <div>
                <Label className="pb-1">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.e}
                  onChange={changeInputHandle}
                  placeholder="Ex@example.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label>Password</Label>
                  <Link
                    href="forget/password"
                    className="underline text-black-50 font-md hover:text-red-700"
                  >
                    Forget Password
                  </Link>
                </div>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={changeInputHandle}
                  placeholder="Password"
                />
              </div>
              <div className="mt-5">
                <Button
                  type="submit"
                  onClick={handleLogin}
                  disabled={loginIsLoading}
                  className="w-full"
                >
                  Sign-In
                </Button>
              </div>
              <div className="mt-5">
                <Button type="submit" variant={"outline"} className="w-full">
                  <LogInIcon />
                  Login With Google
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
