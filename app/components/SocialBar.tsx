export default function SocialBar() {
  return (
    <section className="w-full py-6 bg-black border-t border-b border-gray-800 text-center reveal-section">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
        <a
          href="https://instagram.com/keegansicard"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
          aria-label="Instagram"
        >
          <img
            src="/social-instagram.svg"
            alt="Instagram"
            className="h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-gray-400 text-sm group-hover:text-primary transition-colors">
            Instagram
          </span>
        </a>
      </div>

      <p className="text-primary/80 text-sm font-medium mt-4 px-6">
        Your AI team doesn’t get tired. Doesn’t complain. Doesn’t ask for Fridays off.
      </p>
    </section>
  );
}
