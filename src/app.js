/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generateDomainNames() {
  let pronouns = ["the", "our", "my", "how"];
  let adjectives = ["great", "big", "slimey", "hairy"];
  let nouns = ["jogger", "raccon", "building", "dog"];
  let ends = [".com", ".net", ".org", ".us"];
  const domainNames = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const end of ends) {
          const domainName = `${pronoun}${adjective}${noun}${end}`;
          domainNames.push(domainName);
        }
      }
    }
  }
  return domainNames;
}
window.onload = function() {
  const button = document.querySelector("#domainbutton");
  const p = document.querySelector("#domain");
  button.onclick = () => {
    p.innerHTML = generateDomainNames().join(
      '<marquee><i class="fa-solid fa-flag-checkered" style="color: #511F1F;"></i></marquee>'
    );
  };
};
