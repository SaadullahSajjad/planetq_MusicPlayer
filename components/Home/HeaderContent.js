import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function HeadContent() {
  const { data: session } = useSession();
  const router = useRouter();

  async function logoutHandler(event) {
    event.preventDefault();
    if (session) {
      signOut();
    }
  }

  return (
    <>
      <div className="text-white bg-transparent flex justify-between items-center gap-4 px-6 py-2">
        <Link
          href="/"
          className="bg-transparent flex justify-center items-center"
        >
          <div className="bg-transparent flex gap-4 flex-col justify-center items-center">
            <Image
              src="/images/client.png"
              alt="Your Logo"
              width={50}
              height={120}
              className="rounded-2xl bg-transparent"
            ></Image>
            <h1 className="animate-text bg-gradient-to-r text-center from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm font-black">
              Planet Q Productions
            </h1>
          </div>
        </Link>

        <div className="bg-transparent flex gap-4 justify-center items-center">
          {session && (
            <Link
              href="/planetqproductions"
              className="bg-transparent text-md font-bold hover:underline sm:text-2xl"
            >
              Add Music
            </Link>
          )}
          {session && (
            <button
              className="text-white text-md font-bold ring-white ring-1 rounded-lg px-2 hover:underline hover:ring-2 sm:text-2xl"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
          {!session && (
            <button className="text-white text-md font-bold ring-white ring-1 rounded-lg px-2 hover:underline hover:ring-2 sm:text-2xl" onClick={() => router.push("/login")} >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}
