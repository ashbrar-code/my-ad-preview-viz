const dscc = require('dscc');  // Looker Studio Community Viz library

function drawViz(data) {
  const container = document.getElementById('viz');
  container.innerHTML = ""; // clear previous content

  if (!data.tables.DEFAULT || data.tables.DEFAULT.length === 0) {
    container.innerHTML = "<p>No data available</p>";
    return;
  }

  // take first row for simplicity
  const iframeUrl = data.tables.DEFAULT[0].iframe_url;

  const iframe = document.createElement("iframe");
  iframe.src = iframeUrl;
  iframe.width = "540";
  iframe.height = "690";
  iframe.style.border = "none";
  iframe.scrolling = "yes";

  container.appendChild(iframe);
}

// subscribe to Looker Studio data
dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});
