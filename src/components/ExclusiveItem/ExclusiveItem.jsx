import classes from "./ExclusiveItem.module.scss"
function ExclusiveItem({ image, title, description, price}) {
  return (
    <div className={classes.exclusive__item}>
        <img src={image} alt="" className={classes["exclusive__item--image"]} />
        <h3 className={classes["exclusive__item--title"]}>{title}</h3>
        <p className={classes["exclusive__item--description"]}>{description}</p>
        <h3 className={classes["exclusive__item--price"]}>JUST ${price}</h3>
    </div>
  )
}

export default ExclusiveItem;