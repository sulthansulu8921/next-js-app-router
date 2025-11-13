import { cookies, headers } from "next/headers";

 
export async function GET(request: Request) {
  const data = [{
    id:1,
    title:'T-shirt'
  },
  {
    id:2,
    title:'Watch'
  }
];

    const cookieList = await cookies();
    const token = cookieList.get("authToken");
    console.log("Token cookie",token);
 
  return Response.json({ data })
}

export async function POST(request: Request) {
    const prod = await request.json();

    const cookieList = await cookies();
    const token = cookieList.get('authToken');
  console.log("Token cookie",token);
 

    const headerList = await headers();
    console.log('Authorization', headerList.get('authorization'));

  const data = [
    {
        id:1,
        title:'T-shirt',
        prod:prod,
  },
];
 
  return Response.json({ data })
}