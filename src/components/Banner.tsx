interface BannerProps {
    title: string;
    image: string; // Path to the image
}

const Banner = ({ title, image }: BannerProps) => {
    return (
        <div
            className="relative w-full h-[300px] overflow-hidden"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
            }}
        >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;