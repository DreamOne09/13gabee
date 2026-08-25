import { EXPERIENCE_POINTS } from "@/lib/site-data";

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">不是網美店，是一間有個性的咖啡空間</h2>
          <p className="section-desc">
            十三咖啡隱身南屯，沒有明顯招牌。搬遷至現址後，老闆以回收建材與石頭親手打造這座被許多造訪者形容為「霍爾移動城堡」的空間。
          </p>
        </div>

        <div className="experience-grid">
          {EXPERIENCE_POINTS.map((point, index) => (
            <article key={point.title} className="experience-card">
              <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
