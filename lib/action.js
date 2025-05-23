"use server";

import { saveMeal } from "./meal";

export async  function ShareMael(formData){

  const  meal ={ 
  summary : formData.get("summary"),
  instructions : formData.get('instructions'),
  image : formData.get('image'),
 creator: formData.get('name'),
  creator_email : formData.get('email'),
  title : formData.get("title")
  }
 await saveMeal(meal);
  }

