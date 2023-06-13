import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      `https://assignment-12-server-green.vercel.app/users`
    );

    return res.json();
  });

  // handle admin
  const makeAdmin = (id) => {
    // console.log(id);
    fetch(`https://assignment-12-server-green.vercel.app/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast(`💣 Promted to Admin`, {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        }
      });
  };

  // handle instructor
  const makeinstructor = (id) => {
    //todo: prevent deleting deleting user when he is admin
    fetch(
      `https://assignment-12-server-green.vercel.app/users/instructor/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast(`💣 Promted as Instructor`, {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        }
      });
  };

  // handle delete
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://assignment-12-server-green.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          toast(`💣 User Deleted`, {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-full w-full mt-10">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="text-center">Manage All Users : {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Administrative</th>
              <th>Instructor Access</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                        <span className="font-semibold text-lg pt-2">
                          {user.name[0]}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="badge badge-outline pt-2 badge-success">
                      Admin
                    </span>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user._id)}
                      className="px-2 pt-2 pb-1 rounded-md bg-green-300 hover:bg-green-400 hover:shadow-md"
                    >
                      <MdAdminPanelSettings className="text-lg inline-block mb-1"></MdAdminPanelSettings>
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    <span className="badge badge-outline pt-2 badge-info">
                      Instructor
                    </span>
                  ) : (
                    <button
                      onClick={() => makeinstructor(user._id)}
                      className="px-2 pt-2 pb-1 rounded-md bg-orange-300 hover:bg-orange-400 hover:shadow-md"
                    >
                      <BsMicrosoftTeams className="text-lg inline-block mx-1"></BsMicrosoftTeams>
                      Make Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="px-2 pt-2 pb-2 rounded-md bg-red-300 hover:bg-red-400 hover:shadow-md"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
