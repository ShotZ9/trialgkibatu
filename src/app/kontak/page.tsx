"use client";

import Banner from "@/components/Banner";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const KontakPage = () => {
    return (
        <div>
            <Banner title="Kontak Kami" />
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-6">Kontak Kami</h1>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Informasi Kontak */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <FaMapMarkerAlt className="text-gray-800 text-xl" />
                            <p className="text-lg">
                                <strong>Alamat</strong>
                                <br /> Jl. Sudarno No.16, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur 65311
                            </p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <FaPhone className="text-gray-800 text-xl" />
                            <p className="text-lg">
                                <strong>Telepon</strong>
                                <br /> 0341-591210
                                <br /> 081233049859 (Sekretariat Gereja - Emmy)
                            </p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-gray-800 text-xl" />
                            <p className="text-lg">
                                <strong>Email</strong>
                                <br /> gkibatu@gmail.com
                            </p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <FaBriefcase className="text-gray-800 text-xl" />
                            <p className="text-lg">
                                <strong>Jadwal Kantor</strong>
                                <br /> Rabu – Senin: Pk. 08.00 – 16.00
                                <br /> Selasa: Sekretariat Libur
                            </p>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="GKI Batu Location"
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.720122482021!2d112.5191475!3d-7.8734653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78873301cd1761%3A0xee2c9b09a5853b0a!2sGKI%20Batu!5e0!3m2!1sen!2sid!4v1706523040975!5m2!1sen!2sid"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KontakPage;
