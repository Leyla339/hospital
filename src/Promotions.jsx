import React from "react";
import "./Promotions.css";
import poster1 from "./img/promotion1.svg";
import poster2 from "./img/promotion3.svg";
import poster3 from "./img/promotion4.svg";
import poster4 from "./img/promotion5.svg";

const promotions = [
  {
    id: 1,
    title: "Yay kampaniyası başladı",
    date: "1-30 iyun 2025",
    content:
      "Yay mövsümündə sağlamlığınıza yatırım edin! Check-up paketlərimizdə 30% endirim fürsətini qaçırmayın!",
    details: "",
    img: poster2,
  },
  {
    id: 2,
    title: "`Qan ver, həyat xilas et` aksiyası",
    date: "15.06.2023",
    content:
      "Bir damla qanla minlərlə ümid yarat! Könüllü qanvermə aksiyamıza qoşul, həyat xilasına dəstək ol!",
    details:
      "VitaCare-də keçirilən qanvermə aksiyaları tam təhlükəsiz şəraitdə həyata keçirilir.",
    bonus: [
      "Kiçik təşəkkür hədiyyəsi",
      "Sağlamlıq müayinəsinə 10% endirim",
      "“Qan ver, həyat xilas et” sertifikatı təqdim olunacaq",
    ],
    img: poster1,
  },
  {
    id: 3,
    title: "Yaşlı pasiyentlərimizə özəl aksiya",
    date: "1-10 iyul 2025",
    content:
      "60 yaşdan yuxarı pasiyentlərimiz üçün pulsuz müayinələr və endirim imkanları təqdim edirik.",
    details:
      "Aksiya müddətində yaşlı şəxslərə terapevt, kardioloq və nevropatoloq müayinələri tamamilə pulsuzdur.",
    img: poster3,
  },
  {
    id: 4,
    title: "`Kiçik ürəklərə Böyük Qayğı` aksiyası",
    date: "15.06.2025",
    content:
      "Uşaqlar üçün xüsusi tibbi müayinələr və sevgi dolu konsultasiyalar — sağlam gələcək üçün birgəyik!",
    details:
      "Bir gün ərzində uşaqlar üçün pulsuz pediatr qəbulu keçiriləcək. Peşəkar pediatrlarımız tərəfindən ümumi müayinə aparılacaq, valideynlərə tövsiyələr veriləcək.",
    bonus: ["Uşaqlara sürpriz hədiyyələr", "Valideynlər üçün məsləhət saatı"],
    img: poster4,
  },
];

const Promotions = () => {
  return (
    <div className="promotions-page">
      <div className="promo-header">
        <h1>Aksiyalar</h1>
        <p>
          Xüsusi kampaniyalarımızla sağlamlığınıza daha yaxın olun. Hal-hazırda
          aktiv olan və yaxın keçmişdə keçirilmiş aksiyalarla tanış olun.
        </p>
      </div>
      <div className="promo-content">
        {promotions.map(({ id, title, date, content, details, bonus, img }) => (
          <div key={id} className="promotion-card">
            <img src={img} alt={title} className="promo-img" />
            <div className="promo-body">
              <h2 className="promo-title">{title}</h2>
              <p className="promo-date">{date}</p>
              <p className="promo-content-text">{content}</p>
              {details && details.length > 0 && (
                <p className="promo-details">{details}</p>
              )}
              {bonus && bonus.length > 0 && (
                <ul className="promo-bonus">
                  {bonus.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
