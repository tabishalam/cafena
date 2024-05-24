import classes from "./ContactCard.module.scss";
function ContactCard({ icon, title, info}) {
  return (
    <div className={classes.contact__card}>
        <div className={classes["contact__card--icon"]}>
            <img src={icon} alt="Contact Icon" />
        </div>
        <h3 className={classes["contact__card--title"]}>{title}</h3>
        <p className={classes["contact__card--info"]}>{info}</p>
    </div>
  )
}

export default ContactCard;