export const openExternalLink = (url: string, target = '_blank'): void => {
  if (typeof window !== 'undefined') {
    const a = document.createElement('a');
    a.href = url;
    a.target = target;
    a.rel = 'noopener noreferrer';
    a.click();
  }
};
