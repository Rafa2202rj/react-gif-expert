import { useState } from "react"
import { AddCategory, GifAndGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        // setCategories={setCategories}
            onNewCategory={onAddCategory}
        />

            {categories.map((cat)=> (
                <GifAndGrid key={cat} cat={cat}/>
                ))
            }
    </>
  )
}
