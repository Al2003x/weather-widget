import {citySearchForm} from "./modules/citySearchForm.js";
import { startWidget } from "./modules/widgetService.js";

const init = async (app) => {



  const widget = await startWidget();

  app.append(widget);

  citySearchForm(widget);

}

init(document.querySelector('#app'));