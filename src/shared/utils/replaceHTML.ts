export const replaceHTML = (htmlString: string, src: string[]) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(htmlString, 'text/html');

  let imgElements = doc.querySelectorAll('img');
  imgElements.forEach((img, index) => {
    img.src = src[index];
    img.alt = 'photo-in-text-cloudfront-src';
  });

  return doc.body.innerHTML;
};

export const extractSrc = (tag: string): boolean => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(tag, 'text/html');
  let imgElements = doc.querySelectorAll('img');
  let hasUndefinedSrc = false;

  imgElements.forEach(img => {
    if (img.getAttribute('src') === 'undefined') {
      hasUndefinedSrc = true;
    }
  });

  return !hasUndefinedSrc;
};
