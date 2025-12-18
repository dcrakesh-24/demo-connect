interface ShareBarProps {
  links: {
    x?: string;
    facebook?: string;
    linkedin?: string;
    reddit?: string;
    whatsapp?: string;
  };
}

export const ShareBar = ({ links }: ShareBarProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
        Share
      </span>
      <div className="flex items-center gap-4">
        {links.x && (
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            aria-label="Share on X"
          >
            𝕏
          </a>
        )}
        {links.facebook && (
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg font-bold"
            aria-label="Share on Facebook"
          >
            f
          </a>
        )}
        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg font-bold"
            aria-label="Share on LinkedIn"
          >
            in
          </a>
        )}
        {links.reddit && (
          <a
            href={links.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            aria-label="Share on Reddit"
          >
            🔴
          </a>
        )}
        {links.whatsapp && (
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            aria-label="Share on WhatsApp"
          >
            💬
          </a>
        )}
      </div>
    </div>
  );
};

