import styles from "./ChosenHotelSideBar.module.css";

function ChosenHotelSideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.hotelDetails}>
        <h2>Searched by:</h2>
        <h5>Destination</h5>
        <p>Auckland, New Zealand </p>
        <h5>Check-in date</h5>
        <p>Auckland, New Zealand </p>
        <h5>Check-out date</h5>
        <p>Auckland, New Zealand </p>
        <h5>Persons</h5>
        <p>Auckland, New Zealand </p>
      </div>
      <span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.884418452681!2d44.78719417593609!3d41.72301287125927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472cdf8e6b329%3A0x316d4c4991b44fc3!2sBoris%20Paichadze%20Dinamo%20Arena!5e0!3m2!1sen!2sge!4v1712766993499!5m2!1sen!2sge"
          style={{
            borderRadius: "20px",
            border: "0px",
            width: "380px",
            height: "216px",
          }}
          loading="lazy"
        ></iframe>
      </span>
      <div className={styles.facilities}>
        <h3>All the facilities:</h3>
        <ul>
          <li>Private pool</li>
          <li>Terrace</li>
          <li>Kitchen</li>
          <li>1 Bedroom</li>
          <li>2 Bathrooms</li>
          <li>kids play space</li>
          <li>Billiard room</li>
          <li>Private gym</li>
        </ul>
      </div>
    </div>
  );
}
export default ChosenHotelSideBar;
