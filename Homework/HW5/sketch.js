function setup() {

   noCanvas();
   input = createInput('It was a dark and stormy night.');
   button = createButton('submit');
   input.changed(processRita);
   button.mousePressed(processRita);
   input.size(200);

}

function processRita() {

    var s = input.value();
    var rs = new RiString(s);
    var lexicon = new RiLexicon(s);
    var words = rs.words();
    var pos = rs.pos();

    var output = '';
    for (var i = 0; i < words.length; i++) {

       if(/nn.*/.test(pos[i])) {

         output += lexicon.randomWord(pos[i]);

       }  else {

         output += words[i];

       }

      output += " ";

    }

    createP(output);



}
