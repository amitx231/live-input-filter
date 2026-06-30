let text=document.querySelector("textarea");
let h1=document.querySelector("h1");

text.addEventListener("input",function (event) {
    
    let filterinp="";
    for(let ch of text.value)
    {
        if((ch>='a' && ch<='z')||(ch>='A' && ch<='Z')|| ch===' ')
        {
            filterinp+=ch;
        }
    }
    h1.innerText=filterinp;
});