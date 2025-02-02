import Image from "next/image";

const images = [
  "/images/hero.jpg",
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-semibold text-center mb-10">Galeri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
