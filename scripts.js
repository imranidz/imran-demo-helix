import {$wrap, $element, $scrollAnimation} from "../../scripts/helpers.js";

const hero = document.querySelector('.hero');
console.log(hero);
decorate();

export function getRootPath() {
    const loc = getLanguage();
    if (loc === LANG.EN) {
      return '/blog';
    }
    return `/${loc}/blog`;
  }
  

export default function decorate($main) {

    var team = document.querySelector("body > main");
    console.log(team);
    var content = team.querySelector("main:nth-child(2) > div:first-child")

    //let bodyDiv = $element("table", [ $element("thead", [ $element("tr", [ $element("th", "Name"), $element("th", "Favorite Color") ]) ]), $element("tbody", [ $element("tr", [ $element("td", "Batman"), $element("td", "Black") ]) ]) ])

    content.append(bodyDiv)
}