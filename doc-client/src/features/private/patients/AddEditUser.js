import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useContext } from "react";
import UserForm from "./UserForm";
import UserContext from "./UserContext";
const AddEditUser = () => {
  const { open, operation, handleClose } = useContext(UserContext);
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>{operation == "edit" ? "Edit" : "Add"} User</DialogTitle>
        <DialogContent>
          <UserForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;
