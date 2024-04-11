import style from "./VideoSection.module.css";

function VideoSection() {
  return (
    <div className={style.container}>
      <h2>Watch Our Memorable Trips</h2>
      <video controls>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoSection;
