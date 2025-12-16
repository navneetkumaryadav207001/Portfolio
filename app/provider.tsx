// app/providers.tsx
"use client";

import AnimatedCursor from "react-animated-cursor";

export default function Providers() {
  return (
<AnimatedCursor
  innerSize={18}
  outerSize={21}
  innerScale={1}
  outerScale={1.6}
  outerAlpha={0}
  innerStyle={{
    backgroundColor: "#ffffff",
    mixBlendMode: "difference",
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 1)"
  }}
  outerStyle={{
    border: "1.5px solid #ffffff",
    mixBlendMode: "difference",
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 1)"
  }}
/>
  );
}
