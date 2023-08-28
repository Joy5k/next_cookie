import { headers } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req,res) {
  return NextResponse.json(
    {
      status: 200,
      headers: {
        'token':'123-joy5k',
        'Set-Cookie': 'theme=dark;path=/'
      }
  }
    
  )
}
