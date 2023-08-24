import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  const profilePage = true;

  return (
    <>
      <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="Cover" />
          <img src={Profile} alt="Profile" />
        </div>

        <div className="ProfileName">
          <span>Zendaya MJ</span>
          <span>Senior Front end Developer</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>5000</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>10</span>
              <span>Followers</span>
            </div>

            {profilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>

        {profilePage ? "" : <span>My Profile</span>}
      </div>
    </>
  );
};

export default ProfileCard;