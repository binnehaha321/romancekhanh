import React from "react";

import {
  SiFacebook,
  SiTiktok,
  SiYoutube,
  SiZalo,
  SiGmail,
} from "react-icons/si";

import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["brand"]}>
          <div className={styles["brand-name"]}>
            <h3>Romance Khánh</h3>
            <p className={styles["description"]}>
              Lớp nhạc Romance Khánh chuyên dạy: Piano, Organ, Guitar và Vocal
              (thanh nhạc). Với những kinh nghiệm trong biểu diễn nghệ thuật và
              giảng dạy, Romance Khánh sẽ là một lựa chọn phù hợp không chỉ về
              giá cả mà còn về sự phát triển tâm hồn của những người yêu âm
              nhạc.
            </p>
          </div>
          <div className={styles["brand-address"]}>
            <h5>Địa chỉ</h5>
            <div className={styles["content"]}>
              <p className={styles["content-address"]}>
                65/19 đường số 5, phường Bình Hưng Hòa, quận Bình Tân, TPHCM
              </p>
              <div className={styles["content-phone"]}>
                <a href="tel:0906792001">0906792001 (Mr. Romance Khánh)</a>
                <a href="tel:0906282005">0906282005 (Ms. Tocca Vy)</a>
              </div>
            </div>
          </div>
          <div className={styles["brand-copyright"]}>
            <h5>Copyright</h5>
            <p>&copy; 2022 - Bản quyền thuộc về Romance Khánh </p>
            <div className={styles["social"]}>
              <a
                href="https://www.facebook.com/people/Romance-Kh%C3%A1nh/100083683706382/"
                target="_blank"
                rel="noreferrer"
                className={styles["facebook"]}
              >
                <SiFacebook />
              </a>
              <a
                href="https://www.youtube.com/watch?v=ZogpJeG-Omc"
                target="_blank"
                rel="noreferrer"
                className={styles["youtube"]}
              >
                <SiYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@conchimkhung"
                target="_blank"
                rel="noreferrer"
                className={styles["tiktok"]}
              >
                <SiTiktok />
              </a>
              <a
                href="https://zaloapp.com/qr/p/11sm6yhb5bnoy"
                target="_blank"
                rel="noreferrer"
                className={styles["zalo"]}
              >
                <SiZalo />
              </a>
              <a
                href="mailto:romancekhanh@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles["gmail"]}
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
