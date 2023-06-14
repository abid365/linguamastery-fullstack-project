import React from "react";

const hudai = () => {
  return (
    <div>
      {isAdmin ? (
        <>
          <li>
            <Link to="/dashboard/manage_classes">
              <BsFillBookmarkCheckFill className="inline-block" />
              Manage Classes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/manage_users">
              <BsFillPeopleFill className="inline-block"></BsFillPeopleFill>
              Manage Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard/history">
              <BsCreditCardFill className="inline-block mb-2"></BsCreditCardFill>{" "}
              Payment History
            </Link>
          </li>
        </>
      ) : isInstructor ? (
        <>
          <li>
            <Link to="/dashboard/add_a_class">
              <BsFillBookmarkCheckFill className="inline-block" />
              Add a Class
            </Link>
          </li>
          <li>
            <Link to="/dashboard/classes_by_instructor">
              <BsFillPeopleFill className="inline-block"></BsFillPeopleFill>
              My Classes
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/dashboard/selectedClasses">
              <BsFillBookmarkCheckFill className="inline-block" />
              My Selected Classes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/enrolledClasses">
              <BsFillHeartFill className="inline-block"></BsFillHeartFill> My
              Enrolled Classes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/history">
              <BsCreditCardFill className="inline-block mb-2"></BsCreditCardFill>{" "}
              Payment History
            </Link>
          </li>
        </>
      )}
    </div>
  );
};

export default hudai;
