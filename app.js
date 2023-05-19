const categories = document.querySelector(".categories");

//console.log(categories);

//console.log("called logJSONData");

async function populateHTML () {
    const response = await fetch("data.json");
    const jsonData = await response.json();


    /*<div class="entry1">
        <div class="entry1-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg>entry1
        </div>
        <div class="entry1-score">80 / 100</div>
  </div>*/


    jsonData.forEach(
        //element represents each object in the array
        (element, index) => {
            const className = "entry" + (index + 1);
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add(className);
            
            const textDiv = document.createElement('div');
            categoryDiv.appendChild(textDiv);
            textDiv.classList.add(className + "-text");

            const imgEl = document.createElement('img');
            textDiv.appendChild(imgEl);
            imgEl.setAttribute('src', element.icon);
            textDiv.innerHTML += element.category;

            
            const scoreDiv = document.createElement('div');
            categoryDiv.appendChild(scoreDiv);
            scoreDiv.classList.add(className + "-score");
            scoreDiv.innerText = element.score + " / 100";
            
            categories.appendChild(categoryDiv);
    });
}

populateHTML();