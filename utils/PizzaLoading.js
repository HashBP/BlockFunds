import { Image } from "semantic-ui-react";
import mypic from "./pizza.gif";
export default PizzaLoading = (props) => {
  return (
    <Image
      src={mypic}
      alt="Pizza Loading"
      width="350px"
      height="300px"
      layout="responsive"
      
    />
  );
};
