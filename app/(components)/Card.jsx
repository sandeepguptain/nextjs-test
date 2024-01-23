"use client";

import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
const Card = ({ contract }) => {
    const router = useRouter()
  const savedInput =
    typeof window !== "undefined" ? localStorage.getItem("userInput") : null;
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/Contracts/${contract._id}`, {
      method: "PUT",
      body: JSON.stringify({ contractData: { ...contract, isAccepted: true } }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create contract");
    }
      router.refresh();
  };
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
          {savedInput === "admin" && <DeleteBlock id={contract._id} />}
          {contract.isAccepted === false && (
            <Link href={`/admin/Contract/${contract._id}`} className="px-3">
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          )}
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
      <div className="flex justify-around mt-3 items-center">
        {contract.isAccepted === true ? (
          <span className="text-[10px] px-2 text-green-400">
            Contract Accepted
          </span>
        ) : (
          <span className="text-[10px] px-2 text-red-400">
            Contract Not Accepted yet
          </span>
        )}

        {savedInput !== "admin" && contract.isAccepted === false && (
          <span onClick={handleClick} className="px-3 cursor-pointer btn max-w-[50%]">
            <FontAwesomeIcon icon={faCheckCircle} /> Accept
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
