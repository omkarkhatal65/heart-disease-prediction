
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
    if (result >= 0.5) {
      rslt +=
        "<div class='text-center'><strong>Positive</strong></div>";
        modalColor = 'bg-red-300'
    } else {
      rslt +=
        "<div class='text-center'><strong>Negative</strong></div>";
        modalColor = 'bg-green-300'
    }
    const prsn = result * 100;
    rslt += "<div class='text-center'>Probability: " + prsn.toFixed(2) + "% </div>";

    document.getElementById("rslt-text").innerHTML = rslt;
    document.querySelector('#my_modal_2_box').classList.add(modalColor) 
  }

  const profEmail = document.querySelector('#email-profile');
  profEmail.innerHTML = localStorage.getItem('email');


//   const analyzeBtn = document.querySelector('#analyzeBtn-btn');
//   analyzeBtn.addEventListener('click', () => {
//     ;
//     run()
//   })

