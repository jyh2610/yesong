'use client';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export function ShowPDF({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <iframe
        style={{
          width: '200%',
          height: '1200px',
          transform: 'scale(0.8)',
          transformOrigin: '0 0',
          border: 'none'
        }}
        src="https://www.longtermcare.or.kr/npbs/e/b/201/npeb201m01.web?menuId=npe0000000080&prevPath=/npbs/e/b/101/npeb101m01.web"
      />
      {/* <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document> */}
    </div>
  );
}
