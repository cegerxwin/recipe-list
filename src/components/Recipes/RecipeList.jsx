import { getData } from "../../getData.js";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.module.css";

function RecipeList() {
  return (
    <div className={styles.recipeListWrapper}>
      {getData.map((rCard) => {
        return <RecipeCard key={rCard.idMeal} recipe={rCard} />;
      })}
    </div>
  );
}

export default RecipeList;
