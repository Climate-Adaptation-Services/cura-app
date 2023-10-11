import { c as create_ssr_component, a as subscribe, b as each, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const datalaag = writable("Seasonal average temperature");
const Sidepanel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".keuzes.svelte-8vaosl{margin-top:1vh;font-size:2vh}h2.svelte-8vaosl{font-size:2.6vh}",
  map: null
};
const Sidepanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $datalaag, $$unsubscribe_datalaag;
  $$unsubscribe_datalaag = subscribe(datalaag, (value) => $datalaag = value);
  const options = [
    "Seasonal average temperature",
    "Maximum temperature",
    "Maximum rainfall in 24h",
    "Sea level rise",
    "Storms and tropical cyclones",
    "Storm surges"
  ];
  $$result.css.add(css$1);
  $$unsubscribe_datalaag();
  return `<section><h2 class="svelte-8vaosl" data-svelte-h="svelte-auzhb7">Choose a theme:</h2> ${each(options, (option) => {
    return `<label class="keuzes svelte-8vaosl"><input type="radio" name="laag"${add_attribute("value", option, 0)}${option === $datalaag ? add_attribute("checked", true, 1) : ""}> ${escape(option)} </label>`;
  })} </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1qvq1jv{color:'#333';font-size:5vh}.App.svelte-1qvq1jv{width:100%;height:100%;background:whitesmoke;display:flex}.sidepanel.svelte-1qvq1jv{display:flex;flex-direction:column;padding-left:2vw;padding-right:4vw;padding-top:25vh}.main_panel.svelte-1qvq1jv{flex:2;display:flex;flex-direction:column}.infographic-container.svelte-1qvq1jv{margin:1em 0;height:100%;width:100%;position:relative}.infographic.svelte-1qvq1jv{max-height:100%;max-width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imageLink;
  let $datalaag, $$unsubscribe_datalaag;
  $$unsubscribe_datalaag = subscribe(datalaag, (value) => $datalaag = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  imageLink = $datalaag === "Seasonal average temperature" ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Seasonal%20average%20temperature.PNG" : $datalaag === "Maximum temperature" ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Maximum%20temperature.PNG" : $datalaag === "Maximum rainfall in 24h" ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Maximum%20rainfall%20in%2024h.PNG" : $datalaag === "Sea level rise" ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Sea%20level%20rise.PNG" : $datalaag === "Storms and tropical cyclones" ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Storms%20and%20tropical%20cyclones.PNG" : $datalaag === "Storm surges" ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Storm%20surges.PNG" : "no image";
  $$unsubscribe_datalaag();
  return `<div class="App svelte-1qvq1jv"><div class="sidepanel svelte-1qvq1jv">${validate_component(Sidepanel, "Sidepanel").$$render($$result, {}, {}, {})}</div> <div class="main_panel svelte-1qvq1jv"><h1 class="svelte-1qvq1jv" data-svelte-h="svelte-1e94uko">Climate change in Curacao</h1> <div class="infographic-container svelte-1qvq1jv"><img class="infographic svelte-1qvq1jv"${add_attribute("src", imageLink, 0)}></div></div> </div>`;
});
export {
  Page as default
};
