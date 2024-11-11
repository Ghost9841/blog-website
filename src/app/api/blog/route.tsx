/* GET POST DEL PUSH */
import { ConnectDB } from "@/lib/config/db"
import { NextResponse } from "next/server"

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request:any) {
    
    return NextResponse.json({msg:"API Working"})
}


export async function POST(request:any) {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("Image");
}
