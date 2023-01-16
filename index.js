function calculate(){
  let inp1 = document.getElementById("ppg1").value.split(" ");
  let inp2 = document.getElementById("ppg2").value.split(" ");

  let ppg1 = inp1[0] / inp1[1];
  let ppg2 = inp2[0] / inp2[1];

  if (ppg1 < ppg2) {
    document.getElementById("Result").innerHTML = "The first one is cheaper " + (ppg2 / ppg1).toFixed(2) + " times"
  }
  else if (ppg2 < ppg1){
    document.getElementById("Result").innerHTML = "The second one is cheaper " + (ppg1 / ppg2).toFixed(2) + " times"
  }
  else {
    document.getElementById("Result").innerHTML = "The same worth"
  }
}
