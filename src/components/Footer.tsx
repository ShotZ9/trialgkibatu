import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} GKI Batu. All rights reserved.</p>
                <p className="text-xs mt-1">&quot;Menjadi gereja yang sehat, hangat, dan bersahabat&quot;</p>
                <div className="flex justify-center gap-4 mt-3">
                    <a href="https://www.instagram.com/gkibatu" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="opacity-80 hover:opacity-100" />
                    </a>
                    <a href="https://www.youtube.com/@gkibatu" target="_blank" rel="noopener noreferrer">
                        <Image src="/youtube.svg" alt="YouTube" width={24} height={24} className="opacity-80 hover:opacity-100" />
                    </a>
                    <a href="https://www.facebook.com/gkibatu" target="_blank" rel="noopener noreferrer">
                        <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="opacity-80 hover:opacity-100" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
