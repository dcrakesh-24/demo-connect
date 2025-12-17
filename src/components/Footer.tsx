const footerLinks = [
  ["About", "Accessibility", "Help Center"],
  ["Privacy & Terms", "Ad Choices", "Advertising"],
  ["Business Services", "Get the LinkedIn app", "More"],
];

export const Footer = () => {
  return (
    <footer className="mt-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        {footerLinks.flat().map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-primary hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 mt-3 text-xs text-muted-foreground">
        <span className="font-bold text-primary">Linked</span>
        <span className="bg-primary text-primary-foreground px-1 rounded text-[10px] font-bold">in</span>
        <span>Corporation © 2024</span>
      </div>
    </footer>
  );
};
