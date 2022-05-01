
        let greenClicks = [];
        let blueClicks = [];
        let redClicks = [];

        function clickGreen () {
            greenClicks.push("click")
            document.getElementById("click-green").innerHTML= greenClicks.length;

         
        
        }

        let clickBlue = () => {
            blueClicks.push("click")
            document.getElementById("click-blue").innerHTML= blueClicks.length;
        }
       
        let clickRed = () => {
            redClicks.push("click")
            document.getElementById("click-red").innerHTML= redClicks.length;
        }

        let reset = () => {
            let greenClicks = [];
            let blueClicks = [];
            let redClicks = [];
            document.getElementById("click-red").innerHTML= redClicks.length;
            document.getElementById("click-blue").innerHTML= blueClicks.length;
            document.getElementById("click-green").innerHTML= greenClicks.length;
        }
    
       
       