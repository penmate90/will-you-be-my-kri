b_no=document.getElementById('na');
b_ye=document.getElementById('ye');
text=document.getElementById("txt")
no_txt=["aww :(", "pls? :(", "ilysm shona","cmon i mish u", "do u want a huggie?", "pwease i wuv you :(", "pretty please sunshine?", "baby pls? :(", "krisan ilysm :(((","dont do this to me:((", "il be so lonely", "dont u want us togtehr?","bbg i wont let you down","im gonna cry now","tears came :(","fine sigh","ill ask one last time after this","will you be mine?","mwah ill alwyas love you anyways"];
i=0;
fs=18
b_no.style.fontSize=fs+"pt"
b_ye.style.fontSize=fs+"pt"
function nah(){
    b_no.style.backgroundColor="#b12000";
}
function nal(){
    b_no.style.backgroundColor="#e90000";
}
function yah(){
    b_ye.style.backgroundColor="#00a100";
    }
function yal(){
    b_ye.style.backgroundColor="#01c44c";
    }
    
function yes(){

    document.getElementById('gif').src="milk-and-mocha-milk-mocha.gif";
    text.innerHTML="OMG ILYSM MWHA MWAH MWAH ur so cute and pretty i wish u were here with me hug me baby kiss me mwah mwah lets go out on a date to a restraunt with a view of sunset and lets kiss under the sunset omg thats so aesthetic and osm.";
    text.style="font-size:22pt; text-align:center; margin-right:25%; margin-left:25%;";
    b_no.remove()
    b_ye.remove()
}
function no(){
    b_no.innerHTML=no_txt[i];
    if (i<18){
        i++;
    }else{
        i=i;
    }
    fs=fs+24
    b_ye.style.fontSize=fs+"pt";


}



