class Chart {
  data = [];

  constructor(id = "#chart") {
    this.id = id;
    this.element = document.querySelector(id);
    this.fetchData().then((res) => {
      this.createChart();
    });
  }

  async fetchData() {
    try {
      const data = await fetch("./data.json").then((response) =>
        response.json()
      );
      return (this.data = data);
    } catch (error) {
      new Error(error);
    }
  }

  createChart() {
    const chartContainer = document.createElement("div");
    chartContainer.classList.add("chart-container");
    if (!this.data) return false;
    this.data.map((d) => {
      const chartItem = this.createChartItem(d);
      chartContainer.appendChild(chartItem);
    });
    console.log(chartContainer)
    this.element.appendChild(chartContainer);
  }

  calculBarHeight(value) {
    const maxValue = Math.max(...this.data.map((d) => d.amount));
    this.maxValue = maxValue;
    return (value * 100) / maxValue;
  }

  removeActiveTooltip() {
    const itemActive = document.querySelectorAll(".chart-item");
    const tooltopActive = document.querySelectorAll(".chart-tooltip");
    itemActive.forEach((e) => e.classList.remove('active'));
    tooltopActive.forEach((e) => e.remove());
  }

  createChartItem(data) {
    const chartItem = document.createElement("div");
    chartItem.classList.add("chart-item");
    if (this.maxValue === data.amount) {
      chartItem.classList.add("accent");
    }

    const bar = document.createElement("span");
    bar.classList.add("bar");
    bar.style.height = `${this.calculBarHeight(data.amount)}%`;

    // const tooltip = document.createElement("span");
    // tooltip.classList.add("chart-tooltip");
    // tooltip.textContent = `$${data.amount}`;

    const month = document.createElement("span");
    month.classList.add("month");
    month.textContent = data.day;

    // chartItem.appendChild(tooltip);
    chartItem.appendChild(bar);
    chartItem.appendChild(month);

    bar.addEventListener("click", () => {
      this.removeActiveTooltip();
      const tooltip = document.createElement("span");
      tooltip.classList.add("chart-tooltip");
      tooltip.textContent = `$${data.amount}`;
      chartItem.classList.toggle("active");
      chartItem.prepend(tooltip);
    });

    return chartItem;
  }
}

const chart = new Chart();
