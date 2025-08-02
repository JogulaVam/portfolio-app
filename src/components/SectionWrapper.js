import React from 'react';
import { useInView } from 'react-intersection-observer';

// This component wraps each page/section.
// When it becomes visible in the viewport, it calls the `onVisible` function.
const SectionWrapper = ({ id, onVisible, children }) => {
  const { ref } = useInView({
    // `threshold` means the callback will trigger when 50% of the section is visible
    threshold: 0.5, 
    // `onChange` is the callback that fires when the in-view state changes
    onChange: (inView) => {
      if (inView) {
        onVisible(id);
      }
    },
  });

  return (
    <section 
      id={id} 
      ref={ref} 
      // This class ensures each section takes up the full screen and enables scroll snapping
      className="min-h-screen w-full flex items-center justify-center snap-start"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;