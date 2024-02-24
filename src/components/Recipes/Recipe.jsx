import PropTypes from "prop-types";
import styles from "./Recipe.module.css";
import StarRating from "../UI/StarRating/StarRating";
import LikeButton from "../UI/Button/LikeButton";
import Card from "./Card";
import Button from "../UI/Button/Button";

function Recipe({ open, onClose, recipe }) {
  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strInstructions,
    strArea,
    strCategory,
    strTags,
  } = recipe;
  if (!open) return null;

  // Fetch data in getData: 20 strIngredient and 20 strMeasure data row
  const getDataKeys = Object.keys(recipe);
  const ingredientValues = getDataKeys
    .filter((getDataKey) => getDataKey.startsWith("strIngredient"))
    .map((getDataKey) => recipe[getDataKey]);
  const measureValues = getDataKeys
    .filter((getDataKey) => getDataKey.startsWith("strMeasure"))
    .map((getDataKey) => recipe[getDataKey]);

  return (
    <div onClick={onClose} className={styles.recipeOverlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.recipeModalContainer}>
        <Card>
          <header className={styles.recipeHeader}>
            <div className={styles.recipeProfile}>
              <span className={styles.recipeLetter}>K</span>
            </div>
            <div className={styles.recipeLikes}>
              <div>
                <h5 className={styles.recipeModalHeader}>{strMeal}</h5>
                <p onClick={onClose} className={styles.recipeCloseBtn}>
                  X
                </p>
              </div>
            </div>
            <div className={styles.recipeLikeRight}>
              <div className={styles.recipeCardLikeBar}>
                <StarRating />
              </div>
              <div className={styles.recipeLikeText}>
                <LikeButton />
              </div>
            </div>
          </header>
          <section>
            <div className={styles.recipeIng}>
              <div className={styles.recipeContentImage}>
                <img
                  src={strMealThumb}
                  alt={strMeal}
                  className={styles.recipeImg}
                />
              </div>
              <div className={styles.recipeContentIng}>
                <iframe
                  width="444"
                  height="250"
                  src={`https://www.youtube.com/embed/${strYoutube}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share"
                  allowfullscreen></iframe>
              </div>
              <div className={styles.recipeContentIng}>
                <ul>
                  {ingredientValues.map((deger, index) =>
                    deger !== " " && deger !== "" && deger !== null ? (
                      <li key={index}>{deger}</li>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
              <div className={styles.recipeContentIng}>
                <ul>
                  {measureValues.map((deger, index) =>
                    deger !== " " && deger !== "" && deger !== null ? (
                      <li key={index}>{deger}</li>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className={styles.recipeContentInst}>
              <div>
                <strong>Directions</strong>
              </div>
              <div>
                <strong>
                  Area: <a href="#">{strArea}</a> Category:{" "}
                  <a href="#">{strCategory}</a> Tags: <a href="#">{strTags}</a>
                </strong>
              </div>
            </div>
            <div className={styles.recipeContentInst}>{strInstructions}</div>
          </section>
          <footer className={styles.recipeModalFooter}>
            <Button onClick={onClose}>Close</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}

export default Recipe;

Recipe.propTypes = {
  recipe: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  i: PropTypes.number,
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strYoutube: PropTypes.string,
  strInstructions: PropTypes.string,
  strArea: PropTypes.string,
  strCategory: PropTypes.string,
  strTags: PropTypes.string,
};
