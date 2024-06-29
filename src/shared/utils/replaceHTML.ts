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
