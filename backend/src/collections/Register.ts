import { CollectionConfig } from "payload/types";

const Register: CollectionConfig = {
  slug: "register",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "nama",
      label: "Nama",
      type: "text",
      required: true,
    },
    {
      name: "umur",
      label: "Umur",
      type: "number",
      required: true,
    },
    {
      name: "jenisKelamin",
      label: "Jenis Kelamin",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "asalSekolah",
      label: "Asal Sekolah",
      type: "text",
      required: true,
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        { label: "Waiting", value: "waiting" },
        { label: "Rejected", value: "rejected" },
        { label: "Accepted", value: "accepted" },
      ],
      defaultValue: "waiting",
      required: true,
    },
    {
      name: "tanggalPendaftaran",
      label: "Tanggal Pendaftaran",
      type: "date",
      required: true,
    },
  ],
};

export default Register;
