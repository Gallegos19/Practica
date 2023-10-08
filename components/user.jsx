import Link from "next/link";
export default function user({ users }) {
  return (
    <ul className="">
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li
            key={user.id}
            className="bg-slate-400 mb-2 p-4 rounded-md shadow-md shadow-white flex justify-between text-black"
          >
            {" "}
            {/* Agrega una clave (key) única para cada elemento */}
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100">email:{user.email}</p>
            </div>
            <img src={user.avatar} alt="" className="rounded-full w-20" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
