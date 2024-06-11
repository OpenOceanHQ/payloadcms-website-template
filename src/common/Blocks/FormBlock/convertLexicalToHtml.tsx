type LexicalNode = {
  type: string;
  text?: string;
  children?: LexicalNode[];
  url?: string;
  detail?: number;
  format?: number;
  mode?: string;
  style?: string;
  tag?: string;
  [key: string]: unknown;
};

export function convertLexicalToHTML(node: LexicalNode): string {
  if (!node) return '';

  // Handle text nodes
  if (node.type === 'text') {
    return node.text ?? '';
  }

  let html = '';

  // Handle paragraph, heading, and other nodes
  if (node.type === 'paragraph') {
    html += '<p>';
  } else if (node.type === 'heading' && node.tag) {
    html += `<${node.tag}>`;
  }

  // Recursively process child nodes
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach((child) => {
      html += convertLexicalToHTML(child);
    });
  }

  if (node.type === 'paragraph') {
    html += '</p>';
  } else if (node.type === 'heading' && node.tag) {
    html += `</${node.tag}>`;
  }

  return html;
}
