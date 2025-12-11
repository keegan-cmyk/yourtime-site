import Image from "next/image";

export default function SocialBar() {
  return (
    <div className="flex gap-4 items-center">
      <img src="/social-instagram.svg" className="w-6 opacity-70 hover:opacity-100" />
      <img src="/social-tiktok.svg" className="w-6 opacity-70 hover:opacity-100" />
      <img src="/social-youtube.svg" className="w-7 opacity-70 hover:opacity-100" />
      <img src="/social-x.svg" className="w-6 opacity-70 hover:opacity-100" />
    </div>
  );
}
