import React from 'react';
import CodePreview from './CodePreview';

interface MyComponentProps {
  // Define your component props here
}

const CodeIndex: React.FC<MyComponentProps> = (props) => {
  return (
    <div className="bg-white border w-[2500px]">
      <div className="flex w-full overflow-scroll">
        {/* <CodePreview screenSize="desktop" />
        <CodePreview screenSize="tablet" />
        <CodePreview screenSize="mobile" /> */}
      </div>
    </div>
  );
};

export default CodeIndex;
