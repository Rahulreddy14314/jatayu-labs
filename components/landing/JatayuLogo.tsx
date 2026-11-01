'use client';

import { KritamEmblem, KritamLogo } from './KritamLogo';

export { KritamLogo, KritamEmblem };

export function JatayuLogo({ className = "w-7 h-7" }: { className?: string }) {
  return <KritamEmblem className={className} />;
}

export default JatayuLogo;
