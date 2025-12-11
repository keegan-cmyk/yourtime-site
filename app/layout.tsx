import "./globals.css";

export const metadata = {
  title: "Your Time — AI Workforce",
  description: "Automate your business. Reclaim your time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">

        {/* Cursor Glow */}
        <div
          id="cursor-glow"
          className="fixed w-40 h-40 rounded-full pointer-events-none opacity-20 bg-primary blur-3xl transition-transform duration-200 -translate-x-1/2 -translate-y-1/2"
        ></div>

        {/* Particle Field */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="particles"></div>
        </div>

        {/* Scroll Reveal Engine */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observer = new IntersectionObserver((entries)=>{
                entries.forEach(entry=>{
                  if(entry.isIntersecting){
                    entry.target.classList.add('reveal-visible');
                  }
                });
              }, { threshold: 0.1 });

              document.querySelectorAll('.reveal-section')
                .forEach(el => observer.observe(el));

              document.addEventListener('mousemove', (e) => {
                const glow = document.getElementById('cursor-glow');
                if (glow) {
                  glow.style.left = e.clientX + 'px';
                  glow.style.top = e.clientY + 'px';
                }
              });

              document.addEventListener("mousemove", (event) => {
                document.querySelectorAll(".parallax").forEach((layer) => {
                  const depth = layer.getAttribute("data-depth");
                  const moveX = (event.clientX - window.innerWidth / 2) * depth;
                  const moveY = (event.clientY - window.innerHeight / 2) * depth;
                  layer.style.transform = \`translate3d(\${moveX}px, \${moveY}px, 0)\`;
                });
              });
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
