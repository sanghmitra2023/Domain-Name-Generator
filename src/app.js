/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const prefix = ["the", "my", "our"];
const adjectives = ["cool", "amazing", "bestever", "super"];
const noun = ["website", "blog", "domain", "app"];
const tld = [".com", ".org", ".net", ".biz"];
for (let i = 0; i < prefix.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let m = 0; m < tld.length; m++) {
        console.log(`${prefix[i]}${adjectives[j]}${noun[k]}${tld[m]}`);
      }
    }
  }
}
