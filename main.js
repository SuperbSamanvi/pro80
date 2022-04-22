nots_array=[];
function submit()
{

var ds_array = [];

for (var j = 1; j <= 4; j++)

{
    var nots = document.getElementById("name_of_the_student_"+j).value;
    console.log(nots);
nots_array.push(nots);

}

console.log(nots_array);

var length_nots_array= nots_array.length;
console.log(length_nots_array);

for(var k = 0; k < length_nots_array; k++)

{
    ds_array.push("<h4>NAME - "+ nots_array[k] + "</h4>");
    console.log(ds_array);
}
    console.log(ds_array);
    document.getElementById("display_name_with_commas").innerHTML= ds_array;

    var remove_commas = ds_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}