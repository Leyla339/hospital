import React from "react";
import "./News.css";
import building from "./img/building2.svg";
import poster1 from "./img/promotion1.svg";
import poster2 from "./img/promotion3.svg";
import poster3 from "./img/promotion4.svg";
import poster4 from "./img/promotion5.svg";
import trainings from "./img/trainings.jpg";
import meeting from "./img/meeting2.jpg";

import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Təlimlər davam edir",
    date: "27.05.2025",
    content:
      "Peşəkarlığımızı artırmaq üçün həkimlərimiz ixtisas təlimlərini uğurla davam etdirir – sizin sağlamlığınız üçün daim yenilikçiyik!",
    img: trainings,
  },
  {
    id: 2,
    title: "Yeni təlimlərə start verildi",
    date: "25.05.2025",
    content:
      "Həkim heyətimiz üçün yeni mövsümi təlimlərə start verildi — beynəlxalq təcrübələr, innovativ tibbi metodlar və peşəkar inkişaf imkanları ilə dolu bir proqram sizi gözləyir!",
    img: meeting,
  },
  {
    id: 6,
    title: "Yeni klinika açıldı",
    date: "20.05.2020",
    content:
      "VitaCare klinikası şəhərin mərkəzində öz qapılarını açdı — sağlamlığınız bizim ən böyük prioritetimizdir!",
    img: building,
  },
];

const promotions = [
  {
    id: 2,
    title: "Yay kampaniyası başladı",
    date: "1-30 iyun 2025",
    content:
      "Yay mövsümündə sağlamlığınıza yatırım edin! Check-up paketlərimizdə 30% endirim fürsətini qaçırmayın!",
    img: poster2,
  },
  {
    id: 3,
    title: "`Qan ver,həyat xilas et` aksiyasi",
    date: "15.06.2023",
    content:
      "Bir damla qanla minlərlə ümid yarat! Könüllü qanvermə aksiyamıza qoşul, həyat xilasına dəstək ol!",
    img: poster1,
  },
  {
    id: 4,
    title: "Yaşlı pasiyentlərimizə özəl aksiya",
    date: "1-10 iyul 2025",
    content:
      "60 yaşdan yuxarı dəyərli pasiyentlərimiz üçün xüsusi pulsuz müayinələr və endirim imkanları təqdim edirik.",
    img: poster3,
  },
  {
    id: 5,
    title: "`Kiçik ürəklərə Böyük Qayğı` aksiyası",
    date: "15.06.2025",
    content:
      "Uşaqlar üçün xüsusi tibbi müayinələr və sevgi dolu konsultasiyalar — sağlam gələcək üçün birgəyik!",
    img: poster4,
  },
];

const News = () => {
  return (
    <div className="news-container">
      <section className="news-section">
        <h1>Xəbərlər</h1>
        <div className="news-list">
          {newsItems.map(({ id, title, date, content, img }) => (
            <div key={id} className="news-card">
              <img src={img} alt={title} className="news-image" />
              <div className="news-info">
                <h3 className="news-title">{title}</h3>
                <p className="news-date">{date}</p>
                <p className="news-content">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promotions-section">
        <h1>Aksiyalar</h1>
        <div className="news-list">
          {promotions.map(({ id, title, date, content, img }) => (
            <div key={id} className="news-card">
              <img src={img} alt={title} className="news-image" />
              <div className="news-info">
                <h3 className="news-title">{title}</h3>
                <p className="news-date">{date}</p>
                <p className="news-content">{content}</p>
              </div>
              <Link to="/hospital/promotions">Ətraflı</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
