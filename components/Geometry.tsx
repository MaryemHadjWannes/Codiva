/** Decorative line drawings, kept as vectors for crisp, lightweight rendering. */
export function Geometry({
  kind = "hero",
}: {
  kind?: "hero" | "web" | "software" | "blockchain";
}) {
  if (kind === "hero")
    return (
      <svg
        viewBox="0 0 560 620"
        fill="none"
        className="geometry hero-geometry"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="plane"
            x1="100"
            y1="0"
            x2="420"
            y2="540"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity=".14" />
            <stop offset="1" stopColor="currentColor" stopOpacity=".025" />
          </linearGradient>
        </defs>
        <g
          stroke="currentColor"
          opacity=".16"
          strokeWidth=".7"
          strokeDasharray="3 4"
        >
          <path d="M90 40v530M470 40v530M32 140h490M32 535h490" />
        </g>
        <g stroke="var(--gold)" strokeWidth="1">
          <ellipse
            cx="292"
            cy="300"
            rx="196"
            ry="270"
            transform="rotate(-14 292 300)"
          />
          <circle cx="383" cy="54" r="3" fill="var(--gold)" />
          <circle cx="377" cy="561" r="3" fill="var(--gold)" />
        </g>
        <ellipse
          cx="283"
          cy="275"
          rx="264"
          ry="131"
          transform="rotate(-43 283 275)"
          stroke="currentColor"
          strokeOpacity=".55"
          strokeDasharray="2 5"
        />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M60 ${181 + i * 137} L309 ${89 + i * 137} Q320 ${85 + i * 137} 334 ${90 + i * 137} L504 ${153 + i * 137} Q526 ${162 + i * 137} 505 ${171 + i * 137} L261 ${267 + i * 137} Q247 ${272 + i * 137} 233 ${267 + i * 137} L61 ${201 + i * 137} Q39 ${192 + i * 137} 60 ${181 + i * 137}Z`}
            fill="url(#plane)"
            stroke="currentColor"
            strokeOpacity=".7"
          />
        ))}
        <g stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
          <path d="M166 174 381 95 381 215 166 296Z M166 195 381 116 M184 210 278 176 278 239 184 274Z M184 210 278 239 M184 274 278 176 M294 174 364 148 M294 187 364 161 M294 200 348 180 M294 215 364 189 364 204 294 230Z" />
          <circle cx="178" cy="183" r="2" fill="currentColor" />
          <circle cx="188" cy="179" r="2" fill="currentColor" />
          <circle cx="198" cy="175" r="2" fill="currentColor" />
          <path
            d="m130 350 62-35 56 15 101-41 57 34-102 37-56-30-56 49-62-29 M192 315v64 M248 330l56 30 M349 289l-45 71"
            strokeOpacity=".5"
          />
          {[
            [130, 350],
            [192, 315],
            [248, 330],
            [349, 289],
            [406, 323],
            [304, 360],
            [192, 379],
          ].map(([x, y]) => (
            <circle
              key={x + ":" + y}
              cx={x}
              cy={y}
              r="3.5"
              fill="currentColor"
            />
          ))}
        </g>
        <g stroke="var(--gold)" strokeWidth=".9" opacity=".85">
          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              d={`M112 ${474 - i * 3} C200 ${365 - i * 2} 223 ${560 - i * 4} 305 ${451 - i * 4} S416 ${439 - i * 3} 453 ${405 - i * 2}`}
            />
          ))}
        </g>
        <path d="m369 450 12 10-10 15" stroke="var(--gold)" strokeWidth="4" />
        <g stroke="currentColor" strokeOpacity=".4" strokeWidth=".7">
          <path d="M20 430h35m-17-17v34M472 84h40m-20-20v40M456 545h40m-20-20v40" />
        </g>
      </svg>
    );
  return (
    <svg
      className="geometry service-geometry"
      viewBox="0 0 280 185"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--gold)" strokeWidth="1">
        <circle cx={kind === "web" ? 185 : 126} cy="85" r="58" />
        <circle cx="88" cy="42" r="2.5" fill="var(--gold)" />
      </g>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
        {kind === "web" ? (
          <>
            <rect
              x="43"
              y="58"
              width="168"
              height="112"
              rx="5"
              fill="var(--bg)"
            />
            <path d="M43 78h168M60 94h80v58H60zM60 94l80 58m0-58-80 58M153 96h43m-43 12h43m-43 12h30M153 133h43v19h-43z" />
            {[56, 66, 76].map((x) => (
              <circle
                key={x}
                cx={x}
                cy="68"
                r="2"
                fill="var(--gold)"
                stroke="none"
              />
            ))}
          </>
        ) : kind === "software" ? (
          <>
            <path d="m65 70 75-36 75 36-75 36z" fill="var(--bg)" />
            <path
              d="m65 104 75-36 75 36-75 36zM65 138l75-36 75 36-75 36z"
              fill="var(--bg)"
            />
            <path d="m65 70 75 36 75-36M140 18v160" strokeDasharray="2 4" />
            <path d="M37 52H22v102m221-75v91h-28" />
          </>
        ) : (
          <>
            <path d="M140 70v50M96 144h88" strokeDasharray="2 4" />
            {[
              [104, 12],
              [38, 103],
              [172, 103],
            ].map(([x, y]) => (
              <g key={x} transform={`translate(${x} ${y})`} fill="var(--bg)">
                <path d="m0 20 34-20 34 20v40L34 80 0 60z" />
                <path d="m0 20 34 20 34-20M34 40v40" />
              </g>
            ))}
          </>
        )}
      </g>
    </svg>
  );
}
