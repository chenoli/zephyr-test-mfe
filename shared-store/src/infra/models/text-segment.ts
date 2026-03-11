interface TextSegment {
  text: string;
  type: 'normal' | 'highlight' | 'link';
  href?: string;
}

export default TextSegment;
