import React from "react";

const SingleClass = (props) => {
  console.log(props.singleclass);
  const { language, rating, teacher, enrolled_students, image_url, title } =
    props.singleclass;

  return (
    <div>
      <div className="w-72 rounded-3xl px-5 py-4 justify-self-center shadow-lg border-2 border-slate-800">
        <h1 className="text-xl font-bold w-2/3">{title}</h1>
        <div className="avatar">
          <div className="w-10 mask mask-squircle">
            <img src={image_url} />
          </div>
        </div>
        <h1 className="font-semibold">{teacher}</h1>

        <small>{rating}</small>
        <p>Enrolled Students: {enrolled_students}</p>
      </div>
    </div>
  );
};

export default SingleClass;
