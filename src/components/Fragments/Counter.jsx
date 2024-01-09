import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="flex items-center gap-5">
        <h1>{count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}
