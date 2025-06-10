export interface IUser {
  idUser: number;
  uuid: string;
  nama: string;
  email: string;
  password: string;
  hp: string;
  alamat: string;
  profile: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface IHewan {
  idHewan: number;
  uuid: string;
  berat: string;
  umur: number;
  harga: number;
  kategori: string;
  deskripsi: string;
  foto: string;
  statusHewan: string;
  penjual: number;
  idPenjual: number;
  createdAt: string;
  updatedAt: string;
}
