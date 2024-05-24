import classes from "./MenuItem.module.scss"

function MenuItem({ image, title, description, prize }) {
  return (
    <>
        <div className={classes["menu__list--item"]}>
            <img src={image} alt="Item Image" className={classes["menu__list__"]} />
            
            <div className={classes["menu__list--item--info"]}>
                <div className={classes["menu__list--item--textInfo"]}>
                    <h3 className={classes["menu__list--item--title"]}>{title}</h3>
                    <p className={classes["menu__list--item--description"]}>{description}</p>
                </div>
        
                <h3 className={classes["menu__list--item--price"]}>${prize}</h3>
            </div>
        </div>
    </>
  )
}

export default MenuItem