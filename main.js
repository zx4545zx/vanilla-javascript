import "./style.css";
import data from "./data.json";

document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  render(app, data);
});

function render(targetDom, data) {
  data.forEach((v) => {
    let htmlStr = `
    <div class="card block mb-6">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="${v.poster}"
              alt=""
            />
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${v.code} ${v.name}</p>
              <p class="subtitle is-6">Actresses: @${v.actresses} | Studio: ${v.studio}</p>
            </div>
          </div>
        </div>

        <div class="content">
          <div id="videos" class="videos card">
            <video width="100%" controls>
              <source src="${v.source}" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    
    `;
    targetDom.insertAdjacentHTML("beforeend", htmlStr);
  });
}
