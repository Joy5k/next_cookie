import { headers } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req,res) {
  const data = ['Bangla', 'English', 'Math', 'History'];
  const response = new NextResponse(JSON.stringify({ success: true, data: data }));
  response.cookies.set({
    name: "theme",
    value: 'dark',
    path: "/"
  })
// let cookie=req.cookies.get('theme')
  response.headers.set('Authorization', "123-XYZ-ABC")
  
  return response;
}
