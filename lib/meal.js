import slugify from "slugify";
import xss from "xss";

import sql from "better-sqlite3";
 const db = sql("meals.db");

 export default async function getMeals() {
   await new Promise((resolve)=> setTimeout(resolve, 5000));
    const meals = db.prepare("SELECT * FROM meals").all();
    return meals;
 }

 export function getMealSlug(slug){
return  db.prepare("SELECT * FROM meals WHERE slug =? " ).get(slug);
 }

 

