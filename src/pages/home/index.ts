import { home } from "pages/home";
import template from "template";

export default function homePage() { 
  template.render(home.index, {}, "app");

  
  
}