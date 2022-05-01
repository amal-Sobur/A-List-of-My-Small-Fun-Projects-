
    
      function getRandom () { 
        let hexValueDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        hex = "#"

        for (i = 0; i < 6; i++) { 
           const index = Math.floor(Math.random() * hexValueDigits.length);
                hex += hexValueDigits[index];
       }
        }

        function changeColor () {
            getRandom();
            document.getElementById("main").style.backgroundColor = hex;
            document.getElementById("hex-number").innerHTML = hex;
        }
                 






