export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <svg
        viewBox="0 0 300 600"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Phone Body */}
        <rect
          x="10"
          y="10"
          width="280"
          height="580"
          rx="40"
          fill="#1f2937"
          stroke="#374151"
          strokeWidth="2"
        />

        {/* Screen */}
        <rect
          x="20"
          y="30"
          width="260"
          height="540"
          rx="30"
          fill="#ffffff"
        />

        {/* Status Bar */}
        <rect x="30" y="40" width="240" height="20" fill="#f9fafb" />
        <text x="40" y="54" className="text-xs" fill="#6b7280">9:41</text>
        <circle cx="250" cy="50" r="3" fill="#4CAF50" />

        {/* App Header */}
        <rect x="30" y="70" width="240" height="50" fill="#4CAF50" rx="10" />
        <text x="130" y="100" className="text-base font-bold" fill="#ffffff" textAnchor="middle">
          Feedii
        </text>

        {/* Food Image Placeholder */}
        <rect x="40" y="140" width="220" height="180" fill="#e5e7eb" rx="15" />
        <circle cx="150" cy="230" r="40" fill="#d1d5db" />
        <path
          d="M130 220 L150 240 L170 210"
          stroke="#9ca3af"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Scan Button */}
        <circle cx="150" cy="350" r="30" fill="#4CAF50" />
        <rect x="140" y="340" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="3" rx="3" />

        {/* Nutrition Cards */}
        <g>
          {/* Calories */}
          <rect x="40" y="400" width="100" height="60" fill="#fef3c7" rx="10" />
          <text x="90" y="425" className="text-xs font-bold" fill="#92400e" textAnchor="middle">
            Calories
          </text>
          <text x="90" y="445" className="text-lg font-bold" fill="#92400e" textAnchor="middle">
            450
          </text>

          {/* Protein */}
          <rect x="160" y="400" width="100" height="60" fill="#dbeafe" rx="10" />
          <text x="210" y="425" className="text-xs font-bold" fill="#1e3a8a" textAnchor="middle">
            Protein
          </text>
          <text x="210" y="445" className="text-lg font-bold" fill="#1e3a8a" textAnchor="middle">
            24g
          </text>
        </g>

        <g>
          {/* Carbs */}
          <rect x="40" y="480" width="100" height="60" fill="#fce7f3" rx="10" />
          <text x="90" y="505" className="text-xs font-bold" fill="#831843" textAnchor="middle">
            Carbs
          </text>
          <text x="90" y="525" className="text-lg font-bold" fill="#831843" textAnchor="middle">
            52g
          </text>

          {/* Fats */}
          <rect x="160" y="480" width="100" height="60" fill="#d1fae5" rx="10" />
          <text x="210" y="505" className="text-xs font-bold" fill="#065f46" textAnchor="middle">
            Fats
          </text>
          <text x="210" y="525" className="text-lg font-bold" fill="#065f46" textAnchor="middle">
            18g
          </text>
        </g>

        {/* Home Indicator */}
        <rect x="120" y="565" width="60" height="5" rx="2.5" fill="#d1d5db" />
      </svg>
    </div>
  )
}
