import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./contact.module.scss";

function Contact() {
  const position = [10.8068247, 106.6021636];

  return (
    <div className={styles["contact"]}>
      <div className="container">
        <h2>Liên hệ</h2>
        <div className={styles["contact-form"]}>
          <form action="">
            <ul>
              <li>
                <input type="text" required placeholder="Tên" />
              </li>
              <li>
                <input type="email" required placeholder="Email" />
              </li>
              <li>
                <input type="text" required placeholder="Chủ đề" />
              </li>
              <li>
                <textarea required placeholder="Hãy để lại lời nhắn..." cols="22" rows="5"></textarea>
              </li>
            </ul>
            <button className={styles["send"]}>Gửi thư</button>
          </form>
        </div>
        <div id="map" className={styles["map"]}>
          <MapContainer
            className={styles["leaflet"]}
            center={position}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Vị trí của Romance Khánh Music</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
