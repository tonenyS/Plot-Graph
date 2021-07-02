window.onload = function () {
  var dps = []; //dataPoints.

  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "TEST PLORT GRAPH",
    },
    data: [
      {
        type: "line",
        dataPoints: dps,
      },
    ],
  });

  function addDataPointsAndRender() {
    xValue = Number(document.getElementById("xValue").value);
    yValue = Number(document.getElementById("yValue").value);
    zValue = Number(document.getElementById("zValue").value);
    dps.push({
      x: xValue,
      y: yValue,
    });
    chart.render();
  }

  var renderButton = document.getElementById("renderButton");
  renderButton.addEventListener("click", addDataPointsAndRender);
};
