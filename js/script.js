function init(){
  //add your javascript between these two lines of code
  function alertMe(){
    input = document.getElementById('entryinput')
    alert('Edison Chiu: ' + input.value)
    document.getElementById('textoutput').innerHTML = input.value;
  }

  //button
  document.getElementById('entrybutton').addEventListener('click', alertMe);

}
window.addEventListener('load', init);