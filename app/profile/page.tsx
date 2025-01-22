"use client";

import axios from "axios";
import { NavButton } from "@/components/button/profileButton";
import Link from "next/link";
import { removeCookie } from "@/lib/client-cookies";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter()


  const handleLogout = () => {
    removeCookie("token")
    removeCookie("id")
    removeCookie("name")
    removeCookie("role")
    router.replace(`/login`)
    };

  return (
    <div className="w-screen h-screen bg-login bg-cover text-center px-32 py-14">
      <div className="flex">
        <Link href={"/dashboard"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <h1 className="w-fit h-fit mx-auto uppercase text-4xl font-bold tracking-widest mb-14">
          Profile
        </h1>
      </div>
      <div className="w-full flex gap-5">
        <div className="w-1/3 h-full shadow-lg bg-slate-100 flex flex-col p-8 gap-5 rounded-3xl">
          <NavButton
            type="button"
            className=""
            onClick={() => {
              window.location.href = "../profile";
            }}
          >
            Profile
          </NavButton>
          <NavButton
            type="button"
            className=""
            onClick={() => {
              window.location.href = "../password";
            }}
          >
            Password
          </NavButton>

          <button onClick={handleLogout} className="mt-96 bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
            Log Out
          </button>
        </div>

        <div className="w-2/3 shadow-lg bg-slate-100 flex flex-col p-8 gap-5 rounded-3xl">wd</div>
      </div>
    </div>
  );
};

export default ProfilePage;
