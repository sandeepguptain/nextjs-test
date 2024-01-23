"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const IndexPage = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const savedInput = localStorage.getItem("userInput");
    if (savedInput) {
      setUserInput(savedInput);
      handleNavigation(savedInput);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleNavigation(userInput);
  };

  const handleNavigation = (input) => {
    localStorage.setItem("userInput", input);

    if (input === "admin") {
      router.push("/admin");
    } else if (input === "sandeep") {
      router.push("/sandeep");
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
    <form onSubmit={handleFormSubmit}>
      <div className="flex items-center">
        <input
          type="text"
          value={userInput}
          className="w-96"
          placeholder="Enter username"
          onChange={(e) => setUserInput(e.target.value)}
        />
      <button type="submit" className="btn w-40 ml-auto h-8 ">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default IndexPage;
