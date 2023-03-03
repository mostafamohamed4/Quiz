// import { Quiz } from "./quiz.js";


// export class Setting {
//     constructor() {
//         this.categoryElement = document.getElementById("category");
//         this.difficultyElemnt = Array.from(document.getElementsByName("difficulty"));
//         this.NumberElemnt = document.getElementById("Number");
//         this.startBtnElement = document.getElementById("startBtn")
//         this.startBtnElement.addEventListener("click", () => { this.startQuiz() })
//     }

//     async startQuiz() {
//         let category = this.categoryElement.value;
//         let difficulty = this.difficultyElemnt.filter((e) => { return e.checked })
//         let amount = this.NumberElemnt.value;
//         let resultsArr = await this.fetchApi(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty[0].value}&type=multiple`)


//         if(resultsArr.length > 0)
//         {
//             $("#setting").fadeOut(500,()=>{
//                 $("#quiz").fadeIn(500)
//             })
//             new Quiz(resultsArr,amount)
//         }

//     }


//     async fetchApi(url) {
//         let result = await fetch(url)
//         result = await result.json()
//         return result.results;
//     }
// }

import { Quiz } from "./quiz.js";


export class setting {
    constructor() {
        this.category = document.getElementById("category")
        this.difficulty = Array.from(document.getElementsByName("difficulty"));
        this.Number = document.getElementById("Number")
        this.startBtnElement = document.getElementById("startBtn")
        this.startBtnElement.addEventListener("click", () => {
            this.startquiz()
        })
    }
    async startquiz() {
        let category = this.category.value
        let difficulty = this.difficulty.filter((e) => { return e.checked });
        let Number = this.Number.value
        let resultsArr = await this.fetchApi(`https://opentdb.com/api.php?amount=${Number}&category=${category}&difficulty=${difficulty[0].value}&type=multiple`)
        console.log(resultsArr)
        if (resultsArr.length > 0) {
            $('#setting').fadeOut(500, () => {
                $('#quiz').fadeIn(500)
            })
            new Quiz(Number,resultsArr)
        }
    }

    async fetchApi(url) {
        let result = await fetch(url);
        result = await result.json();
        return result.results
    }
}
