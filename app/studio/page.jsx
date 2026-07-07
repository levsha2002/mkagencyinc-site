"use client";

import { useState } from "react";

const GENDERS = ["Man", "Woman", "Couple"];
const SCENES = {
  "Professional agent": "a {g}, age {age}, friendly professional insurance agent in a bright modern office, warm confident smile, business attire, natural daylight, photoreal, trustworthy",
  "Happy client": "a {g}, age {age}, a relieved happy insurance client at home, warm genuine smile, cozy bright living room, photoreal, natural light",
  "Family at home": "a happy multi-generational family in front of a nice Florida home, warm golden hour light, photoreal, reassuring and safe mood",
  "Hurricane / storm": "a Florida single-family home as a hurricane storm approaches, dark dramatic clouds, palm trees bending in wind, cinematic, photoreal, no people, tense but not graphic",
  "Car accident aftermath": "a calm {g}, age {age}, standing beside a car with a minor fender bender on a sunny street, phone to ear looking relieved, no injuries, no gore, soft daylight, hopeful mood, photoreal",
  "Small business owner": "a {g}, age {age}, proud small business owner standing in their shop or storefront, warm confident smile, photoreal, natural light",
  "Hero: Hurricane damage": "wide cinematic photo of a Florida residential street the morning after a hurricane, downed palm fronds, roof tarps, dramatic sky clearing, no visible people, no gore, editorial insurance-ad style, photoreal, 16:9",
  "Hero: Storm-chaser contractor fraud": "a stranger in a work vest knocking on a Florida homeowner's front door holding a clipboard, homeowner visible through a slightly open door looking wary, daylight, tense but not scary, editorial photoreal style, 16:9",
  "Hero: Underinsured home": "a modest Florida single-family home with visible storm damage on the roof, moody overcast sky, no people, conveys financial vulnerability without being graphic, photoreal, 16:9",
  "Hero: Flood water street": "a quiet Florida suburban street with several inches of floodwater reflecting the sky, palm trees, no people, calm but serious mood, photoreal, 16:9",
};
const RATIOS = ["1:1", "4:3", "3:4", "16:9", "9:16"];

function buildPrompt(scene, gender, age, extra) {
  const g = gender === "Couple" ? "middle-aged couple" : gender.toLowerCase();
  let p = (SCENES[scene] || "").replaceAll("{g}", g).replaceAll("{age}", age);
  if (extra && extra.trim()) p += ", " + extra.trim();
  return p;
}

export default function Studio() {
  const [studioKey, setStudioKey] = useState("");
  const [scene, setScene] = useState("Professional agent");
  const [gender, setGender] = useState("Man");
  const [age, setAge] = useState("50");
  const [ratio, setRatio] = useState("4:3");
  const [count, setCount] = useState(2);
  const [extra, setExtra] = useState("");
  const [prompt, setPrompt] = useState(buildPrompt("Professional agent", "Man", "50", ""));
  const [editedManually, setEditedManually] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  function refresh(nextScene, nextGender, nextAge, nextExtra) {
    if (editedManually) return;
    setPrompt(buildPrompt(nextScene, nextGender, nextAge, nextExtra));
  }

  async function generate() {
    setError("");
    setImages([]);
    if (!studioKey) { setError("Enter your Studio key first."); return; }
    if (!prompt.trim()) { setError("Enter a prompt."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-studio-key": studioKey },
        body: JSON.stringify({ prompt, n: count, aspect_ratio: ratio }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Generation failed."); }
      else { setImages(data.images || []); }
    } catch (e) {
      setError("Network error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  const wrap = { maxWidth: 980, margin: "0 auto", padding: "2rem 1.2rem 4rem" };
  const card = { background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "1.3rem", boxShadow: "var(--shadow)" };
  const label = { display: "block", fontSize: ".8rem", fontWeight: 700, color: "var(--navy)", margin: "0 0 .3rem" };
  const inp = { width: "100%", padding: ".7rem .8rem", border: "1.5px solid var(--line)", borderRadius: 10, fontSize: "1rem", fontFamily: "inherit" };
  const btn = { background: "var(--blue)", color: "#fff", border: 0, borderRadius: 999, padding: ".9rem 1.5rem", fontWeight: 700, fontSize: "1rem", cursor: "pointer" };

  return (
    <div style={{ background: "var(--ice)", minHeight: "100vh" }}>
      <div style={{ background: "var(--navy)", color: "#fff", padding: "1rem 0" }}>
        <div style={{ ...wrap, padding: "0 1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <strong style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: "1.2rem" }}>M&K · Personalize Studio</strong>
          <a href="/" style={{ color: "#cfe0f2", textDecoration: "none", fontSize: ".9rem" }}>← Back to site</a>
        </div>
      </div>

      <div style={wrap}>
        <p style={{ color: "var(--muted)", margin: "1rem 0 1.4rem" }}>
          Generate on-brand images with Grok (xAI). Pick a context, generate, download, then drop the file into
          <code style={{ background: "#fff", padding: "0 .3rem", borderRadius: 4 }}> /public/images</code> to use it on the site.
        </p>

        <div style={{ ...card, marginBottom: "1.2rem" }}>
          <label style={label}>Studio key</label>
          <input style={inp} type="password" placeholder="The STUDIO_KEY you set in .env.local"
                 value={studioKey} onChange={(e) => setStudioKey(e.target.value)} />
          <small style={{ color: "var(--muted)" }}>Protects your xAI credits. Keep this page unlinked / private.</small>
        </div>

        <div style={{ ...card, marginBottom: "1.2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={label}>Scene</label>
              <select style={inp} value={scene} onChange={(e) => { setScene(e.target.value); refresh(e.target.value, gender, age, extra); }}>
                {Object.keys(SCENES).map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={label}>Person</label>
              <select style={inp} value={gender} onChange={(e) => { setGender(e.target.value); refresh(scene, e.target.value, age, extra); }}>
                {GENDERS.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label style={label}>Age</label>
              <input style={inp} value={age} onChange={(e) => { setAge(e.target.value); refresh(scene, gender, e.target.value, extra); }} />
            </div>
            <div>
              <label style={label}>Aspect ratio</label>
              <select style={inp} value={ratio} onChange={(e) => setRatio(e.target.value)}>
                {RATIOS.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label style={label}>Variations</label>
              <select style={inp} value={count} onChange={(e) => setCount(parseInt(e.target.value, 10))}>
                {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label style={label}>Extra details (optional)</label>
              <input style={inp} placeholder="e.g. light blue shirt, Miami" value={extra}
                     onChange={(e) => { setExtra(e.target.value); refresh(scene, gender, age, e.target.value); }} />
            </div>
          </div>

          <label style={{ ...label, marginTop: "1rem" }}>Prompt (editable)</label>
          <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} value={prompt}
                    onChange={(e) => { setPrompt(e.target.value); setEditedManually(true); }} />
          <div style={{ display: "flex", gap: ".6rem", alignItems: "center", marginTop: "1rem", flexWrap: "wrap" }}>
            <button style={{ ...btn, opacity: loading ? .6 : 1 }} onClick={generate} disabled={loading}>
              {loading ? "Generating…" : "Generate with Grok"}
            </button>
            {editedManually && (
              <button onClick={() => { setEditedManually(false); setPrompt(buildPrompt(scene, gender, age, extra)); }}
                      style={{ background: "transparent", border: "1.5px solid var(--line)", borderRadius: 999, padding: ".9rem 1.2rem", cursor: "pointer", fontWeight: 600 }}>
                Reset to preset
              </button>
            )}
          </div>
          {error && <p style={{ color: "#c0392b", marginTop: ".8rem", fontWeight: 600 }}>{error}</p>}
        </div>

        {images.length > 0 && (
          <div style={{ ...card }}>
            <strong style={{ color: "var(--navy)" }}>Results</strong>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem", marginTop: "1rem" }}>
              {images.map((img, i) => {
                const src = img.dataUrl || img.url;
                return (
                  <div key={i} style={{ border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden", background: "#fff" }}>
                    <img src={src} alt={"variation " + (i + 1)} style={{ width: "100%", display: "block" }} />
                    <a href={src} download={`mk-image-${i + 1}.jpg`}
                       style={{ display: "block", textAlign: "center", padding: ".6rem", background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 700 }}>
                      Download
                    </a>
                  </div>
                );
              })}
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".85rem", marginTop: "1rem" }}>
              To use one on the site: download it, rename to e.g. <code>hurricane.jpg</code>, place it in <code>/public/images</code>,
              then point the matching <code>&lt;img&gt;</code> on the homepage at <code>/images/hurricane.jpg</code>.
            </p>
          </div>
        )}

        <p style={{ color: "var(--muted)", fontSize: ".8rem", marginTop: "1.4rem" }}>
          Use AI people as illustrative/ambiance imagery only — never as a fake named testimonial or to represent Mikhail.
          Mikhail's real photo stays as the agent.
        </p>
      </div>
    </div>
  );
}
