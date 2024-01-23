import Contract from "@/app/(models)/contract";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    try {
    const {id} = params
    const selectedContract = await Contract.findOne({_id:id});
    return NextResponse.json({selectedContract}, {status: 200})
    }
    catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}

export async function DELETE(req, {params}){
    try {
        const {id} = params;
        await Contract.findByIdAndDelete(id);
        return NextResponse.json({message: "Contract deleted"}, {status: 200})
    }
    catch(env) {
        return NextResponse.json({message: "Error", env}, {status: 500})
    }
}

export async function PUT(req, {params}){
    try {
        const {id} = params;
        const body = await req.json()
        const contractUpdateData = body.contractData
        const updateCOntract = await Contract.findByIdAndUpdate(id, {
            ...contractUpdateData
        })
        return NextResponse.json({message: "Contract Updated"}, {status: 200})
    }
    catch(env) {
        return NextResponse.json({message: "Error", env}, {status: 500})
    }
}