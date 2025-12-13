const links = [
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#workflows", label: "Workflows" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export default function QuickNav() {
  return (
    <nav className="fixed bottom-4 inset-x-0 flex justify-center z-40 pointer-events-none">
      <div className="pointer-events-auto flex gap-2 bg-gray-900/90 border border-gray-700 rounded-full px-4 py-2 shadow-lg backdrop-blur">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs md:text-sm px-3 py-1 rounded-full text-gray-300 hover:text-black hover:bg-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
