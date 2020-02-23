import React, { useEffect, useState } from 'react';

function AnimateInOut({ shouldShow, children, inClass, outClass, className }) {
  const [shouldRender, setShouldRender] = useState(shouldShow);

  // This effect will run on every render when shouldShow has changed,
  // and if shouldShow is now true, then shouldRender should be true too
  useEffect(() => {
    if (shouldShow) setShouldRender(true);
  }, [shouldShow]);

  function handleAnimationEnd() {
    if (!shouldShow) setShouldRender(false);
  }

  const baseClassName = shouldShow ? inClass : outClass;
  const combinedClassNames = baseClassName + ' ' + className;

  return (
    shouldRender && (
      <div className={combinedClassNames} onAnimationEnd={handleAnimationEnd}>
        {children}
      </div>
    )
  );
}

export default AnimateInOut;
