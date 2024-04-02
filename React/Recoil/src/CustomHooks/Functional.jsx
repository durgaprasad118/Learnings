import React, { useEffect, useState } from "react";

function FunctioalC() {
  const [a, setA] = useState("");
  useEffect(() => {
    console.log("initial render");
    console.log(a);
    return () => {
      console.log("return thng called");
    };
  }, [a]);

  return (
    <div>
      <input
        type="text"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border border-black px-3"
        placeholder="test"
      />
    </div>
  );
}

export { FunctioalC };
