function changeText() {
    var paragraph = document.getElementById("clickme");
    var paragraph_before_text = "click me"

    if (paragraph.innerHTML == "click me") {
        paragraph.innerHTML = "click me again";
        paragraph.style.color = "blue"; // Optional: change text color
        console.log(Math.random());
        if ((Math.random()) > 0.95){
            window.location = "/jumpscare"
        }
        
    } else {
        paragraph.innerHTML = paragraph_before_text;
        paragraph.style.color = "";
    }
}
