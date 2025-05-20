
import Classes from "./page.module.css";
import Image from "next/image";
import { getMealSlug } from "@/lib/meal";


export default function DetailPage({params}){
    const meal = getMealSlug(params.slug);

    return(
        <div>
          <header className={Classes.header}>
          <div className={Classes.image}>
            <Image  src={meal.image} alt={meal.title} fill/>
          </div>
          <div className={Classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={Classes.creator}>
                by <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
            </p>
             
            <p className={Classes.summary}>{meal.summary} </p>
           
            <main>
                <p className={Classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions,}}>


                </p>
            </main>
         
          </div>
           </header>
        </div>
    )
}