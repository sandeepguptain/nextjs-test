"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ContractForm = ({contract}) => {
    const EDITMODE = contract._id === 'new' ? false : true
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setContractData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(EDITMODE){
        const res = await fetch(`/api/Contracts/${contract._id}`, {
            method: "PUT",
            body: JSON.stringify({ contractData }),
            "content-type": "application/json",
          });
      
          if (!res.ok) {
            throw new Error("Failed to create contract");
          }
    }
    else {
        const res = await fetch("/api/Contracts", {
          method: "POST",
          body: JSON.stringify({ contractData }),
          "content-type": "application/json",
        });
    
        if (!res.ok) {
          throw new Error("Failed to create contract");
        }
    }

    router.push("/admin");
    router.refresh();
  };
  const startingContractData = {
    title: "",
    description: "",
    category: "Chemical",
    priority: 1,
    progress: 0,
    status: "not started",
  };

  if(EDITMODE){
    startingContractData["category"] = contract.category,
    startingContractData["title"] = contract.title,
    startingContractData["description"] = contract.description,
    startingContractData["priority"] = contract.priority,
    startingContractData["progress"] = contract.progress,
    startingContractData["status"] = contract.status
  }

  const [contractData, setContractData] = useState(startingContractData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-2 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update" : "Create"} Contract</h3>
        <label>Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleChange}
          required={true}
          value={contractData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={contractData.description}
          rows={5}
        />
        <label>Category</label>
        <select id="category" name="category" onChange={handleChange} value={contractData.category}>
          <option value="Chemical">Chemical</option>
          <option value="Software">Software</option>
          <option value="Construction">Construction</option>
        </select>
        <div>
          <input
            id="priority-1"
            type="radio"
            name="priority"
            value={1}
            onChange={handleChange}
            checked={contractData.priority == 1}
          />
          <label className="mr-5">Priority 1</label>
          <input
            id="priority-2"
            type="radio"
            name="priority"
            value={2}
            onChange={handleChange}
            checked={contractData.priority == 2}
          />
          <label className="mr-5">Priority 2</label>
          <input
            id="priority-3"
            type="radio"
            name="priority"
            value={3}
            onChange={handleChange}
            checked={contractData.priority == 3}
          />
          <label className="mr-5">Priority 3</label>
          <input
            id="priority-4"
            type="radio"
            name="priority"
            value={4}
            onChange={handleChange}
            checked={contractData.priority == 4}
          />
          <label className="mr-5">Priority 4</label>
          <input
            id="priority-5"
            type="radio"
            name="priority"
            value={5}
            onChange={handleChange}
            checked={contractData.priority == 5}
          />
          <label className="mr-5">Priority 5</label>
        </div>

        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={contractData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Status</label>
        <select id="status" name="status" onChange={handleChange} value={contractData.status}>
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" className="btn mt-3">
          {EDITMODE ? "Update" : "Create"} Contract
        </button>
      </form>
    </div>
  );
};

export default ContractForm;
