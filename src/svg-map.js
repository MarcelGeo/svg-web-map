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
  };
})();
