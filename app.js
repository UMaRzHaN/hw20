let calc = document.querySelector(".calc");
let box = document.querySelector(".box");
let a;

calc.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    a = calc.value;
    const countSentanceSymbols = () => a.length;
    console.log(countSentanceSymbols(a));
    box.innerHTML = countSentanceSymbols(a);
  }
});
