import axios from "axios";
import FormModal from "./components/formModal";
import { cookies } from 'next/headers'
import isAuthenticated from "@/helpers/isAuthenticated";
import Logout from "./components/Logout";
export async function Login() {
  
  
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value;
  console.log("***server token:", token)
  const is_authenticated =await  isAuthenticated(token);
  
  //const cookieStore = cookies()
  //const token:any = cookieStore.get('token')
  //console.log(token)

  //console.log(request.cookies.get('token'))
  //const data = await isAuthenticated()
  //console.log({data})
  return(<>
  {is_authenticated ? <Logout /> :<FormModal />}
  </>)
}
