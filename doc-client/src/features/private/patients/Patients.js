import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import UserService from "../../../services/UserService";
import { IconButton } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import UserContext from "./UserContext";
import AddEditUser from "./AddEditUser";

const Patients = () => {
  const [userList, setUserlist] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [initialUser, setInitialUser] = useState();
  const [operation, setOperation] = useState("add");

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const LoadUser = async () => {
    const res = await UserService.getAllUsers();
    if (res?.data?.data) setUserlist(res?.data?.data);
  };

  useEffect(() => {
    LoadUser();
  }, []);

  const addUser = () => {
    setOpenDialog(true);
    setInitialUser({
      name: {
        first: "",
        last: "",
      },
      mobile: "",
      email: "",
      password: "",
      role: "patient",
    });
    setOperation("add");
    LoadUser();
  };

  const handleEdit = (user) => {
    setOpenDialog(true);
    setInitialUser(user);
    setOperation("edit");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then((response) => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            LoadUser();
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Not Deleted!", "User has not been deleted.", "error");
          });
      }
    });
  };

  const columns = [
    {
      label: "ID",
      name: "_id",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = userList[index];
          return `${user?.name?.first} ${user?.name?.last}`;
        },
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Role",
      name: "role",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Actions",
      name: "actions",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = userList[index];
          return (
            <>
              <IconButton color="primary" onClick={() => handleEdit(user)}>
                <Edit />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(user?._id)}>
                <Delete />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <UserContext.Provider
        value={{
          open: openDialog,
          handleClose: handleDialogClose,
          operation,
          LoadUser,
          initialUser,
        }}
      >
        <AddEditUser />
      </UserContext.Provider>
      <MUIDataTable title="User List" data={userList} columns={columns} />
    </>
  );
};

export default Patients;
