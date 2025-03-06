
async function run() {
    event.preventDefault();

    const MODEL_URL = "../data/heart-model.json";
    const model = await tf.loadLayersModel(MODEL_URL);
    console.log("model loaded");

    const age = Number(document.getElementById("age").value);
    const sex = Number(document.getElementById("sex").value);
    const cp = Number(document.getElementById("cp").value);
    const trestbps = Number(document.getElementById("trestbps").value);
    const chol = Number(document.getElementById("chol").value);
    const fbs = Number(document.getElementById("fbs").value);
    const restecg = Number(document.getElementById("restecg").value);
    const thalach = Number(document.getElementById("thalach").value);
    const exang = Number(document.getElementById("exang").value);
    const oldpeak = Number(document.getElementById("oldpeak").value);
    const slope = Number(document.getElementById("slope").value);
    const ca = Number(document.getElementById("ca").value);
    const thal = Number(document.getElementById("thal").value);

    const input = tf.tensor2d([
      [
        age,
        sex,
        cp,
        trestbps,
        chol,
        fbs,
        restecg,
        thalach,
        exang,
        oldpeak,
        slope,
        ca,
        thal,
      ],
    ]);

    const result = model.predict(input).arraySync()[0];
    my_modal_2.showModal();
    var rslt = "";
    let modalColor;
    let msg = '';
    if (result >= 0.5) {
      rslt +=
        `<div class='text-center'>
        <img src="../assets/—Pngtree—broken heart icon symbol_6270104.png" />
        </div>`;
        modalColor = 'text-red-500'
        msg = `Given this risk level, you should adopt preventive measures to reduce your chances of heart disease. It's important to consult with a healthcare professional to discuss your risk factors and develop a personalized plan to improve your heart health.`
      } else {
        rslt +=
        `<div class='text-center'>
        <img src="../assets/—Pngtree—3d heart with thumbs up_20454057.png" />
        </div>`;
        modalColor = 'text-green-500'
        msg = `Given this risk level, it's advisable to consult with a healthcare professional for a comprehensive evaluation and to discuss preventive measures.`
    }
    const prsn = result * 100;
    rslt += `<div class='text-center text-black'>Your AI-based heart disease risk assessment indicates an <span class="${modalColor} font-bold text-lg">${prsn.toFixed(2)}%</span> probability of developing heart disease. ${msg}</div>`;

    document.getElementById("rslt-text").innerHTML = rslt;
    document.querySelector('#my_modal_2_box').classList.add(modalColor) 
  }

  
  document.addEventListener('DOMContentLoaded', () => {
    const profEmail = document.querySelector('#email-profile');
    console.log(3434, profEmail, localStorage.getItem('email'));
    profEmail.innerHTML = localStorage.getItem('email');
  })

  

//   const analyzeBtn = document.querySelector('#analyzeBtn-btn');
//   analyzeBtn.addEventListener('click', () => {
//     ;
//     run()
//   })

