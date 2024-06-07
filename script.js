
   
        let result = document.getElementById("result");
        let wrongAnswers = document.getElementsByClassName("wrong-answer");
        for (let i = 0; i < wrongAnswers.length; i++) {
            wrongAnswers[i].addEventListener("click", function () {
                result.innerText = "Wrong!";
            });
        }
        let rightAnswers = document.getElementsByClassName("right-answer");
        for (let i = 0; i < rightAnswers.length; i++) {
            rightAnswers[i].addEventListener("click", function () {
                result.innerText = "Right!";
            });
        }


