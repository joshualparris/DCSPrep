'use client';

import { useState } from 'react';

type Episode = {
  id: string;
  title: string;
  show: string;
  tags: string[];
};

const episodes: Episode[] = [
  { id: '7vhbck9c1xMES9C5EOwkir', title: 'IT Support vs Help Desk', show: 'Protek IT Insights', tags: ['support'] },
  { id: '2Ph4l9QuJJpQ4WaI5BjXsS', title: 'Building a Secure Microsoft-First MSP', show: 'M365.FM', tags: ['m365', 'security', 'msp'] },
  { id: '7M2qm2siWBeoUr84gc3979', title: 'IT Helpdesk Best Practices That Actually Work', show: 'Crescent Tek Connections', tags: ['helpdesk', 'support'] },
  { id: '1jdb2F0Z8OzpccBDgARbtW', title: 'Kaseya AI Workforce, CyberFOX DNS & RSA Threat Data', show: 'MSP Success', tags: ['msp', 'dns', 'security'] },
  { id: '4Nh1gsH7YSmzDgjJhKloHE', title: 'Most Businesses Get Microsoft 365 Completely Wrong', show: 'Why IT Matters', tags: ['m365'] },
  { id: '185AyNHP1CVdAqr73Uy2Ce', title: 'AI Meets Security', show: 'M365.FM', tags: ['security', 'ai', 'm365'] },
  { id: '3AL1oz0YHZy56ICxuSH41T', title: 'SCCM vs Intune — Simply Explained', show: 'M365.FM', tags: ['intune', 'endpoint'] },
  { id: '5PEmrm2Bfv6XQYn4IjhC18', title: 'The Invisible Employee: Is Your Next Hire an AI Agent?', show: 'M365.FM', tags: ['ai', 'm365'] },
  { id: '2Gc2yYimaZFe0gLuTp4XwC', title: 'Microsoft Intune — Simply Explained', show: 'M365.FM', tags: ['intune', 'endpoint'] },
  { id: '62D8ZV1AH8GtnrMQg4nNuA', title: 'Kaseya Connect 2026: Jim Lippie', show: 'MSP Radio', tags: ['kaseya', 'msp'] },
  { id: '6lnN5M2bDXQ9YnjIWrGVcm', title: 'Entra PIM Explained', show: 'M365.FM', tags: ['entra', 'security', 'm365'] },
  { id: '4sI1gTDgc6r49pcciZTEnc', title: 'DHCP — Someone Get Me an Address!', show: 'N Is For Networking', tags: ['dhcp', 'networking'] },
  { id: '32eyxQu1f7XMoEGzBrBAQK', title: 'Microsoft 365 Architecture', show: 'M365.FM', tags: ['m365', 'architecture'] },
  { id: '0XHOZZLfahnnDihjZWtXVT', title: 'Power Platform vs ServiceNow ITSM', show: 'M365.FM', tags: ['itsm', 'support'] },
  { id: '70kBvj9fUPSBNMuXAtP5p5', title: 'Windows 365 Updates for Admins', show: 'PortalFuse', tags: ['windows', 'intune'] },
  { id: '1l1TOs2sXfgP5CiOOh0196', title: 'Microsoft Entra and Microsoft Intune', show: 'IT Training', tags: ['entra', 'intune'] },
  { id: '6mPARqBJXEX6DpIJQsaeUc', title: 'Intune Security Misconfigurations', show: 'M365.FM', tags: ['intune', 'security'] },
  { id: '20dh505Cn0b8YAwfCDyxha', title: 'Modern Endpoint Management with Intune', show: 'IT Podcast', tags: ['intune', 'endpoint'] },
  { id: '7mijfkmvVElQVLyz5UYeHI', title: 'MSP Success Story: Long-Term Datto Partner', show: "Uncle Marv's IT Business Podcast", tags: ['datto', 'msp', 'backup'] },
  { id: '3hyKyjFBFLoEKIbx8X1arY', title: 'The Truth About Ticket Counts and RMM Necessity', show: 'All Things MSP', tags: ['rmm', 'tickets', 'msp'] },
  { id: '0PM1SM6u0GjPfr6lhrRuaO', title: 'Should You Migrate Your Email to Office 365?', show: 'IT Podcast', tags: ['m365', 'email'] },
  { id: '1bY6WIeHGCoMIEmWy8AroP', title: 'How Spotto Helps MSPs Scale Azure', show: 'MSP Podcast', tags: ['azure', 'msp'] },
  { id: '1EIcQVCJfsrIHRoNuGtF6v', title: 'Securing AI Agents with Standards You Already Have', show: 'Identity at the Center', tags: ['security', 'ai', 'identity'] },
  { id: '6eerklzBTVHQFJ21gNAmj8', title: 'Microsoft 365 Secure Operations', show: 'IT Podcast', tags: ['m365', 'security'] },
  { id: '4clUvRNOWBDuf9gnSRzJnt', title: 'Why Your Business Software Stack Needs a Cleanup', show: 'Managed & Secured', tags: ['msp', 'software'] }
];

function pickDifferent(currentIndex: number | null) {
  if (episodes.length < 2) return 0;
  let next = currentIndex ?? -1;
  while (next === currentIndex) next = Math.floor(Math.random() * episodes.length);
  return next;
}

export default function PodcastPlayer() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const current = currentIndex === null ? null : episodes[currentIndex];

  const choosePodcast = () => {
    const next = pickDifferent(currentIndex);
    setCurrentIndex(next);
    setOpen(true);
  };

  const openPlayer = () => {
    if (currentIndex === null) setCurrentIndex(pickDifferent(null));
    setOpen(true);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={openPlayer}
        className="fixed left-1/2 z-[100] -translate-x-1/2 rounded-full bg-slate-800 px-5 py-3 text-sm font-bold text-white shadow-xl hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
        aria-label="Open IT support podcasts"
      >
        🎧 Podcasts
      </button>
    );
  }

  return (
    <aside
      className="fixed left-1/2 z-[100] w-[min(620px,calc(100vw-16px))] -translate-x-1/2 rounded-2xl border border-slate-700 bg-slate-900 p-3 text-white shadow-2xl"
      style={{ bottom: 'max(8px, env(safe-area-inset-bottom))' }}
      aria-label="IT support podcast player"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wide text-indigo-300">DCSPrep · IT support podcast</div>
          <h2 className="mt-1 text-base font-bold leading-snug">{current?.title ?? 'Choose a podcast'}</h2>
          {current && (
            <p className="mt-1 text-xs text-slate-300">
              {current.show} · {current.tags.join(' · ')}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="h-10 w-10 shrink-0 rounded-full bg-slate-800 text-xl font-bold hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label="Close podcast player"
        >
          ×
        </button>
      </div>

      {current && (
        <iframe
          key={current.id}
          src={`https://open.spotify.com/embed/episode/${current.id}?theme=0`}
          title={`Spotify episode: ${current.title}`}
          width="100%"
          height="152"
          className="rounded-xl border-0 bg-slate-950"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={choosePodcast}
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          🎲 Different podcast
        </button>
        {current && (
          <a
            href={`https://open.spotify.com/episode/${current.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Open in Spotify ↗
          </a>
        )}
      </div>
      <p className="mt-2 text-[11px] text-slate-400">Playback starts only after you press play in Spotify.</p>
    </aside>
  );
}
