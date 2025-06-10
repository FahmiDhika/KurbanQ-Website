"use client";

import { BASE_API_URL } from "@/global";
import { getCookie } from "@/lib/client-cookies";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
export interface IUser {
  nama: string;
  email: string;
  password: string;
  hp: string;
  alamat: string;
  profile: string;
  role: string;
}

export default function Register() {
  const [user, setUser] = useState<IUser>({
    nama: "",
    email: "",
    password: "",
    hp: "",
    alamat: "",
    profile: "",
    role: "Pelanggan", // Default role
  });

  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const TOKEN = getCookie("token") || "";
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const url = `${BASE_API_URL}/user/register/pelanggan`;
      const payload = {
        ...user,
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      };

      const { data } = await axios.post(url, JSON.stringify(payload), {
        headers,
      });

      if (data?.status) {
        toast.success(data?.message || "Registrasi berhasil", {
          containerId: "toastRegister",
        });
        setTimeout(() => router.push("/login"), 1000);
      } else {
        toast.warning(data?.message || "Registrasi gagal", {
          containerId: "toastRegister",
        });
      }
    } catch (error) {
      console.error("Register Error:", error);
      toast.error("Terjadi kesalahan pada server", {
        containerId: "toastRegister",
      });
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="w-screen h-screen bg-login bg-cover">
      <ToastContainer containerId="toastRegister" />
      <div className="w-full h-full bg-backdrop-login flex justify-center items-center p-5">
        <div className="w-3/4 bg-white shadow-2xl px-24 py-16 flex gap-10 rounded-3xl">
          <Image
            src="/registerloginimage.svg"
            width={500}
            height={500}
            alt="Register Image"
          />

          <div className="text-center py-6">
            <h1 className="text-4xl font-bold">DAFTAR AKUN BARU</h1>
            <p className="text-green">
              Buat akun kamu sekarang dan mulai bertransaksi!
            </p>
            <form
              ref={formRef}
              onSubmit={handleRegister}
              className="w-full my-10"
            >
              <div className="w-full my-4">
                {/* Nama */}
                <input
                  type="text"
                  name="nama"
                  value={user.nama}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="p-2 w-full border border-green rounded-full mb-3"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-2 w-full border border-green rounded-full mb-3"
                />

                {/* Password */}
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="p-2 w-full border border-green rounded-full mb-3"
                />

                {/* Nomor HP */}
                <input
                  type="tel"
                  name="hp"
                  value={user.hp}
                  onChange={handleChange}
                  placeholder="Nomor HP"
                  className="p-2 w-full border border-green rounded-full mb-3"
                />

                {/* Alamat */}
                <input
                  type="text"
                  name="alamat"
                  value={user.alamat}
                  onChange={handleChange}
                  placeholder="Alamat"
                  className="p-2 w-full border border-green rounded-full mb-3"
                />

                {/* Tombol Register */}
                <button
                  type="submit"
                  className="bg-green hover:bg-green text-white p-3 rounded-full w-full"
                >
                  REGISTER
                </button>
              </div>
            </form>
            <h2>Sudah punya akun?</h2>
            <Link href="/login">
              <button className="w-full bg-primary border border-green rounded-full p-3 mt-2 hover:bg-green-200">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
