
let stars = "";

for(let i = 0; i < 10; i++) {

  console.log(stars);

  stars = stars + "*"

  if(i > 5) {
    stars = stars + "&";
  }
}