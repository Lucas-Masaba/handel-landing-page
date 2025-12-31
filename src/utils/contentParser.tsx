import React from 'react';

export interface ParsedContent {
  type: 'heading' | 'paragraph' | 'bullet' | 'subBullet';
  text: string;
}

/**
 * Parses structured text content into hierarchical elements:
 * - Headings: Lines starting with "a. ", "b. ", etc.
 * - Bullets: Lines starting with "•"
 * - Sub-bullets: Lines starting with "-"
 * - Paragraphs: Regular text
 */
export const parseDescription = (description: string): ParsedContent[] => {
  const lines = description.split('\n');
  const parsed: ParsedContent[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    
    if (!trimmed) continue;

    // Check for section headings (a., b., c., etc.)
    if (/^[a-z]\.\s/.test(trimmed)) {
      parsed.push({ type: 'heading', text: trimmed.substring(3) });
    }
    // Check for main bullet points (•)
    else if (trimmed.startsWith('•')) {
      parsed.push({ type: 'bullet', text: trimmed.substring(1).trim() });
    }
    // Check for sub-bullets (- after a space or at start)
    else if (/^\s*-\s/.test(trimmed) || trimmed.startsWith('-')) {
      parsed.push({ type: 'subBullet', text: trimmed.replace(/^\s*-\s*/, '') });
    }
    // Regular paragraphs
    else {
      parsed.push({ type: 'paragraph', text: trimmed });
    }
  }

  return parsed;
};

/**
 * Renders parsed content with proper styling and hierarchy
 */
export const ContentRenderer: React.FC<{ content: ParsedContent[] }> = ({ content }) => {
  return (
    <div className="space-y-3">
      {content.map((item, index) => {
        switch (item.type) {
          case 'heading':
            return (
              <h3 
                key={index} 
                className="text-lg font-bold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] mt-6 first:mt-0 text-justify"
              >
                {item.text}
              </h3>
            );
          
          case 'bullet':
            return (
              <div key={index} className="flex gap-2 ml-4">
                <span className="text-[var(--brand-accent-500)] flex-shrink-0">•</span>
                <p className="text-base text-gray-700 dark:text-slate-300 text-justify flex-1">
                  {item.text}
                </p>
              </div>
            );
          
          case 'subBullet':
            return (
              <div key={index} className="flex gap-2 ml-12">
                <span className="text-[var(--brand-accent-500)] flex-shrink-0">-</span>
                <p className="text-sm text-gray-600 dark:text-slate-400 text-justify flex-1">
                  {item.text}
                </p>
              </div>
            );
          
          case 'paragraph':
          default:
            return (
              <p 
                key={index} 
                className="text-base text-gray-700 dark:text-slate-300 text-justify"
              >
                {item.text}
              </p>
            );
        }
      })}
    </div>
  );
};
