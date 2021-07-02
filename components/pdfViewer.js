// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Create new plugin instance

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
      <Viewer
        fileUrl='./sample.pdf'
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      />
    </Worker>
  );
};

export default PDFViewer;
