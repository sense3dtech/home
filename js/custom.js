var data = {
  labels: ['TAM', 'SAM', 'SOM'],
  datasets: [{
    label: 'Bar Chart',
    backgroundColor: ['#100E26', '#100E26', '#100E26'], // Red color for all labels
    borderColor: '#FF0000', // Border color for the bars
    data: [3000000000, 1500000000, 150000000]
  }]
};

// Options for the bar chart
var options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: '#FF0000' // Set the color of the tick labels to red
      }
    },
    x: {
      ticks: {
        color: '#FF0000' // Set the color of the bottom labels to red
      }
    }
  }
};


// Get the canvas element and create the bar chart
var ctx = document.getElementById('barChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});






  // video
  document.querySelector('.play-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.closest('a').getAttribute('href'), '_blank');
  });


  // aos
  AOS.init();



  // whatsapp
  $(function () {
    $('.floating-wpp').floatingWhatsApp({
      phone: '+91-9560033900',
      popupMessage: 'chat with us',
      showPopup: true,
      position: window.innerWidth < 768 ? 'right' : 'left',
      message: 'Message To Send',
      headerTitle: 'Header Title'
    });
  });