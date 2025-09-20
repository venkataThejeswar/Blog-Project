import "./banner.css";
function Banner() {
  return (
    <>
      <div className="banner-div">
        <div className="overlay">
          <h1 id="banner-title">Welcome to AI Blog Website</h1>
        </div>
        <img
          src="/media/BannerHome.jpg"
          alt=""
          width={"100%"}
          height={"650px"}
          style={{objectFit:"cover"}}
        />
      </div>
    </>
  );
}
export default Banner;
