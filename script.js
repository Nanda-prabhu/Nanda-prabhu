$('#section-1').ripples({
    resolution: 300,
    perturbance: 0.05,
});

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 700) nav.className = 'navbar navbar-expand-lg navbar-dark'; else nav.className = 'scroll navbar navbar-expand-lg navbar-dark';
  };

// new kursor({
//     type: 4,
//     removeDefaultCursor: false,
//     color: '#fff',
//     // el: '#section-1'
// })



// $('#section-1').ripples({
//     resolution: 512,
//     dropRadius: 20,
//     perturbance: 0.04,
//   });

// $('#section-1').ripples({
//   resolution: 400,
//   dropRadius: 20,
//   perturbance: 0.04,
//         // strength: 1000,
// });