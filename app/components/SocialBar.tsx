export default function SocialBar() {
  const socials = [
    { name: "Instagram", icon: "/social-instagram.svg", url: "https://instagram.com" },
    { name: "TikTok", icon: "/social-tiktok.svg", url: "https://tiktok.com" },
    { name: "YouTube", icon: "/social-youtube.svg", url: "https://youtube.com" },
    { name: "X", icon: "/social-x.svg", url: "https://x.com" },
  ];

  return (
    <section className="w-full py-6 bg-black border-t border-b border-gray-800 text-center reveal-section">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-80 hover:opacity-100 transition-opacity">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-gray-400 text-sm group-hover:text-primary transition-colors">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* FUNNY TAGLINE #14 */}
      <p className="text-primary/80 text-sm font-medium mt-4 px-6">
        Your AI team doesn’t get tired. Doesn’t complain. Doesn’t ask for Fridays off.
      </p>
    </section>
  );
}
