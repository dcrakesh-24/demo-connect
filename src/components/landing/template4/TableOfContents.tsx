import { useEffect, useState } from "react";
import type { TableOfContentsItem } from "@/data/landing/template4";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  activeSectionId?: string;
}

export const TableOfContents = ({ items, activeSectionId }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string | undefined>(activeSectionId);

  useEffect(() => {
    if (activeSectionId) {
      setActiveId(activeSectionId);
    }
  }, [activeSectionId]);

  // Scroll spy: detect which section is currently in view
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header + margin
      let currentSection: string | undefined = undefined;
      let minDistance = Infinity;

      // Find the section whose top is closest to but above the scroll position
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const elementTop = element.offsetTop;
          const distance = scrollPosition - elementTop;
          
          // If section is above scroll position and closer than previous
          if (distance >= -50 && distance < minDistance) {
            minDistance = distance;
            currentSection = item.id;
          }
        }
      });

      // If we're at the very top, use first section
      if (scrollPosition < 100) {
        currentSection = items[0]?.id;
      }

      // Only update if we found a section
      if (currentSection) {
        setActiveId(currentSection);
      }
    };

    // Wait a bit for DOM to be ready, then do initial check
    const timeoutId = setTimeout(() => {
      updateActiveSection();
    }, 200);

    // Throttle scroll events for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const handleClick = (item: TableOfContentsItem) => {
    setActiveId(item.id);
    const element = document.getElementById(item.id);
    if (element) {
      // Add offset for header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="pr-4">
        <h3 className="text-sm font-bold text-gray-900 mb-4">In this post</h3>
        <ul className="space-y-3">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item)}
                  className={`text-left text-sm transition-colors w-full ${
                    isActive
                      ? 'text-green-600 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="flex items-start gap-2">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isActive ? 'bg-green-600' : 'bg-gray-400'
                      }`}
                    />
                    <span className="leading-relaxed">{item.text}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

