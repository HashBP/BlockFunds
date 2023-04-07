import mypic from "./pizza.gif";
import { Image } from "semantic-ui-react";
export default PizzaLoading = (props) => {
  return (
    <Image
      src={mypic}
      alt="Pizza Loading"W
      width="350px"
      height="300px"
      layout="responsive"
    />
  );
};
