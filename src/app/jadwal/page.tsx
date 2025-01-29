import Banner from "../../components/Banner";

export default function Jadwal() {
  return (
    <div>
      <Banner
        title="Jadwal Ibadah"
        image="https://via.placeholder.com/1500x500" // Ganti dengan URL gambar Anda
      />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Jadwal Ibadah</h2>
        <p className="mt-4">Jadwal ibadah akan segera tersedia.</p>
      </main>
    </div>
  );
}
