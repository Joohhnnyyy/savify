import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  const formatText = (text: string) => {
    // Split text into lines for processing
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentSection: React.ReactNode[] = [];
    let inList = false;
    let listItems: React.ReactNode[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-4 ml-4">
            {listItems}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushSection = () => {
      if (currentSection.length > 0) {
        elements.push(
          <div key={`section-${elements.length}`} className="mb-4">
            {currentSection}
          </div>
        );
        currentSection = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Skip empty lines but add spacing
      if (!trimmedLine) {
        if (inList) {
          flushList();
        }
        if (currentSection.length > 0) {
          flushSection();
        }
        return;
      }

      // Handle bold headers (lines starting with **)
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        if (inList) flushList();
        if (currentSection.length > 0) flushSection();
        
        const headerText = trimmedLine.slice(2, -2).trim();
        elements.push(
          <h3 key={`header-${index}`} className="text-lg font-bold text-gray-900 mb-3 mt-6 first:mt-0">
            {headerText}
          </h3>
        );
        return;
      }

      // Handle bullet points (lines starting with * or •)
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('• ')) {
        if (currentSection.length > 0) flushSection();
        
        const bulletText = trimmedLine.slice(2).trim();
        const formattedBullet = formatInlineText(bulletText);
        
        listItems.push(
          <li key={`bullet-${index}`} className="text-gray-700 leading-relaxed">
            {formattedBullet}
          </li>
        );
        inList = true;
        return;
      }

      // Handle regular text
      if (inList) flushList();
      
      const formattedLine = formatInlineText(trimmedLine);
      currentSection.push(
        <p key={`line-${index}`} className="text-gray-700 leading-relaxed mb-2">
          {formattedLine}
        </p>
      );
    });

    // Flush any remaining content
    if (inList) flushList();
    if (currentSection.length > 0) flushSection();

    return elements;
  };

  const formatInlineText = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let currentText = text;
    let partIndex = 0;

    // Handle bold text (**text**)
    const boldRegex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(currentText)) !== null) {
      // Add text before the bold part
      if (match.index > lastIndex) {
        parts.push(currentText.slice(lastIndex, match.index));
      }
      
      // Add the bold part
      parts.push(
        <strong key={`bold-${partIndex++}`} className="font-semibold text-gray-900">
          {match[1]}
        </strong>
      );
      
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < currentText.length) {
      parts.push(currentText.slice(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  return (
    <div className={`formatted-text ${className}`}>
      {formatText(text)}
    </div>
  );
};