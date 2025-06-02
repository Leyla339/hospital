import React, { useEffect, useState } from "react";
import "./About.css";
import building from "./img/building2.svg";
import hospital1 from "./img/hospital-corridor.jpg";
import hospital2 from "./img/hospital-cabinet.jpg";
import hospital3 from "./img/hospital-waiting.jpg";
import hospital4 from "./img/hospital.jpg";
import hospital5 from "./img/hospital5.jpg";

const images = [
  building,
  hospital1,
  hospital2,
  hospital3,
  hospital4,
  hospital5,
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="about">
          <h1>Sağlam gələcək üçün birlikdə çalışırıq!</h1>
          <div className="hospital-info">
            <div className="slideshow-wrapper">
              <img
                src={images[currentImage]}
                alt="hospital"
                className="slideshow-img"
              />
              <div className="slideshow-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentImage === index ? "active" : ""}`}
                    onClick={() => setCurrentImage(index)}
                  ></span>
                ))}
              </div>
            </div>
            <div>
              <h2> Biz kimik?</h2>
              <p>
                Biz — sağlamlığınızı hər şeydən üstün tutan peşəkar tibbi
                kollektivik. Klinikamızda müasir tibbin tələblərinə cavab verən
                avadanlıqlarla təchiz olunmuş şöbələr, ixtisaslı həkim heyəti və
                pasiyent yönümlü xidmət anlayışı ilə fəaliyyət göstəririk.
                <br /> <br /> <span>Əsas məqsədimiz</span> — hər bir pasiyentə
                fərdi yanaşmaq, düzgün diaqnoz və effektiv müalicə təmin
                etməkdir. Bizə müraciət edən hər kəsə hörmətlə yanaşır,
                sağlamlıq yolunda onların yanında oluruq. <br /> <br /> İllərdir
                göstərdiyimiz etibarlı xidmət sayəsində minlərlə insanın inamını
                qazanmışıq. Xidmətlərimizə müasir cərrahiyyə, diaqnostika,
                laborator müayinələr və müxtəlif ixtisas sahələri üzrə tibbi
                yardım daxildir.
              </p>
            </div>
          </div>
          <div className="information">
            <div className="info2">
              <h2>Niyə bizi seçməlisiniz?</h2>
              <ul>
                <li>Peşəkar tibbi heyət </li>
                <li>Müasir diaqnostika </li>
                <li>24/7 xidmət </li>
                <li>Steril və rahat mühit </li>
              </ul>
            </div>
            <div className="info3">
              <h2>Statistika</h2>
              <ul>
                <li>13 Şöbə</li>
                <li>3 Tibbi Mərkəz</li>
                <li>200+ Həkim</li>
                <li>35.000+ Pasiyent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
