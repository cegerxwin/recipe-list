import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./RecipeCard.module.css";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import StarRating from "../UI/StarRating/StarRating";
import LikeButton from "../UI/Button/LikeButton";
import Recipe from "./Recipe";

function RecipeCard({ recipe }) {
  const { strMeal, strMealThumb, strInstructions } = recipe;
  const [openModal, setOpenModal] = useState(false);

  // random time, alphabet and chef image (for api db example)
  const timeServ = ["15", "30", "45", "60", "90"];
  const alphabet = ["M", "K", "L", "A", "E", "S"];
  const chef = [
    "https://static.cordonbleu.edu/Files/MediaFile/84569.jpg",
    "https://cdn.wallstreetitalia.com/E3_mGATdFDxWpuXEnn9udtBrOHw=/980x551/smart/https://www.wallstreetitalia.com/app/uploads/2023/03/istock-1165879486-scaled-e1679670756353.jpg",
    "https://www.mbbmanagement.com/wp-content/uploads/2017/09/Depositphotos_10674566_chef-1024x683.jpg",
    "https://pbs.twimg.com/profile_images/1673436478334967809/dHtuuYU8_400x400.jpg",
    "https://media.istockphoto.com/id/1060592710/tr/vekt%C3%B6r/g%C3%BCl%C3%BCmseyen-%C5%9Fef-karakter-karikat%C3%BCr.jpg?s=2048x2048&w=is&k=20&c=9GIoSsh31iRWwiL87cmqcvXwdMSEjyLAO1Am3GC62aE=",
    "https://jcps.co.za/wp-content/uploads/2022/06/JCPS-ARTISAN-RECOGNITION-OF-PRIOR-LEARNING.png",
    "https://www.kcgcorporation.com/storage/about-us/kcg-chef/img-chef-2.jpg",
    "https://www.kcgcorporation.com/storage/about-us/kcg-chef/img-chef-1.jpg",
  ];
  const randomTimeServ = timeServ[Math.floor(Math.random() * timeServ.length)];
  const randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomChef = chef[Math.floor(Math.random() * chef.length)];

  //random date function (for api db example)
  function generateRandomDate() {
    return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
  }

  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeCardHeader}>
        <div className={styles.recipeProfile}>
          <span className={styles.recipeLetter}>{randomAlphabet}</span>
        </div>
        <div className={styles.recipeCardTitleGroup}>
          <h5 className={styles.recipeCardTitle}>{strMeal}</h5>
          <div className={styles.recipeCardDate}>
            {generateRandomDate().toLocaleDateString("tr-TR")}
          </div>
        </div>
      </div>
      <div className={styles.recipeImgHoverZoom}>
        <img
          className={styles.recipeCardImage}
          src={strMealThumb}
          alt={strMeal}
          onClick={() => setOpenModal(true)}
        />
      </div>
      <div className={styles.recipeCardText}>
        <img className={styles.recipeAuthorImg} src={randomChef} alt="Chef" />
        {strInstructions.slice(0, 130)}...
      </div>
      <div className={styles.recipeLike}>
        <div className={styles.recipeCardLikeBar}>
          <StarRating />
        </div>
        <div className={styles.recipeLikeText}>
          <LikeButton />
        </div>
      </div>
      <div className={styles.recipeDivView}>
        <div className={styles.recipeDivServing}>
          <span className={styles.recipeServing}>
            <IoTimeOutline /> {randomTimeServ} mins <GiForkKnifeSpoon /> 4
            servings
          </span>
        </div>
        <div>
          <a
            className={styles.viewBtn}
            href="#!"
            onClick={() => setOpenModal(true)}>
            View Recipe
          </a>

          <Recipe
            open={openModal}
            onClose={() => setOpenModal(false)}
            recipe={recipe}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.object,
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strInstructions: PropTypes.string,
};
