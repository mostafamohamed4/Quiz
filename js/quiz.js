
// export class Quiz {
//     constructor(resultsArr, amount) {
//         this.currentElement = document.getElementById("current");
//         this.totalAmountElemnt = document.getElementById("totalAmount");
//         this.questionElement = document.getElementById("question");
//         this.rowAnswerElement = document.getElementById("rowAnswer");
//         this.resultsArr = resultsArr;
//         this.amount = amount;
//         this.index = 0;
//         this.score=0;
//         this.showQuiz()
//         this.nextElement = document.getElementById("next");
//         this.nextElement.addEventListener("click", () => { this.next() })

//     }

//     showQuiz() {
//         this.currentElement.innerHTML = this.index + 1;
//         this.totalAmountElemnt.innerHTML = this.amount;
//         this.questionElement.innerHTML = this.resultsArr[this.index].question;
//         let ansArray = [this.resultsArr[this.index].correct_answer, ...this.resultsArr[this.index].incorrect_answers]
//         let newAns = this.ranAns(ansArray)
//         console.log(newAns);
//         this.displayAns(newAns)
//     }

//     displayAns(ans) {
//         var cartoonae = ``;
//         for (var i = 0; i < ans.length; i++) {
//             cartoonae += `<input type="radio" class="form-check-input" name="answer" id="q${i}" value="${ans[i]}">
//           ${ans[i]} <br/>`
//         }
//         this.rowAnswerElement.innerHTML = cartoonae
//     }

//     ranAns(ansArray) {

//         let ranNums = [],
//             i = ansArray.length,
//             j = 0;

//         while (i--) {
//             j = Math.floor(Math.random() * (i + 1));
//             ranNums.push(ansArray[j]);
//             ansArray.splice(j, 1);

//         }
//         return ranNums
//     }




//     checkAns() {
//         var choices = Array.from(document.getElementsByName("answer"));
//         choices = choices.filter((e) => { return e.checked });

//         if (choices.length == 0) {
//             $(".alert").fadeIn(500)
//         }

//         else {
//             $(".alert").hide()
//             if (choices[0].value == this.resultsArr[this.index].correct_answer) {
//                 $("#Correct").fadeIn(700, () => {
//                     $("#Correct").hide()
//                 });
//                 this.score++;
//             }
//             else {
//                 $("#inCorrect").fadeIn(700, () => {
//                     $("#inCorrect").hide()
//                 });
//             }
//             this.nextQusetion()

//         }
//     }
//     nextQusetion() {
//         this.index++;
//         console.log(this.index);
//         console.log(this.amount);
//        if (this.index < this.amount){
//         console.log('yes');
//         this.showQuiz()
//        }
//        else{
//         console.log('yes');
//         this.finish()
//        }
//     }

//     next() {
//         this.checkAns()

//     }

//     finish() {
//         console.log('finish');
//         $("#quiz").fadeOut(500,()=>{
//             $("#finish").fadeIn(500,()=>{
//               $("#score").text(this.score)
//             })
//         })
//     }

// }






export class Quiz {
    constructor(Number, resultsArr) {
        this.current = document.getElementById("current")
        this.totalAmount = document.getElementById("totalAmount")
        this.question = document.getElementById("question")
        this.rowAnswer = document.getElementById("rowAnswer")
        this.next = document.getElementById("next")
        this.Number = Number
        this.resultsArr = resultsArr
        this.index = 0;
        this.score = 0
        this.next.addEventListener('click', () => { this.nextAnwser() })
        this.showquiz()
    }

    showquiz() {
        this.current.innerHTML = this.index + 1
        this.question.innerHTML = this.resultsArr[this.index].question
        this.totalAmount.innerHTML = this.Number
        let ansArray = [this.resultsArr[this.index].correct_answer, ...this.resultsArr[this.index].incorrect_answers]
        let ansarray = this.ranAns(ansArray)
        this.displayanser(ansarray)
    }
    displayanser(arr) {
        let temp = ''
        for (let i = 0; i < arr.length; i++) {
            temp += `  <div class="form-check">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" name="answer" id="${i}" value="${arr[i]}">
                ${arr[i]}
            </label>
        </div>`
        }
        document.getElementById("rowAnswer").innerHTML = temp
    }

    ranAns(arr) {

        let ranNums = [],
            i = arr.length,
            j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(arr[j]);
            arr.splice(j, 1);
        }
        return ranNums

    }
    check() {
        let checkAnswer = Array.from(document.getElementsByName("answer"))
        checkAnswer = checkAnswer.filter((e) => { return e.checked })
        if (checkAnswer.length == 0) {
            $('.alert').fadeIn(500)
        } else {
            $('.alert').hide()
            if (checkAnswer[0].value == this.resultsArr[this.index].correct_answer) {
                console.log("HELO");
                $('#Correct').fadeIn(500, () => {
                    $('#Correct').hide()
                })
                this.score++

            } else {
                console.log("EEROR");
                $('#inCorrect').fadeIn(500, () => {
                    $('#inCorrect').hide()
                })
            }
            this.nextquiz()

        }
    }
    nextAnwser() {
        this.check()
    }

    nextquiz() {
        this.index++
        this.index < this.Number ? this.showquiz() : this.finich()

    }
    finich() {
        $('#quiz').fadeOut(500, () => {
            $('#finish').fadeIn(500, () => {
                $('#score').text(this.score)
            })
        })
    }
    
}

