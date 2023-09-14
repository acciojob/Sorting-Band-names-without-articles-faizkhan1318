//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
  let regexp = /\bthe\b|\ban\b|\ba\b/gi;

  let articleLessArray = [];
  let mp = {};

  for(let i=0; i<touristSpots.length; i++){
    //trim is used for remove the space from front side
    let articleLessItem = touristSpots[i].replace(regexp, "").trim();
    articleLessArray.push(articleLessItem);

    mp[articleLessItem] = touristSpots[i];
  }

  articleLessArray.sort();
  let anss = [];

  for(let i of articleLessArray){
    anss.push(mp[i]);
  }
  console.log(anss);
