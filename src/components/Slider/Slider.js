import './Slider.scss'
import ReactSlider from "react-slider";

const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
    />
  );
};
export default Slider;