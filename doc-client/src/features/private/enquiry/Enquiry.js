import React, { useEffect, useState } from "react";
import MuiDatatable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import DeleteButton from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import QueryService from "../../../services/QueryService";

const Enquiry = () => {
  const [querylist, setQueryList] = useState([]);

  const loadQuery = async () => {
    const response = await QueryService.getAllUsers();
    if (response?.data.data) setQueryList(response?.data.data);
    console.log(response?.data.data);
  };

  useEffect(() => {
    loadQuery();
  }, []);

  const deleteUser = (id) => {
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
        QueryService.deleteUser(id)
          .then((response) => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            loadQuery();
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Not Deleted!", "User has not been deleted.", "error");
          });
      }
    });
  };

  const columns = [
    // {
    //   label: "ID",
    //   name: "userId",
    //   options: {
    //     sort: true,
    //     filter: false,
    //   },
    // },
    {
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const query = querylist[index];
          return `${query?.name?.first} ${query?.name?.last} `;
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
      label: "Message",
      name: "message",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = querylist[index];
          return (
            <>
              <IconButton color="error" onClick={() => deleteUser(user?._id)}>
                <DeleteButton />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <MuiDatatable title="Query List" data={querylist} columns={columns} />
    </>
  );
};

export default Enquiry;
