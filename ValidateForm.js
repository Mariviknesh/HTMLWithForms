let check=()=>{
    let name=document.getElementById("name");
    let number=document.getElementById("number");
    let date=document.getElementById("date");
    let num=number.value.toString();
    let nameerr=document.getElementById("nameerr");
    let numerr=document.getElementById("numerr");
    let dateerr=document.getElementById("dateerr");
    let letters = /^[A-Za-z]+$/;
    let nameresult;
    let numresult;
    let dateresult;
    if(name.value==""||!name.value.match(letters))
    {
        document.getElementById("nameerr").innerHTML="Invalid input text";
        console.log("name error");
        console.log(letters);
        nameresult=false
    }
    else{
        document.getElementById("nameerr").innerHTML="-";
        nameresult=true;
        nameerr.style.color="white";
    }
    if(num.length!=10||num[0]==0||number.value=="")
    {
        document.getElementById("numerr").innerHTML="Invalid phone number";
        console.log("number error");
        numresult=false;
    }
    else{
        document.getElementById("numerr").innerHTML="-";
        numresult=true;
        numerr.style.color="white";
    }
    if(date.value=="")
    {
        document.getElementById("dateerr").innerHTML="Invalid date";
        console.log("date error");
        dateresult=false;
    }
    else{
        document.getElementById("dateerr").innerHTML="-";
        dateresult=true;
        dateerr.style.color="white";
    }
    return (nameresult&&numresult&&dateresult);
    
}