/**
 * Initializes the SVG map
 */
const svgMap = (function () {
  /**
   * SVG element
   */
  let svgElement = null;

  function resetBackground(color) {
    // Return paths of svg element and setup random color for it
    const paths = svgElement.getElementsByTagName("path");
    //get items from htmlCollection
    const items = Array.from(paths);
    for (var i = 0; i < items.length; i++) {
      items[i].style.fill = color || "#ffffff";
    }
  }

  /**
   * Changes bg color of SVG element
   */
  function changeBackground(id, color) {
    // Return paths of svg element
    const paths = svgElement.getElementsByTagName("path");
    if (paths[id]) {
      paths[id].style.fill = color || "#ffffff";
    }
  }

  function changeStroke(id, color) {
    // Return paths of svg element
    const paths = svgElement.getElementsByTagName("path");
    if (paths[id]) {
      paths[id].style.stroke = color || "#ffffff";
    }
  }

  function hoverStyle(id, hoverColor, unhoverColor) {
    // Return paths of svg element
    const paths = svgElement.getElementsByTagName("path");
    if (paths[id]) {
      paths[id].addEventListener("mouseenter", function (e) {
        e.target.style.fill = hoverColor;
      });
      paths[id].addEventListener("mouseleave", function (e) {
        e.target.style.fill = unhoverColor;
      });
    }
  }

  function tooltip(id, tooltipRows, coefX, coefY, bgColor) {
    const buffer = 2;
    const width = 200;

    let tooltip = document.querySelector(".svg-map-tooltip");
    if (!tooltip) {
      // create tooltip first time
      tooltip = document.createElement("div");
      tooltip.className = "svg-map-tooltip";
      tooltip.style.display = "none";
      tooltip.style.position = "fixed";
      tooltip.style.width = "max-content";
      tooltip.style.minWidth = "100px";
      tooltip.style.maxWidth = width + "px";
      tooltip.style.height = "auto";
      tooltip.style.backgroundColor = bgColor || "red";
      tooltip.style.padding = "0.25rem";
      tooltip.style.borderRadius = "0.5rem";
      tooltip.style.color = "#ffffff";

      document.body.appendChild(tooltip);
    }

    // Return paths of svg element
    const paths = svgElement.getElementsByTagName("path");
    if (paths[id]) {
      paths[id].addEventListener("mouseenter", function (e) {
        e.stopPropagation();
        var screenWidth = window.innerWidth;
        var x = e.clientX + coefX + buffer
        var y = e.clientY + coefY + buffer

        for (var i = 0; i < tooltipRows.length; i++) {
          const p = document.createElement("p");
          p.textContent = tooltipRows[i];
          p.style.margin = "0.25rem";
          tooltip.style.overflowWrap = 'anywhere'
          tooltip.appendChild(p);
        }

        tooltip.style.display = "block";
        // trick for calculating of current tooltip width
        tooltip.style.visibility = "hidden"
        if (x + tooltip.clientWidth > screenWidth) {
          x = x - coefX - tooltip.clientWidth
        }
        tooltip.style.visibility = "visible"
        tooltip.style.top = y + "px";
        tooltip.style.left = x + "px";
      });
      paths[id].addEventListener("mouseleave", function (e) {
        e.stopPropagation();
        const tooltip = document.querySelector(".svg-map-tooltip");
        tooltip.style.display = "none";
        tooltip.style.top = "-1000px";
        tooltip.style.left = "-1000px";
        tooltip.textContent = "";
      });
    }
  }

  /**
   * Initializes SVG map
   * @param {Element} element - SVG element
   */
  function init(element) {
    svgElement = element;
  }

  return {
    init: init,
    svgElement: svgElement,
    changeBackground: changeBackground,
    changeStroke: changeStroke,
    hoverStyle: hoverStyle,
    tooltip: tooltip,
  };
})();
