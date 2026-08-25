import Image from "next/image";
import { ORDER_STEPS, PHOTOS, ROUTE_WARNINGS, SHOP } from "@/lib/site-data";

export function FirstScreen() {
  const stripPhotos = PHOTOS.slice(0, 8);

  return (
    <section
      className="first-screen"
      aria-label="首屏：聯絡、點餐方式與空間照片"
    >
      <header className="first-screen-header">
        <div>
          <p className="first-screen-eyebrow">台中南屯 · 秘境咖啡</p>
          <h1 className="first-screen-title">
            {SHOP.name}
            <span className="first-screen-alias">{SHOP.alias}</span>
          </h1>
        </div>
        <p className="first-screen-address">{SHOP.address}</p>
      </header>

      <div className="cta-row">
        <a href={SHOP.phoneTel} className="cta-btn cta-btn-primary">
          <span className="cta-icon" aria-hidden="true">📞</span>
          <span>
            <span className="cta-label">撥打電話</span>
            <span className="cta-value">{SHOP.phone}</span>
          </span>
        </a>
        <a
          href={SHOP.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-secondary"
        >
          <span className="cta-icon" aria-hidden="true">f</span>
          <span>
            <span className="cta-label">Facebook 粉專</span>
            <span className="cta-value">13Gabee</span>
          </span>
        </a>
      </div>

      <div className="first-screen-grid">
        <div className="order-card">
          <h2 className="card-title">如何點餐</h2>
          <ul className="order-list">
            {ORDER_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="gallery-card">
          <div className="gallery-card-head">
            <h2 className="card-title">空間與咖啡</h2>
            <span className="gallery-count">{stripPhotos.length} 張公開照片</span>
          </div>
          <div className="photo-strip" role="list">
            {stripPhotos.map((photo) => (
              <div className="photo-strip-item" role="listitem" key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={120}
                  height={90}
                  className="photo-strip-img"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="route-warning" role="note">
        <p className="route-warning-title">路線提醒</p>
        <ul>
          {ROUTE_WARNINGS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
