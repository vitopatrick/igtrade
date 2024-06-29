import React from "react";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";

const DeletedButton = () => {
  return (
    <Button variant={"destructive"} onClick={() => console.log("Deleted")}>
      <Trash2Icon strokeWidth={1} />
    </Button>
  );
};

export default DeletedButton;
