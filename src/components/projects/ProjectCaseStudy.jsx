import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/detailed";

// ─── Palette ──────────────────────────────────────────────────────────────────
const C = {
  bg:      "#F7F3EE",
  heading: "#1D1D1D",
  accent:  "#3F6B57",
  border:  "#DDD7C8",
  muted:   "#888",
  pill:    "#F0EBE1",
};

// ─── Pill ─────────────────────────────────────────────────────────────────────
function Pill({ label }) {
  return (
    <span style={{
      display: "inline-block", padding: "4px 12px", borderRadius: "999px",
      border: `1px solid ${C.border}`, fontSize: "12px", color: C.accent,
      background: C.pill, fontWeight: 500, letterSpacing: "0.02em", whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ children, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: "96px", ...style }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section label + heading ──────────────────────────────────────────────────
function SectionHeader({ label, heading }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <p style={{
        fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em",
        color: C.accent, fontWeight: 600, margin: "0 0 10px",
      }}>
        {label}
      </p>
      <h2 style={{
        fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: C.heading,
        margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15,
      }}>
        {heading}
      </h2>
    </div>
  );
}

// ─── Architecture animation ───────────────────────────────────────────────────
function Architecture({ steps }) {
  const [active, setActive] = useState(-1);   // -1 = idle
  const [running, setRunning] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  const run = () => {
    if (running) return;
    setRunning(true);
    setActive(0);
  };

  useEffect(() => {
    if (active < 0 || !running) return;
    if (active >= steps.length) {
      // hold last, then reset
      const t = setTimeout(() => { setActive(-1); setRunning(false); }, 800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setActive((a) => a + 1), 600);
    return () => clearTimeout(t);
  }, [active, running, steps.length]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Trigger button */}
      <motion.button
        onClick={run}
        whileHover={{ backgroundColor: running ? C.border : C.accent, color: running ? C.muted : "#F7F3EE" }}
        style={{
          marginBottom: "40px",
          padding: "10px 24px", borderRadius: "7px",
          border: `1px solid ${C.border}`,
          background: running ? C.pill : C.heading,
          color: running ? C.muted : C.bg,
          fontSize: "13px", fontWeight: 500,
          cursor: running ? "not-allowed" : "pointer",
          transition: "background 0.2s, color 0.2s",
          letterSpacing: "0.01em",
        }}
      >
        {running ? "Running…" : active >= steps.length ? "Run Again →" : "Start Architecture →"}
      </motion.button>

      {/* Steps */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, width: "100%", maxWidth: "360px" }}>
        {steps.map((step, i) => {
          const isActive  = active === i;
          const isDone    = active > i;
          const isIdle    = active < 0;

          return (
            <div key={step.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              {/* Box */}
              <motion.div
                animate={{
                  borderColor: isActive ? C.accent : isDone ? "#A8C5B5" : C.border,
                  backgroundColor: isActive ? "#EAF2EE" : isDone ? "#F4FAF7" : C.bg,
                  scale: isActive ? 1.04 : 1,
                }}
                transition={{ duration: 0.25 }}
                style={{
                  width: "100%", padding: "14px 20px",
                  borderRadius: "8px", border: `1.5px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div>
                  <p style={{
                    margin: 0, fontSize: "14px", fontWeight: 600,
                    color: isActive ? C.accent : isDone ? "#4A8A6A" : C.heading,
                    transition: "color 0.25s",
                  }}>
                    {step.label}
                  </p>
                  {step.sublabel && (
                    <p style={{ margin: "2px 0 0", fontSize: "11px", color: C.muted }}>
                      {step.sublabel}
                    </p>
                  )}
                </div>
                <motion.div
                  animate={{ opacity: isDone ? 1 : 0, scale: isDone ? 1 : 0.5 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: C.accent, fontSize: "14px", fontWeight: 700, flexShrink: 0 }}
                >
                  ✓
                </motion.div>
              </motion.div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div style={{ position: "relative", width: "1px", height: "28px", background: C.border }}>
                  <motion.div
                    animate={{ scaleY: isDone ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "absolute", inset: 0,
                      background: C.accent, transformOrigin: "top",
                    }}
                  />
                  {/* Moving dot */}
                  {isActive && (
                    <motion.div
                      initial={{ top: 0, opacity: 1 }}
                      animate={{ top: "100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeIn" }}
                      style={{
                        position: "absolute", left: "50%", transform: "translateX(-50%)",
                        width: "7px", height: "7px", borderRadius: "50%",
                        background: C.accent,
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Screenshot placeholder ───────────────────────────────────────────────────
function ScreenshotCard({ screenshot, index, parentInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={parentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderRadius: "10px", overflow: "hidden", border: `1px solid ${C.border}` }}
    >
      {screenshot.src ? (
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      ) : (
        <div style={{
          width: "100%", aspectRatio: "16/9",
          background: C.pill, display: "flex",
          flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "8px",
        }}>
          <span style={{ fontSize: "22px", opacity: 0.4 }}>🖼</span>
          <span style={{ fontSize: "12px", color: C.muted, fontWeight: 500 }}>
            {screenshot.label}
          </span>
        </div>
      )}
      <div style={{ padding: "12px 16px", borderTop: `1px solid ${C.border}` }}>
        <p style={{ margin: 0, fontSize: "12px", color: C.muted, fontWeight: 500 }}>
          {screenshot.label}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project  = projects.find((p) => p.slug === slug);

  const screenshotsRef = useRef(null);
  const screenshotsInView = useInView(screenshotsRef, { once: true, margin: "-60px" });

  if (!project) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: C.muted, fontSize: "14px", marginBottom: "16px" }}>Project not found.</p>
          <button onClick={() => navigate(-1)} style={{ color: C.accent, background: "none", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}>
            ← Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div style={{ padding: "80px 5vw 0", maxWidth: "1140px", margin: "0 auto" }}>

        {/* Back */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "none", border: "none", cursor: "pointer",
            color: C.muted, fontSize: "13px", fontWeight: 500,
            marginBottom: "48px", padding: 0,
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = C.heading}
          onMouseLeave={e => e.currentTarget.style.color = C.muted}
        >
          ← Back
        </motion.button>

        {/* Status strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            display: "flex", flexWrap: "wrap", gap: "0",
            borderTop: `1px solid ${C.border}`,
            borderBottom: `1px solid ${C.border}`,
            marginBottom: "48px",
          }}
          className="status-strip"
        >
          {[
            { label: "Status",   value: project.status },
            { label: "Role",     value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Focus",    value: project.focus },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: "14px 24px",
                borderRight: i < 3 ? `1px solid ${C.border}` : "none",
                flex: "1 1 160px",
              }}
            >
              <p style={{ margin: "0 0 3px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, fontWeight: 600 }}>
                {item.label}
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: C.heading, fontWeight: 500 }}>
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: C.accent, fontWeight: 600, margin: "0 0 16px" }}
        >
          Case Study
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 600, color: C.heading,
            margin: "0 0 20px", letterSpacing: "-0.035em", lineHeight: 1.05,
            maxWidth: "800px",
          }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
          style={{ fontSize: "17px", color: "#666", lineHeight: 1.7, maxWidth: "600px", margin: "0 0 36px" }}
        >
          {project.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "80px" }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: C.heading, color: C.bg, padding: "11px 22px",
                borderRadius: "7px", fontSize: "13px", fontWeight: 500,
                textDecoration: "none", transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.accent}
              onMouseLeave={e => e.currentTarget.style.background = C.heading}
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "none", color: C.heading, padding: "11px 22px",
                borderRadius: "7px", border: `1px solid ${C.border}`,
                fontSize: "13px", fontWeight: 500, textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.heading; }}
            >
              GitHub →
            </a>
          )}
        </motion.div>

        {/* Hero screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%", aspectRatio: "16/8",
            background: C.pill, borderRadius: "12px",
            border: `1px solid ${C.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "96px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "28px", opacity: 0.3, margin: "0 0 8px" }}>🖥</p>
            <p style={{ fontSize: "13px", color: C.muted, fontWeight: 500 }}>Dashboard Screenshot</p>
          </div>
        </motion.div>
      </div>

      {/* ── Body sections ──────────────────────────────────────────── */}
      <div style={{ padding: "0 5vw", maxWidth: "1140px", margin: "0 auto" }}>

        {/* Overview */}
        <Section>
          <SectionHeader label="Overview" heading="What is it?" />
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, maxWidth: "680px", margin: "0 0 40px" }}>
            {project.overview}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", border: `1px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}
            className="overview-stats"
          >
            {project.overviewStats.map((s, i) => (
              <div key={s.label} style={{
                padding: "20px 24px",
                borderRight: i < project.overviewStats.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <p style={{ margin: "0 0 4px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, fontWeight: 600 }}>
                  {s.label}
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: C.heading, fontWeight: 600 }}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Problem */}
        <Section>
          <SectionHeader label="Problem" heading="Why does it exist?" />
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, maxWidth: "680px", margin: 0 }}>
            {project.problem}
          </p>
        </Section>

        {/* Solution */}
        <Section>
          <SectionHeader label="Solution" heading="What does it do?" />
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, maxWidth: "680px", margin: 0 }}>
            {project.solution}
          </p>
        </Section>

        {/* Architecture */}
        <Section>
          <SectionHeader label="Architecture" heading="How does it work?" />
          <Architecture steps={project.architecture} />
        </Section>

        {/* Features */}
        <Section>
          <SectionHeader label="Features" heading="What's included?" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }} className="features-grid">
            {project.features.map((group) => (
              <div key={group.title}>
                <p style={{
                  fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em",
                  color: C.accent, fontWeight: 600, margin: "0 0 12px",
                }}>
                  {group.title}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {group.items.map((item) => <Pill key={item} label={item} />)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Screenshots */}
        <Section>
          <SectionHeader label="Screenshots" heading="In the wild." />
          <div
            ref={screenshotsRef}
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}
            className="screenshots-grid"
          >
            {project.screenshots.map((s, i) => (
              <ScreenshotCard key={s.label} screenshot={s} index={i} parentInView={screenshotsInView} />
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section>
          <SectionHeader label="Tech Stack" heading="Built with." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }} className="tech-grid">
            {project.techStack.map((group) => (
              <div key={group.group}>
                <p style={{
                  fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em",
                  color: C.accent, fontWeight: 600, margin: "0 0 12px",
                }}>
                  {group.group}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {group.items.map((item) => (
                    <p key={item} style={{ margin: 0, fontSize: "13px", color: C.heading, fontWeight: 500 }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Challenges */}
        <Section>
          <SectionHeader label="Challenges" heading={project.challengeTitle} />
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, maxWidth: "680px", margin: 0 }}>
            {project.challenge}
          </p>
        </Section>

        {/* Learnings */}
        <Section>
          <SectionHeader label="Learnings" heading="What I took away." />
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, maxWidth: "680px", margin: 0 }}>
            {project.learnings}
          </p>
        </Section>

        {/* Future */}
        <Section>
          <SectionHeader label="Future" heading="What's next for this project." />
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "480px" }}>
            {project.future.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.accent, flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: "14px", color: "#555", fontWeight: 500 }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${C.border}`, padding: "48px 0 80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p style={{ margin: "0 0 6px", fontSize: "13px", color: C.muted }}>
                Interested in the implementation?
              </p>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "14px", color: C.accent, fontWeight: 600, textDecoration: "none" }}>
                  GitHub →
                </a>
              )}
            </div>

            {project.nextProject && (
              <motion.button
                onClick={() => navigate(`/projects/${project.nextProject}`)}
                whileHover={{ color: C.accent }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "13px", color: C.muted, fontWeight: 500,
                  display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px",
                  transition: "color 0.2s",
                }}
              >
                <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Next Project</span>
                <span style={{ fontSize: "15px", fontWeight: 600, color: C.heading }}>{project.nextProjectLabel} →</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* ── Responsive ──────────────────────────────────────────────── */}
      <style>{`
        .status-strip > div:last-child { border-right: none !important; }
        @media (max-width: 900px) {
          .overview-stats { grid-template-columns: repeat(2,1fr) !important; }
          .tech-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .status-strip > div { border-right: none !important; border-bottom: 1px solid ${C.border}; }
          .status-strip > div:last-child { border-bottom: none !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .screenshots-grid { grid-template-columns: 1fr !important; }
          .overview-stats { grid-template-columns: 1fr 1fr !important; }
          .tech-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </div>
  );
}