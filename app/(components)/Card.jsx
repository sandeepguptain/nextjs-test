"use client";

import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const Card = ({ contract }) => {
  const formateTimeStamp = (timestamp) => {
    const option = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formateTimeStamp = date.toLocaleString("en-us", option);
    return formateTimeStamp;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className=" flex mb-3 justify-between ">
        <PriorityDisplay priority={contract.priority} />
        <StatusDisplay status={contract.status} />
        <div>
          <DeleteBlock id={contract._id} />
          <Link href={`/Contract/${contract._id}`} className="px-3">
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </div>
      </div>
      <h5>{contract.title}</h5>
      <hr className="h-px border-0 bg-slate-500 my-2" />
      <p className="whitespace-pre-wrap text-xs">
        <span className="text-slate-400">Description: </span>
        {contract.description}
      </p>
      <p className="text-xs my-1">
        <span className="text-slate-400">Created At: </span>
        {formateTimeStamp(contract.createdAt)}
      </p>
      <div className="flex items-center text-xs mt-2 gap-1">
        <span className="text-slate-400">Progress:</span>
        <ProgressDisplay progress={contract.progress} /> {contract.progress}%
      </div>
    </div>
  );
};

export default Card;
