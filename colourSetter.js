function changeSVGFillColor(selector, color) {
    var svgElement = document.querySelector(selector);
    if (svgElement) {
      svgElement.setAttribute("fill", color);
    } else {
      console.error("SVG element not found with selector:", selector);
    }
  }