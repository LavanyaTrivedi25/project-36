class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.message = createElement("h3")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(70, 70);
    this.option1.html("1: Everyone " );
    this.option1.position(70, 120);
    this.option2.html("2: Envelope" );
    this.option2.position(70, 140);
    this.option3.html("3: Estimate " );
    this.option3.position(70, 160);
    this.option4.html("4: Example" );
    this.option4.position(70, 180);

    this.input1.position(230, 300);
    this.input2.position(430, 300);
    this.button.position(380, 370);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
  }
}
