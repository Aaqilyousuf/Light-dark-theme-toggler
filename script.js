function fun(){
    let r=getComputedStyle(document.documentElement);
    let a=r.getPropertyValue('--t');
    let root=document.documentElement;
    if(a==0+"px"){
        root.style.setProperty('--t',50+"px");
        root.style.setProperty('--bgdiv',"#70f866cf");
        document.querySelector("body").style.backgroundColor="#121212";
        document.querySelector("h2").innerText="Toggle to Light theme";
        document.querySelector("h2").style.color="white";
        
    }
    else{
        root.style.setProperty('--t',0+"px");
        root.style.setProperty('--bgdiv',"rgba(255, 70, 70, 0.831)");
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("h2").innerText="Toggle to Dark theme";
        document.querySelector("h2").style.color="#3F2E3E";
    }       
}