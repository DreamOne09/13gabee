import { AGENCY, DEMO_DISCLAIMER, SHOP } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <p className="footer-shop">{SHOP.name} · {SHOP.alias}</p>
          <p className="footer-disclaimer">{DEMO_DISCLAIMER}</p>
        </div>

        <div className="footer-agency">
          <p>
            本 Demo 網站由 <strong>{AGENCY.name}</strong> 製作
          </p>
          <p>顧問簽名：{AGENCY.consultant}</p>
          <p className="footer-note">
            非店家委託之官方網站。營業資訊以店家 Facebook 粉專與 Google Maps 為準。
          </p>
        </div>
      </div>
    </footer>
  );
}
