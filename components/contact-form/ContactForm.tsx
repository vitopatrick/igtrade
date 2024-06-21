import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <div className="flex  gap-4 flex-col lg:flex-row">
      <div className="space-y-4 ">
        <div className="space-y-2">
          <h4 className="font-bold">General questions: </h4>{" "}
          <p>
            {" "}
            <span className="block">Email:</span> clientservices@rjobrienhub.com
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Technology Question </h4>{" "}
          <p>
            {" "}
            <span className="block">Email:</span> clientservices@rjobrienhub.com
          </p>
        </div>
      </div>
      {/* form */}
      <div className="flex-1 w-full space-y-6">
        {/* name */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Full Name"
            className="w-full"
          />
        </div>
        {/* email */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full"
          />
        </div>
        {/* phone */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Phone</Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            className="w-full"
          />
        </div>
        {/* how can we help you */}
        <Textarea placeholder="Type your message here." />
        {/* submit */}
        <Button className="bg-green-600">Submit</Button>
      </div>
    </div>
  );
};

export default ContactForm;
