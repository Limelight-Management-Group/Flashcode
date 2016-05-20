  $(document).ready(function() {
  console.log("document loaded.");

  var hidden = $(".flip3d:has(.toggle)").hide();
  // var display = $(".flip3d:has(.toggle)").show();

  var currentCard = 0;
  $(".back").click(function() {
    $(".flip3d").eq(currentCard).hide();
    if (currentCard < 7){
      currentCard += 1;
    } else {
      currentCard = 0;
    }
    $(".flip3d").eq(currentCard).show();

  });
  });


  var answers = new Array(9);
  answers[0] = "1. A way to target an element by it's Id";
  answers[1] = "2. The by Id targets by the id name and the query selector can select any element";
  answers[2] = "3. Var is a way to store data";
  answers[3] = "4. Global refers to the outer scope that is accessible to all scopes; local is limited to the scope the var is entered into.";
  answers[4] = "5. Query selector is limited to returning the first result, while the all will capture all elements of specified type";
  answers[5] = "6. They are used to build other functions--a type of template to unify source and minimize input";
  answers[6] = "7. It depends on when you need your function called, because of the way that it's hoisted."
  answers[7] = "8. A group of elements that can contain all data types. "
  answers[8] = "9. You use the index number and Array name. "
  // answers[9] = "10."
  // answers[10] = "11."
  // answers[11] = "12."
  // answers[12] = "13."
  // answers[13] = "14."




  var questions = new Array(9);
  questions[0] = "q1";
  questions[1] = "q2";
  questions[2] = "q3";
  questions[3] = "q4";
  questions[4] = "q5";
  questions[5] = "q6";
  questions[6] = "q7";
  questions[7] = "q8";
  questions[8] = "q9";
  // questions[9] = "q3";
  // questions[10] = "q3";
  // questions[11] = "q3";
  // questions[12] = "q3";
  // questions[13] = "q3";


  function checkedQuestions() {
    console.log("hello from checked questions");
    var qs = document.querySelectorAll(".radio");
     // console.log(qs[1].checked);
    var noOfRadios = qs.length;
    var text2display = "";
    for (var i =0; i < noOfRadios; i++) {
      if (qs[i].checked) {
        if (qs[i].value=="correct"){
          // console.log('value tested correct');
          text2display = text2display + "That is correct";
          document.getElementById("answers").innerHTML = text2display;
        }
        else {
          // console.log('value tests incorrect');
          text2display = answers[i];
          console.log(text2display)
          document.getElementById("answers").innerHTML = "That is not correct.";

          break;
        }
      }
    }
  }

  function checkAll() {
    for (var i = 0; i < questions.length; i++) {
      checkedQuestions(questions[i]);
    }
    quiz.Answers.value ="You Rock!";


    //your code here

  // function addListeners() {
  // //   var submit = document.getElementById("submit");
  // //   submit.addEventListener("click", btnSubmit)
  // // //add my function
  // // function btnSubmit() {
  // //   alert("submitted");
  // // }


  // // var submit = document.getElementById("clear");
  // //   submit.addEventListener("click", btnSubmit2)
  // // //add my function
  // // function btnSubmit2() {
  // //   alert("cleared");
  // // }

  // };


    }

//get

// hidden.addEventListener("click", changeClass)
// function changeClass() {
//   for (var i =0; i < hidden; i++) {
//     hidden.setAttribute(".hidden", ".show");
//   }
// };
// window.onload = addListeners;
// function next() {
// var hidden = document.querySelectorAll(".hidden");
// $(".toggle").click(function() {
//     $( ".hidden" ).toggle( "fast", function() {
//       for (var i =0; i < hidden.length; i++) {
//     hidden.setAttribute("hidden", ".show");
// }

// });
// })
// };
// });
  // $( ".show" ).toggle( "slow", changeClass) {
  //   or (var i =0; i < hidden; i++) {
  //   hidden.setAttribute(".hidden", ".show");
  // });




// <button>Toggle 'em</button>
// <p>Hiya</p>
// <p>Such interesting text, eh?</p>

// <script>
// $( "button" ).click(function() {
//   $( "p" ).toggle( "slow" );
// });
// </script>



// <div id="clickme">
//   Click here
// </div>
// <img id="book" src="book.png" alt="" width="100" height="123">
// We will cause .toggle() to be called when another element is clicked:

// 1
// 2
// 3
// 4
// 5
// $( "#clickme" ).click(function() {
//   $( "#book" ).toggle( "slow", function() {
//     // Animation complete.
//   });
// });





