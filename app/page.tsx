import Image from "next/image";
import Login from "../components/Login"
import { LOADIPHLPAPI } from "dns";

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] ">
      <Login />
    </main>
  );
}
