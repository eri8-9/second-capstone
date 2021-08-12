import { displayLikes, getMeals } from './homePageRequest';

const container = document.getElementById('container');
const addItem = (meal, index) => {
  const divItem = document.createElement('div');
  const imgDiv = document.createElement('div');
  const title = document.createElement('h4');
  const likeDiv = document.createElement('div');
  const imgItem = document.createElement('img');
  const likeCount = document.createElement('p');
  const commentBtn = document.createElement('button');
  commentBtn.classList.add('buttons')
  const icon = document.createElement('i');
  icon.classList.add("far", "fa-heart",'heart');
  title.textContent = `${meal.strCategory}`;
  icon.dataset.id = `${index}`;
  likeDiv.appendChild(icon);
  likeDiv.textContent = 'Likes';
  likeDiv.appendChild(icon);
  likeCount.classList.add('likes');
  likeCount.dataset.id = `${index}`;
  likeCount.textContent = 0;
  imgItem.setAttribute('src', `${meal.strCategoryThumb}`);
  imgDiv.appendChild(imgItem);
  commentBtn.innerHTML = 'comment';
  commentBtn.dataset.id = `${index}`;
  divItem.classList.add('meal-card');
  divItem.appendChild(title);
  divItem.appendChild(likeDiv);
  divItem.appendChild(imgDiv);
  divItem.appendChild(likeCount);
  divItem.appendChild(commentBtn);
  container.appendChild(divItem);
};

const displayItems = async (result) => {
  result.forEach((element,index) => {
    addItem(element,index);
  });
};


export default displayItems;