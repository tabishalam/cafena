import classes from "./SecondaryButton.module.scss"

function SecondaryButton({ text }) {
  return <button type="button" className={classes.secondary__button}>{text}</button>
}

export default SecondaryButton;