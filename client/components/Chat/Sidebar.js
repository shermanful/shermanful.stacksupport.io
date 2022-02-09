import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelationships } from "../../store/chat";

const Sidebar = ({ id, isMentor, recipients }) => {
  console.log(recipients);
  return (
    <section className="sidebar">
      <div className="sidebar-header">
        <h3 href="#">
          <div>Stack Support Chat</div>
          <i alt="Brand" className="glyphicon glyphicon-comment"></i>
        </h3>
      </div>
      <h5>Conversations</h5>
      {/* {recipients.map((recipient) => {
        return (
          <div>
            <h2>{recipient.firstName + " " + recipient.lastName}</h2>
          </div>
        );
      })} */}
    </section>
  );
};

export default Sidebar;
