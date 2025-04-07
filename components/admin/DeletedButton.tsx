import React from "react";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";

const DeletedButton = () => {
  return (
    <Button variant={"destructive"}>
      <Trash2Icon strokeWidth={1} />
    </Button>
  );
};

export default DeletedButton;
