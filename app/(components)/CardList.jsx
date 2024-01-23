import React from "react";
import Card from "./Card";
const getContracts = async () => {
  try {
    const res = await fetch(`${process.env.URL}/api/Contracts`, {
      cache: "no-store",
    });
    return res.json();
  } catch (e) {
    console.log("Error fetching", e);
  }
};

const CardList = async () => {
  const data = await getContracts();

  if (!data?.contracts) {
    return <p>No contracts.</p>;
  }

  const contracts = data.contracts;

  const uniqueCategories = [
    ...new Set(contracts?.map(({ category }) => category)),
  ];

  return (
        <div className="p-5">
          <div>
            {contracts &&
              uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                <div key={categoryIndex} className="mb-4">
                  <h4>{uniqueCategory}</h4>
                  <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                    {contracts
                      .filter((ticket) => ticket.category === uniqueCategory)
                      .map((contract, _index) => (
                        <Card id={_index} key={_index} contract={contract} />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
  );
};

export default CardList;
