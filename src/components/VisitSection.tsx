import { ORDER_STEPS, SHOP, VISIT_OPTIONS } from "@/lib/site-data";

export function VisitSection() {
  return (
    <section className="section visit-section" id="visit">
      <div className="section-inner visit-layout">
        <div className="visit-main">
          <div className="section-head">
            <p className="section-eyebrow">Visit</p>
            <h2 className="section-title">造訪資訊</h2>
          </div>

          <dl className="info-list">
            <div>
              <dt>地址</dt>
              <dd>{SHOP.address}</dd>
            </div>
            <div>
              <dt>電話</dt>
              <dd>
                <a href={SHOP.phoneTel}>{SHOP.phone}</a>
              </dd>
            </div>
            <div>
              <dt>營業時間</dt>
              <dd>{SHOP.hours}</dd>
            </div>
            <div>
              <dt>Facebook</dt>
              <dd>
                <a href={SHOP.facebook} target="_blank" rel="noopener noreferrer">
                  facebook.com/13Gabee
                </a>
              </dd>
            </div>
          </dl>

          <div className="visit-actions">
            <a href={SHOP.phoneTel} className="action-link action-link-primary">
              電話預約／確認
            </a>
            <a
              href={SHOP.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              Google Maps 導航
            </a>
            <a
              href={SHOP.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              查看粉專公告
            </a>
          </div>
        </div>

        <aside className="visit-aside">
          <h3>交通方式</h3>
          <ul className="visit-options">
            {VISIT_OPTIONS.map((option) => (
              <li key={option.label}>
                <strong>{option.label}</strong>
                <span>{option.detail}</span>
              </li>
            ))}
          </ul>

          <div className="order-recap">
            <h3>點餐方式</h3>
            <ul>
              {ORDER_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
