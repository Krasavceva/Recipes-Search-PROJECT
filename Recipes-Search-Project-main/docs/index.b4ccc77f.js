let e=document.querySelector(".search__button"),t=document.querySelector(".search__input"),n=document.querySelector(".result__container"),a=document.querySelector(".search__form"),s=document.querySelector(".error_message"),i=document.querySelector(".hidden_arrow");const l=[];document.addEventListener("DOMContentLoaded",(function(){!async function(){try{let e=0;for(;e<15;){let t=await fetch("https://www.themealdb.com/api/json/v1/1/random.php"),n=await t.json();l.push(n.meals[0]),e++}!function(e){let t="";for(let n=0;n<e.length;n++)t+=`\n        <div class="result__item">\n            <img src="${e[n].strMealThumb}" alt="${e[n].strMeal}">\n            <div class="item__details">\n                <div class="details">\n                    <h2 class="item-name">${e[n].strMeal}</h2>\n                    <h3 class="item-area">${e[n].strArea}</h3>\n                </div>\n                <button class="view-button" onclick="window.location.href ='recipe_page/recipe.html?id=${e[n].idMeal}'">View recipe</button>\n            </div>            \n        </div>`;n.innerHTML=t}(l)}catch(e){console.log(e.message)}}()})),e.addEventListener("click",(e=>{e.preventDefault(),async function(){try{let e=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${t.value}`);console.log(e),function(e){let a="";s.innerHTML="",i.style.display="none",e.map((e=>{a+=`\n        <div class="result__item">\n            <img src="${e.strMealThumb}" alt="${e.strMeal}">\n            <div class="item__details">\n                <div class="details">\n                    <h2 class="item-name">${e.strMeal}</h2>\n                    <h3 class="item-area">${e.strArea}</h3>\n                </div>\n                <button class="view-button" onclick="window.location.href ='recipe_page/recipe.html?id=${e.idMeal}'">View recipe</button>\n            </div>            \n        </div>`})),0==t.value?s.innerHTML="<p>Please, enter your search request</p>":(i.style.display="block",n.innerHTML=a)}((await e.json()).meals)}catch(e){s.innerHTML="<p>Nothing found</p>",n.innerHTML=""}a.reset()}()}));
//# sourceMappingURL=index.b4ccc77f.js.map