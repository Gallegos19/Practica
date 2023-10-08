async function fetchUser() {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return data.data;
}
import User from "@/components/user";
export default async function Homepage() {
  const users = await fetchUser();
  return (
   <User users={users}/>
  );
}
