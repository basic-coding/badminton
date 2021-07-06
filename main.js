var Name_Of_The_Guest_Array = [];
function submit() {
   var Guest_name = document.getElementById("text1").value;
   Name_Of_The_Guest_Array.push(Guest_name);
   document.getElementById("list1").innerHTML = Name_Of_The_Guest_Array;
   console.log(Name_Of_The_Guest_Array);
   var length_of_the_array = Name_Of_The_Guest_Array.length;
    console.log(length_of_the_array);
}
function show() {
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("list2").innerHTML = i.toString();
}
function sort() {
    Name_Of_The_Guest_Array.sort();
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("list3").innerHTML = i.toString();
}
function search() {
    var s = document.getElementById("text2").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++) {
        if(s==Name_Of_The_Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("list4").innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}

