import classes from "./ServiceCard.module.scss";

function ServiceCard({ image, icon, title, description }) {
  return (
    <div className={classes.service__card}>
        <img src={image} alt="" />
        <div className={classes["service__card--info"]}>
            <div className={classes["service__card--icon"]}>
                <img src={icon} alt="" />
            </div>
            <h3 className={classes["service__card--title"]}>{title}</h3>
            <p className={classes["service__card--description"]}>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard;
