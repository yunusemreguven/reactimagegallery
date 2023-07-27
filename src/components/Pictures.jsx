const Picture = ({ item }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={item.img} alt="" id="img" />
      </div>
      <div className="info">
        <p className="par">{item.photographer}</p>
      </div>
    </div>
  );
};
export default Picture;
