import { useRef, useEffect, useState, memo } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { experiences } from "../../data/experience";

// Defined outside — stable reference, no recreation on render
const SPRING_EASE = [0.16, 1, 0.3, 1];

const pillStyle = {
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "999px",
  border: "1px solid #DDD7C8",
  fontSize: "12px",
  color: "#3F6B57",
  background: "#F0EBE1",
  fontWeight: 500,
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
};

// Pure component — only re-renders if label changes
const Pill = memo(({ label }) => (
  <span style={pillStyle}>{label}</span>
));

Pill.displayName = "Pill";

function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (typeof target !== "number") {
      setDisplay(target);
      return;
    }
    const ctrl = animate(0, target, {
      duration: 1.4,
      ease: SPRING_EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}{typeof target === "number" ? suffix : ""}
    </span>
  );
}

// Memoized — skips re-render if value/label/suffix/index unchanged
const StatCard = memo(({ value, label, suffix = "", index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: SPRING_EASE }}
      style={{ borderTop: "1px solid #DDD7C8", paddingTop: "20px", paddingBottom: "4px" }}
    >
      <p style={{
        fontSize: "26px", fontWeight: 600, color: "#1D1D1D",
        margin: "0 0 4px", lineHeight: 1, letterSpacing: "-0.02em",
      }}>
        {typeof value === "number"
          ? <Counter target={value} suffix={suffix} />
          : value}
      </p>
      <p style={{
        fontSize: "12px", color: "#888", margin: 0,
        textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500,
      }}>
        {label}
      </p>
    </motion.div>
  );
});

StatCard.displayName = "StatCard";

// Memoized — items list is stable per experience entry
const ResponsibilityGroup = memo(({ title, items, groupIndex, parentInView }) => (
  <div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={parentInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.3 + groupIndex * 0.1, duration: 0.4 }}
      style={{
        fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em",
        color: "#3F6B57", fontWeight: 600, margin: "0 0 10px",
      }}
    >
      {title}
    </motion.p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -8 }}
          animate={parentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 + groupIndex * 0.1 + i * 0.06, duration: 0.35, ease: "easeOut" }}
        >
          <Pill label={item} />
        </motion.div>
      ))}
    </div>
  </div>
));

// Stable style objects — defined once, not recreated per render
const dotStyle = {
  width: "9px", height: "9px", borderRadius: "50%",
  background: "#3F6B57", border: "2px solid #F7F3EE",
  outline: "1.5px solid #3F6B57", flexShrink: 0,
};

const lineStyle = {
  width: "1px", flex: 1, minHeight: "48px",
  background: "#DDD7C8", transformOrigin: "top", marginTop: "8px",
};

const caseStudyBaseStyle = {
  display: "inline-flex", alignItems: "center", gap: "6px",
  background: "#1D1D1D", color: "#F7F3EE", border: "none",
  borderRadius: "6px", padding: "10px 18px", fontSize: "13px",
  fontWeight: 500, cursor: "pointer", letterSpacing: "0.01em",
  transition: "background 0.2s",
};

function ExperienceCard({ exp, index, totalCount }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-80px" });
  const isLast = index === totalCount - 1;

  // Stable handlers — won't cause motion re-renders
  const handleMouseEnter = (e) => { e.currentTarget.style.background = "#3F6B57"; };
  const handleMouseLeave = (e) => { e.currentTarget.style.background = "#1D1D1D"; };
  const handleNavigate = () => navigate(`/experience/${exp.slug}`);

  const statsColumns = `repeat(${Math.min(exp.stats.length, 4)}, 1fr)`;

  return (
    <div ref={cardRef} style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        flexShrink: 0, width: "20px", paddingTop: "4px",
      }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={cardInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
          style={dotStyle}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={cardInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: SPRING_EASE }}
            style={lineStyle}
          />
        )}
      </div>

      <div style={{ flex: 1, minWidth: 0, paddingBottom: isLast ? 0 : "56px" }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          style={{
            fontSize: "11px", fontWeight: 600, color: "#888",
            letterSpacing: "0.1em", display: "block", marginBottom: "16px",
          }}
        >
          {exp.year}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: SPRING_EASE }}
          style={{ marginBottom: "24px" }}
        >
          <p style={{ fontSize: "12px", color: "#3F6B57", margin: "0 0 6px", fontWeight: 600, letterSpacing: "0.05em" }}>
            {exp.period}
          </p>
          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1D1D1D", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
            {exp.role}
          </h3>
          <p style={{ fontSize: "14px", color: "#888", margin: "0 0 14px", fontWeight: 500 }}>
            {exp.company}
          </p>
          <div style={{ height: "1px", background: "#DDD7C8", margin: "16px 0" }} />
          <motion.p
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, margin: 0 }}
          >
            {exp.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}
        >
          {exp.responsibilities.map((group, i) => (
            <ResponsibilityGroup
              key={group.title}
              title={group.title}
              items={group.items}
              groupIndex={i}
              parentInView={cardInView}
            />
          ))}
        </motion.div>

        <div style={{ height: "1px", background: "#DDD7C8", margin: "0 0 24px" }} />

        <div
          className="stats-grid"
          style={{ display: "grid", gridTemplateColumns: statsColumns, gap: "20px 16px", marginBottom: "32px" }}
        >
          {exp.stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix || ""} index={i} />
          ))}
        </div>

        <div style={{ height: "1px", background: "#DDD7C8", margin: "0 0 24px" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          {exp.website && (
            <motion.a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              whileHover="hover"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#888", textDecoration: "none", fontWeight: 500, letterSpacing: "0.01em" }}
            >
              <motion.span variants={{ hover: { color: "#1D1D1D" } }} style={{ transition: "color 0.2s" }}>
                {exp.websiteLabel}
              </motion.span>
              <motion.span variants={{ hover: { x: 3 } }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                →
              </motion.span>
            </motion.a>
          )}

          {exp.caseStudy && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.5 }}
              onClick={handleNavigate}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={caseStudyBaseStyle}
            >
              {exp.caseStudyLabel} →
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

const EXPERIENCE_STYLES = `
  @media (max-width: 768px) {
    .experience-grid { grid-template-columns: 1fr !important; gap: 48px 0 !important; }
    .experience-grid > div:first-child { position: static !important; }
    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 480px) {
    .stats-grid { grid-template-columns: 1fr 1fr !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
`;

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{
        background: "#F7F3EE", minHeight: "100vh",
        padding: "100px 5vw 120px", boxSizing: "border-box",
      }}
    >
      {/* Injected securely */}
      <style dangerouslySetInnerHTML={{ __html: EXPERIENCE_STYLES }} />

      <div
        className="experience-grid"
        style={{
          maxWidth: "1140px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "35% 1fr",
          gap: "0 64px", alignItems: "start",
        }}
      >
        {/* Sticky left header */}
        <div style={{ position: "sticky", top: "100px" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#3F6B57", fontWeight: 600, margin: "0 0 18px" }}
          >
            Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: SPRING_EASE }}
            style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, color: "#1D1D1D", margin: "0 0 20px", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            Professional
            <br />Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, margin: 0, maxWidth: "280px" }}
          >
            Building production software, deploying infrastructure and solving real business problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ fontSize: "12px", color: "#AAA", margin: "32px 0 0", letterSpacing: "0.05em", fontWeight: 500 }}
          >
            {experiences.length} {experiences.length === 1 ? "position" : "positions"}
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: "9px", top: "20px",
            width: "1px", height: "calc(100% - 40px)", background: "#DDD7C8",
          }}>
            <motion.div style={{
              position: "absolute", top: 0, left: 0,
              width: "1px", height: "100%",
              background: "#3F6B57", transformOrigin: "top", scaleY,
            }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                totalCount={experiences.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}