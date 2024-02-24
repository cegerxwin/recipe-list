import RecipeList from "./components/Recipes/RecipeList";
import logo from "./assets/chefRecipeList.png";

function App() {
  return (
    <div>
      <div className="app-logo">
        <div>
          <img src={logo} height="120px" alt="Chef Recipe List" />
        </div>
      </div>
      <div>
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
