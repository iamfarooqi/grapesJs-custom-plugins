import React, { useState, useEffect } from 'react';

const CodePreview = () => {
  const [screenSize, setScreenSize] = useState('desktop');
  const [design, setDesign] = useState<any>(null);

  useEffect(() => {
    // Fetch the saved design from local storage
    const savedDesign = localStorage.getItem('grapesjsDesign');

    if (savedDesign) {
      const parsedDesign = JSON.parse(savedDesign);
      console.log(parsedDesign.css);

      // Determine the screen size and set the design accordingly
      setDesign({
        html: parsedDesign.html,
        css: parsedDesign.css,
      });
    }
  }, [screenSize]);

  const onChangeScreenSize = (newScreenSize: string) => {
    setScreenSize(newScreenSize);
  };

  return (
    <div className="border bg-white border-white p-8 overflow-hidden">
      <h2 className="capitalize">Design Preview</h2>

      {/* Radio buttons for selecting different screen sizes */}
      <div>
        <label>
          <input
            type="radio"
            value="desktop"
            checked={screenSize === 'desktop'}
            onChange={() => onChangeScreenSize('desktop')}
          />
          Desktop
        </label>
        <label>
          <input
            type="radio"
            value="tablet"
            checked={screenSize === 'tablet'}
            onChange={() => onChangeScreenSize('tablet')}
          />
          Tablet
        </label>
        <label>
          <input
            type="radio"
            value="mobile"
            checked={screenSize === 'mobile'}
            onChange={() => onChangeScreenSize('mobile')}
          />
          Mobile
        </label>
      </div>

      {/* Render the design based on the selected screen size */}
      {design && (
        // <iframe
        //   title={`${screenSize} Preview`}
        //   style={{
        //     width:
        //       screenSize === 'desktop'
        //         ? '100%'
        //         : screenSize === 'tablet'
        //         ? '768px'
        //         : screenSize === 'mobile'
        //         ? '375px'
        //         : '100%', // Default to full width
        //     height: '400px', // Set the desired height
        //     border: '1px solid black',
        //   }}
        //   srcDoc={`${design.html}<style>${design.css}</style>`}
        // />
        <div
          style={{
            width:
              screenSize === 'desktop'
                ? '100%'
                : screenSize === 'tablet'
                ? '768px'
                : '375px',
            margin: '0 auto',
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: design.html }} />
          <style>{design.css}</style>
        </div>
      )}
    </div>
  );
};

export default CodePreview;
