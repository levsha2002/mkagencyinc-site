import { getDict } from '@/lib/dictionaries';
import { team } from '@/lib/team-data';
import TeamNav from '@/components/TeamNav';

export default function TeamSection({ lang }: { lang: string }) {
  const t = getDict(lang).team;

  return (
    <section className="team-body" id="team">
      <div className="container">
        <p className="kicker">{t.previewKicker}</p>
        <h2>{t.previewTitle}</h2>
      </div>
      <div className="container team-layout">
        <TeamNav members={team} />
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.slug} id={m.slug} className="agent-card">
              <img src={m.photo} alt={m.name} className="agent-photo" />
              <div className="agent-info">
                <h3>{m.name}</h3>
                <p className="agent-role">{m.role}</p>
                {m.quote && <blockquote className="agent-quote">&ldquo;{m.quote}&rdquo;</blockquote>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
