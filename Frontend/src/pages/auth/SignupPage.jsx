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
import { LogInIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";

const SignupPage = () => {
  const naviage = useNavigate();
  const loading = false;
  return (
    <section className="bg-gray-100">
      <div className=" absolute w-fit px-8 py-5 ">
        <Button
          onClick={() => naviage("/")}
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
              <Link href="/auth/sign-in">
                <Button onClick={() => naviage("/auth/sign-in")} variant="outline">
                  Login
                </Button>
              </Link>
            </CardAction>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-5">
                {/* Name */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
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
                    required
                    placeholder="Password"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full mt-6" disabled={loading}>
                {loading ? "Creating..." : "Sign Up"}
              </Button>
            </form>
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
