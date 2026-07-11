'use client';

import { team } from '@/lib/team-data';
import { PHONE_TEL } from '@/lib/dictionaries';

// Exclude the owner from this row — this is meant for "pick an agent to text",
// and Mikhail is already featured elsewhere on the site.
const AGENTS = team.filter((m) => m.slug !== 'mikhail-kozlov');

export default function AgentAvatars() {
  return (
    <div className="agent-avatars">
      {AGENTS.map((agent) => {
        const body = encodeURIComponent(
          `Hi! I'd like to talk to ${agent.name} about my insurance.`
        );
        return (
          <a
            key={agent.slug}
            href={`sms:${PHONE_TEL}?body=${body}`}
            className="agent-avatar"
            title={`Text ${agent.name}`}
          >
            <img src={agent.photo} alt={agent.name} />
            <span>{agent.name.split(' ')[0]}</span>
          </a>
        );
      })}
    </div>
  );
}
