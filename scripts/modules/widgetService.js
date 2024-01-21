import {fetchForecast, fetchWeather} from "./apiService.js";
import {renderWidgetForecast, renderWidgetOther, renderWidgetToday, showError} from "./render.js";

export const startWidget = async () => {

  const widget = document.createElement('div');
  widget.classList.add('widget');

  const city = "Пролетарск";

  const dataWeather = await fetchWeather(city);

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError(dataWeather.error);
  }

  const dataForecast = await fetchForecast(city);

  if (dataWeather.success) {
    renderWidgetForecast(widget, dataForecast.data);
  } else {
    showError(dataForecast.error);
  }

  return widget

};