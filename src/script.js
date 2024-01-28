const styles = [
    {
        ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 30, 31, 26],
        background: '#ece1cc',
        hover: '#F5F5F5',
        stroke: '#ffffff',
        label: 'Zapad'
    },
    {
        ids: [10, 11, 12, 13,15, 16, 19, 20, 21, 22, 25, 27, 28, 29, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 58, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78],
        background: '#d9c298',
        hover: '#F5F5F5',
        stroke: '#ffffff',
        label: 'Stred'
    },
    {
        ids: [14, 17, 18, 23, 24, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67,68],
        background: '#c6a465',
        hover: '#F5F5F5',
        stroke: '#ffffff',
        label: 'Vychod'
    }
]

const legend = document.querySelector(".svg-map-legend");
function appendToLegend(style) {
    const wrapper = document.createElement("div")
    wrapper.style.padding='0.5rem'
    wrapper.style.display="flex";
    wrapper.style.alignItems="center";

    const circle = document.createElement("div")
    wrapper.appendChild(circle);
    circle.style.display="inline-block";
    circle.style.marginRight="5px";
    circle.style.borderRadius="50%";
    circle.style.width="20px";
    circle.style.height="20px";
    circle.style.backgroundColor=style.background;

    const label = document.createElement('span')
    label.textContent = style.label
    wrapper.appendChild(label)

    legend.style.display="flex"
    legend.style.justifyContent="center"
    legend.appendChild(wrapper);
}

const element = document.querySelector("#svg-map");
element.addEventListener("load", function () {
  console.log("SVG loaded");
  const svgElement = element.contentDocument;
  svgMap.init(svgElement);
  for (var i=0; i<styles.length; i++) {
    appendToLegend(styles[i]);
    for (var j=0; j<styles[i].ids.length; j++) {
      svgMap.changeBackground(styles[i].ids[j], styles[i].background);
      svgMap.changeStroke(styles[i].ids[j], styles[i].stroke);
      svgMap.hoverStyle(styles[i].ids[j], styles[i].hover, styles[i].background);
    }
  }
});