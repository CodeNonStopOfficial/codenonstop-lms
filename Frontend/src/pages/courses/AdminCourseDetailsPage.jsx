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
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const AdminCourseDetailsPage = () => {
    const navigate = useNavigate();
  return (
    <section className="px-4 py-4">
      <div className="space-y-2 mb-4">
        <div className="flex flex-row gap-2">
          <Button
            className={buttonVariants({
              variant: "outline",
              className: "text-black px-8",
            })}
          >
            Publish
          </Button>
          <Button
           onClick={()=>navigate("session-create")}
            className={buttonVariants({
              variant: "outline",
              className: "text-black",
            })}
          >
            <Plus />
            Create Session
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Course Update Page
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 space-y-2">
            <div>
              <Field>Title</Field>
              <Input
                type="text"
                name="title"
                placeholder="Enter a Course Title"
              />
            </div>
            <div>
              <Field>Subtitle</Field>
              <Input
                type="text"
                name="subtile"
                placeholder="Enter a Course Subtitle"
              />
            </div>
            <div>
              <Field>Description</Field>
              <Input
                type="text"
                name="description"
                placeholder="Enter a Description"
              />
            </div>
            <div>
              <Field>Categroy</Field>
              <Input
                type="text"
                name="category"
                placeholder="Enter a Categroy"
              />
            </div>
            <div>
              <Field>Amount</Field>
              <Input type="number" name="price" placeholder="Enter a Amount" />
            </div>
            <div>
              <Field>Level</Field>
              <Input type="text" name="Level" placeholder="Enter a Level" />
            </div>
            <div>
              <Field>Bannels</Field>
              <Input type="file" name="bannels" placeholder="Select a Files?" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={() => navigate(-1)}
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "w-full text-black px-8 py-4 sm:w-auto font-semibold",
                })}
              >
                Back
              </Button>

              <Button
                className={buttonVariants({
                  className: "w-full sm:w-auto font-semibold",
                })}
              >
                Update Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AdminCourseDetailsPage;
