import React from "react";

const Profile = () => {
    const user = localStorage.getItem("user")
    const parseUser = JSON.parse(user)
    console.log(parseUser);
    
  return (
    <div className="flex justify-center">
        <div className="w-64 h-80 bg-white shadow-2xl my-10 p-3 border rounded-lg">
      <h1 className="text-xl font-bold text-center">Profile</h1>
      <div className="flex items-center gap-5">
      <img className="w-16 h-16 rounded-[100%]" src={parseUser.profile} alt="profile" />
      <h1 className="text-xl font-bold">{parseUser.email}</h1>
      </div>
    </div>
    </div>
  );
};

export default Profile;
