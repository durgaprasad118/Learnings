import { useEffect, useRef } from "react";

const Ref = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(ref.current?.innerText);
  }, []);
  return <div ref={ref}>Ref</div>;
};

export default Ref;
