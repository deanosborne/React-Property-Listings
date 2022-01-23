import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.card}><div className={classes.cardbody}>{props.children}
    </div></div>
  );
}

export default Card;
