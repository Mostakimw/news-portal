const fetchAllData = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFetchData(data.data));
};
const displayFetchData = (data) => {
  //   console.log(data.news_category);
  const categoriesLinkContainer = document.getElementById(
    "category-link-container"
  );
  data.news_category.forEach((category) => {
    categoriesLinkContainer.innerHTML += `<a onclick="fetchCategoryNewses('${category.category_id}','${category.category_name}')" class="nav-link" href="#">${category.category_name}</a>`;
  });
};

//! fetch category wise newses

const fetchCategoryNewses = (category_id, category_name) => {
  //   console.log(category_id);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAllNewses(data.data, category_name));
};

const showAllNewses = (data, category_name) => {
  //   console.log(category_name);
  document.getElementById("news-count").innerText = data.length;
  document.getElementById("category-name").innerText = category_name;
};
