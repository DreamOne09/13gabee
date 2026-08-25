import Image from "next/image";
import { PHOTOS } from "@/lib/site-data";

export function PhotoGallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-eyebrow">Gallery</p>
          <h2 className="section-title">走進石頭屋與庭園</h2>
          <p className="section-desc">
            以下照片來自食尚玩家、婷玩味生活等公開報導，呈現十三咖啡的建築、庭園與手沖咖啡氛圍。
          </p>
        </div>

        <div className="gallery-mosaic">
          {PHOTOS.map((photo, index) => (
            <figure
              key={photo.src}
              className={`gallery-item gallery-item-${(index % 6) + 1}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="gallery-img"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption>
                <span>{photo.alt}</span>
                <a
                  href={photo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  來源：{photo.source}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
