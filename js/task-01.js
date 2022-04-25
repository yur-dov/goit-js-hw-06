const allCategories = document.querySelectorAll('.item');

const longCategories = (allCategories) => {
    console.log(`Number of categories: ${allCategories.length}`); 
    allCategories.forEach(category =>
        console.log(`Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}`),
        
    )}; 
longCategories(allCategories)