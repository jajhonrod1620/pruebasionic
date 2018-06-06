import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [
    {
      titulo: "HTML 5",
      texto: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard.",
      imagen: "../../assets/html5.png"
    },
    {
      titulo: "HTML 5",
      texto: "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
      imagen: "../../assets/css3.png"
    },
    {
      titulo: "HTML 5",
      texto: "JavaScript to program the behavior of web pages. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known.",
      imagen: "../../assets/js.png"
    }
  ];

}
