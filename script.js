// //1)
// class PrintMachine {
//   constructor (fontSize, fontColor, fontFamily) {
//     this._fontSize = fontSize;
//     this._fontColor = fontColor;
//     this._fontFamily = fontFamily;
//   }
//   print (str) {
//     return document.write(`<p style="font-size: ${this._fontSize}px; color: ${this._fontColor}; font-family: ${this._fontFamily};">${str}</p>`)
//   }
// }
//
// let printMachine = new PrintMachine(21, "tomato", "Georgia")
// console.log(printMachine.print("Hello"))

//2)
class News {
  constructor (zag, text, tags, publishDate) {
    this._zag = zag;
    this._text = text;
    this._tags = tags;
    this._publishDate = publishDate;
  }
  getDay () {
  let currentDay = new Date();
  let newDay = new Date(this._publishDate);
  if (currentDay.toDateString() === newDay.toDateString()) return "today";
  else return Math.floor((currentDay.getTime() - newDay.getTime())/86400000) + " days ago";
  }
  print () {
    document.write(`<div style="width: 400px;"><h1>${this._zag}</h1><span>${this.getDay()}</span><p>${this._text}</p><p>${this._tags}</p></div>`)
  }
}

let news = new News("Какой-то заголовок", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus impedit iste molestias officia tempora voluptatem!", "#html, #css, #js", "2022.04.20")
console.log(news.print())
