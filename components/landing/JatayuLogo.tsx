export function JatayuLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Aerodynamic Swept Wing */}
      <path
        d="M4 26L18 6L32 26L25.5 26L18 15.2L10.5 26L4 26Z"
        fill="#F4F4F0"
      />
      {/* Inner Electric Cobalt Flight Vector */}
      <path
        d="M12.5 26L18 18L23.5 26H19.5L18 23.5L16.5 26H12.5Z"
        fill="#668CFF"
      />
      {/* Precision Acid Lime Apex Spark */}
      <circle cx="18" cy="10.5" r="1.5" fill="#D4FF00" />
    </svg>
  );
}
