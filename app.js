d3.csv(
  "https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv",
  function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }

    var z_data = [];
    for (i = 0; i < 24; i++) {
      z_data.push(unpack(rows, i));
    }

    var data = [
      {
        z: z_data,
        type: "surface",
      },
    ];

    var layout = {
      title: "Mt Bruno Elevation",
      autosize: false,
      width: 2000,
      height: 900,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
      },
    };
    Plotly.newPlot("myDiv1", data, layout);
  }
);

var x = [0, 0, 1, 1, 0, 0, 1, 1];
var y = [0, 1, 1, 0, 0, 1, 1, 0];
var z = [0, 0, 0, 0, 1, 1, 1, 1];
// var i = [7, 0, 0, 0, 4, 4, 2, 6, 4, 0, 3, 7];
// var j = [3, 4, 1, 2, 5, 6, 5, 5, 0, 1, 2, 2];
// var k = [0, 7, 2, 3, 6, 7, 1, 2, 5, 5, 7, 6];

var range_x = [0, 5];
var range_y = [0, 5];
var range_z = [0, 5];

function rectangle(x, y, z, range_x, range_y, range_z) {
  if (range_x.length !== 2 || range_y.length !== 2 || range_z.length !== 2) {
    throw "Ranges must contain 2 values";
  }
  // we will forego other checks for to limit the length of the example
  x = x.map(function (e, i) {
    return range_x[e];
  });

  y = y.map(function (e, i) {
    return range_y[e];
  });

  z = z.map(function (e, i) {
    return range_z[e];
  });

  return { x: x, y: y, z: z };
}

result = rectangle(x, y, z, range_x, range_y, range_z);

// x, y, z now represent the vertices for the rectangular box with
// the ranges specified above
x = result.x;
y = result.y;
z = result.z;

var facecolor = [
  // 'rgb(50, 200, 200)',
  // 'rgb(100, 200, 255)',
  // 'rgb(150, 200, 115)',
  // 'rgb(200, 200, 50)',
  // 'rgb(230, 200, 10)',
  // 'rgb(255, 140, 0)'
];

  facecolor2 = new Array(facecolor.length * 2);
  facecolor.forEach(function (x, i) {
  facecolor2[i * 2 + 1] = facecolor2[i * 2] = x;
});

var data = {
  x: x,
  y: y,
  z: z,
  facecolor: facecolor2,
  type: "mesh3d",
};

// Plotly.newPlot("myDiv2", data, layout);
Plotly.newPlot("myDiv2", [data]);
