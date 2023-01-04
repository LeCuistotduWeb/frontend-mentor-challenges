const grid = document.querySelector(".grid");
const filters = document.querySelectorAll("a[data-filter]");
let activeFilter = "daily"; //daily | weekly | monthly

const fetchData = async () => {
  try {
    return await fetch("./data.json").then((response) => response.json());
  } catch (error) {
    new Error(error);
  }
};

const createStatCard = (stats) => {
  const prefix = {
    daily: "Yesterday",
    weekly: "Last week",
    monthly: "Last month",
  };
  const statCard = document.createElement("div");
  const slug = stats.title.toLowerCase().replace(" ", "-");
  statCard.classList.add(`card`);
  statCard.classList.add(`card-stats`);
  statCard.classList.add(`card-${slug}`);
  statCard.innerHTML = `
      <div class="card-header">
        <img src="./images/icon-${slug}.svg" alt="${stats.title}">
      </div>
      <div class="card-body">
      <div class="card-top">
        <div class="card-name">${stats.title}</div>
        <div class="card-action">
        <a href="#">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
        </a>
        </div>
      </div>
      <div class="title">${stats.timeframes[activeFilter].current}hrs</div>
      <div class="underline">${prefix[activeFilter]} - ${stats.timeframes[activeFilter].previous}hrs</div>
      </div>`;
  return statCard;
};

const createCards = async (data) => {
  if (!data) return false;
  data.forEach((d) => {
    const statCard = createStatCard(d);
    grid.appendChild(statCard);
  });
};

const removeActiveFilter = () => {
  filters.forEach((filter) => {
    filter.classList.remove("active");
  });
};

filters.forEach((filter) => {
  if (filter.dataset.filter == activeFilter) {
    filter.classList.add("active");
  }
  filter.addEventListener("click", (e) => {
    e.preventDefault();
    const newfilter = filter.dataset.filter;
    if (newfilter) {
      removeActiveFilter();
      activeFilter = newfilter;
      filter.classList.add("active");
      createCards(data);
    }
  });
});

const data = await fetchData();
createCards(data);
