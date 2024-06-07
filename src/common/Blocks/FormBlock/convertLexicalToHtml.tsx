type LexicalNode = {
  type: string;
  text?: string;
  children?: LexicalNode[];
  url?: string;
  detail?: number;
  format?: number;
  mode?: string;
  style?: string;
  [key: string]: unknown;
};

export function convertLexicalToHTML(node: LexicalNode) {
  if (!node) return '';

  // Handle text nodes
  if (node.type === 'text') {
    return node.text;
  }

  // Handle paragraph and other nodes
  let html = '';

  if (node.type === 'paragraph') {
    html += '<p>';
  }

  // Recursively process child nodes
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach((child) => {
      html += convertLexicalToHTML(child);
    });
  }

  if (node.type === 'paragraph') {
    html += '</p>';
  }

  return html;
}
