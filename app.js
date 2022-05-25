const adviceNumber = document.querySelector("#adviceNumber");
const advice = document.querySelector("#advice");
const button = document.querySelector("#button");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    advice.textContent = data.slip.advice;
    adviceNumber.textContent = data.slip.id;
  } catch (e) {
    console.error(e);
  } finally {
    // console.log(data);
    // console.log(data.slip.advice);
  }
}

// async function run() {
//   try {
//     await getAdvice();
//   } catch (e) {

//   }
// }

button.addEventListener("click", () => {
  getAdvice();
});