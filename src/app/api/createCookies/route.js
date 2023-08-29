import { headers } from "next/dist/client/components/headers";

export async function GET(req, res, next) { 
    const list = headers();
    const token = list.get('token');
    return NextResponse.next({message:token})
}