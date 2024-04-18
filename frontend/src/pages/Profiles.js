import React from "react";
import ProfileComponent from "../components/ProfileComponent";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <ProfileComponent />
      <div className="bg-white px-16 py-4 rounded-xl mt-8">
        <Link
          to="/menu"
          className="link px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 text-center"
        >
          To menu
        </Link>
      </div>
    </div>
  );
};

export default Profile;
