import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //card 사이에 띄어쓰기 주의
  return <div className={classes}>{props.children}</div>;
};
export default Card;
