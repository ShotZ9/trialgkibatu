"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BannerProps {
    title: string;
}

const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
];

const Banner = ({ title }: BannerProps) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-full h-[300px] overflow-hidden">
            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="w-full h-full"
            >
                {images.map((image, index) => {
                    const backgroundPositionY = `${50 + scrollY * 0.1}%`; // Efek parallax
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className="relative w-full h-[300px] bg-cover bg-center bg-gray-900"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundPositionY,
                                }}
                            >
                                {/* Layer Blur */}
                                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Overlay dan Title */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white z-[9998] animate-fadeInUp">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Banner;
