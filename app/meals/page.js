import { Suspense } from "react";
import MealsGrid from "../components/mealsComponent/meals.grid";
import Classes from "./Page.module.css"
import Link from "next/link";
import getMeals from "../../lib/meal";

 async function Meals(){
const meals = await getMeals();
return <MealsGrid meals={meals}/>
}

export default  async function MealsPage(){
    return(
        <div>
        <header className={Classes.header}>
            <h1> Delicious meal, create{" "}
                <span className={Classes.highlight} ></span>
                by you
                    </h1>
                    <p>Choose your favourite recipe and cook it your self. it is easy</p>
                        <p className={Classes.cta}

                     > 
                        <Link href="/meals/share"> Share Your favourite Recipe</Link>
                    </p>
        </header>
        <main className={Classes.main} > 
<div>
<Suspense fallback ={ <p>Loading...</p>}>

    <Meals />
</Suspense>
</div>


        </main>
        </div> 
    );
} 