import Contract from "@/app/(models)/contract";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json();
        const contractData = body.contractData
        await Contract.create(contractData)
        return NextResponse.json({message: "Contract created"}, {status: 201})
    }
    catch(e){
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}

export async function GET(){
    try {
        const contracts = await Contract.find();
        return NextResponse.json({contracts}, {status: 200})
    }
    catch(e){
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}