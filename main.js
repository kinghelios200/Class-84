notsa=[];
function submit(){
    var n1 = document.getElementById("name_1").value;
    var n2 = document.getElementById("name_2").value;
    var n3 = document.getElementById("name_3").value;
    var n4 = document.getElementById("name_4").value;
    
    notsa.push(n1);
    notsa.push(n2);
    notsa.push(n3);
    notsa.push(n4);

    console.log(notsa);

    document.getElementById("display_name").innerHTML = notsa
}