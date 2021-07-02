import React from 'react';
import dynamic from 'next/dynamic';
const PDFViewer = dynamic(() => import('../components/pdfViewer'), {
  ssr: false,
});

const viewPdf = () => {
  return (
    <div>
      <h1>Test 1</h1>
      <PDFViewer />
    </div>
  );
};

export default viewPdf;
