import React, { useState, useEffect, useRef } from 'react';
//@ts-ignore
import grapesjs from 'grapesjs';
//@ts-ignore
import gjsPresetWebPage from 'grapesjs-preset-webpage';
import testimonial from '../components/testimonials';
import firstNavbar from '../components/navbars/firstNavbar';
import secondNavbar from '../components/navbars/secondNavbar';
import thirdNavbar from '../components/navbars/thirdNavbar';
import firstHeroSection from '../components/heroSection/firstHeroSection';
import secondHeroSection from '../components/heroSection/secondHeroSection';
import thePlugin from 'grapesjs-plugin-export';
import CodePreview from '../CodePreview';

export default function Editor() {
  const [editor, setEditor] = useState<any>(null);
  const [copiedDesign, setCopiedDesign] = useState({ html: '', css: '' });
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      plugins: [
        firstNavbar,
        secondNavbar,
        thirdNavbar,
        firstHeroSection,
        secondHeroSection,
        testimonial,
        thePlugin,
      ],
      pluginsOpts: {
        gjsPresetWebPage: {},
        firstNavbar: {},
        secondNavbar: {},
        thirdNavbar: {},
        firstHeroSection: {},
        secondHeroSection: {},
        testimonial: {},
        thePlugin: {},
      },
    });
    setEditor(editor);
  }, []);
  const saveToLocalStorage = () => {
    // Get the HTML and CSS code from the editor
    const htmlCode = editor.getHtml();
    const cssCode = editor.getCss();

    // Save the entire design to local storage
    const design = JSON.stringify({ html: htmlCode, css: cssCode });
    localStorage.setItem('grapesjsDesign', design);

    // Set the copied design in state
    setCopiedDesign({ html: htmlCode, css: cssCode });
    alert('Your design has been saved to local storage!');
  };
  return (
    <div>
      <button
        className="border border-white p-2 m-2 text-white"
        onClick={saveToLocalStorage}
      >
        Save Your Design
      </button>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <CodePreview design={copiedDesign} screenSize="desktop" />
        <CodePreview design={copiedDesign} screenSize="tablet" />
        <CodePreview design={copiedDesign} screenSize="mobile" />
      </div> */}
      <div id="editor" />;
    </div>
  );
}
