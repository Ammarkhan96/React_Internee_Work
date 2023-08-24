import React from "react";
import "./FollowersCard.css";
import { Follwers } from "../../Data/follwersData";

const FollowersCard = () => {
  return (
    <>
      <div className="FollowersCard">
        <h2>Who is following you</h2>

        {Follwers.map((follower, id) => {
          return (
            <div className="follower">
              <div>
                <img src={follower.img} alt="" className="followerImage" />
                <div className="name">
                  <span>{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
              <button className="button fc-button">Follow</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FollowersCard;