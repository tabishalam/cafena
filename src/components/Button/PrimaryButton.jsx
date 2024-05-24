import classes from "./PrimaryButton.module.scss"

function PrimaryButton({ text }) {
  return <button type="button" className={classes.primary__button}>{text}</button>
}

export default PrimaryButton;