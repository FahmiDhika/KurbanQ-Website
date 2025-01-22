import Link from "next/link";

export default function Register() {
  return (
    <div className="authbg min-w-full flex justify-center items-center min-h-dvh">
      <div className="bg-white w-4/6 py-10 px-6 rounded-3xl shadow-xl flex gap-5">
        <img src="registerloginimage.svg" alt="gambar hewan"/>

        <div className="w-1/2 justify-center">
          <h1 className="font-bold text-4xl w-full text-center ">Buat akun</h1>
          <input type="text" placeholder="Nama" />
        </div>
      </div>
    </div>
  );
}
