"use client";

import Banner from "@/components/Banner";

const JadwalPage = () => {
  const jadwal = [
    { hari: "Minggu", waktu: "07.00 WIB", acara: "Kebaktian Umum 1" },
    { hari: "Minggu", waktu: "09.00 WIB", acara: "Kebaktian Umum 2" },
    { hari: "Minggu", waktu: "07.00 WIB", acara: "Kebaktian Anak dan Pra Remaja" },
    { hari: "Minggu", waktu: "17.00 WIB", acara: "Latihan Paduan Suara Serafim" },
    { hari: "Sabtu", waktu: "18.00 WIB", acara: "Persekutuan Pemuda Remaja" },
    { hari: "Jumat", waktu: "18.00 WIB", acara: "Persiapan Ibadah GKI Batu" },
    { hari: "Selasa", waktu: "18.00 WIB", acara: "Persiapan Guru Sekolah Minggu" },

    // Jadwal Hari Rabu per Minggu
    { hari: "Rabu (Minggu 1)", waktu: "17.00 WIB", acara: "Persekutuan Komisi Dewasa Kaum Wanita" },
    { hari: "Rabu (Minggu 2)", waktu: "17.00 WIB", acara: "Persekutuan Keluarga" },
    { hari: "Rabu (Minggu 3)", waktu: "17.00 WIB", acara: "Persekutuan Sektor (bergantian dengan Komisi Pria)" },
    { hari: "Rabu (Minggu 4)", waktu: "17.00 WIB", acara: "Pemahaman Alkitab (Onsite jika Pdt. Dwi Santoso, Online jika Pak Bernard R.)" },
  ];

  return (
    <div>
      <Banner title="Sejarah GKI Batu" />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Sejarah GKI Batu</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="p-3">Hari</th>
                <th className="p-3">Waktu</th>
                <th className="p-3">Acara</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 transition`}
                >
                  <td className="p-3">{item.hari}</td>
                  <td className="p-3">{item.waktu}</td>
                  <td className="p-3">{item.acara}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JadwalPage;
