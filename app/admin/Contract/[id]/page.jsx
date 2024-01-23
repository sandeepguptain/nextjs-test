import ContractForm from "@/app/(components)/ContractForm"
const getContractByid = async (id) => { 
    const rest =  await fetch(`${process.env.URL}/api/Contracts/${id}`, {
      cache: "no-store",
    })
    if(!rest.ok){
      throw new Error("Failed to fetch Contract")
    }

    return rest.json()
  }

const Contract = async ({params}) => {
  const editMode = params.id === "new" ? false : true;
  let updateContract = {}
  if(editMode){
    updateContract = await getContractByid(params.id)
    updateContract = updateContract.selectedContract;
  }
  else {
    updateContract = {
      _id : "new"
    }
  }
  return (
    <ContractForm contract={updateContract} />
  )
}

export default Contract