var a,b="",m,n=0,opt="",i=0;
window.onload=function(){
     if(document.getElementById("value").value==""){
         document.getElementById("value").value=0;
     }
}
function func0(){
	    a=document.getElementById("0").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func1(){
	    a=document.getElementById("1").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func2(){
	a=document.getElementById("2").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func3(){
	a=document.getElementById("3").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func4(){
	a=document.getElementById("4").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func5(){
	a=document.getElementById("5").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func6(){
    a=document.getElementById("6").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func7(){
	a=document.getElementById("7").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func8(){
	a=document.getElementById("8").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function func9(){
	a=document.getElementById("9").value;
	    b+=a;
	    document.getElementById("value").value=b;
}
function funcdt(){
	    i=1;
	    
	    document.getElementById("value").value=b+".0";
	    b+=".";
}
function funca(){
	if (i==1) {
	    m=parseFloat(b);
    }
    else{
    	m=parseInt(b);
    }
	b="";
	document.getElementById("value").value=b;
    opt=document.getElementById("+").value;
    document.getElementById("opt").value=opt;
    
    if(document.getElementById("value").value==""){
        document.getElementById("value").value=0;
    }
}
function funcs(){
	if (i==1) {
	    m=parseFloat(b);
    }
    else{
    	m=parseInt(b);
    }
	b="";
	document.getElementById("value").value=b;
    opt=document.getElementById("-").value;
    document.getElementById("opt").value=opt;
    if(document.getElementById("value").value==""){
        document.getElementById("value").value=0;
    }
}
function funcm(){
	if (i==1) {
	    m=parseFloat(b);
    }
    else{
    	m=parseInt(b);
    }
	b="";
	document.getElementById("value").value=b;
    opt=document.getElementById("*").value;
    document.getElementById("opt").value=opt;
    if(document.getElementById("value").value==""){
        document.getElementById("value").value=0;
    }
}
function funcd(){
	if (i==1) {
	    m=parseFloat(b);
    }
    else{
    	m=parseInt(b);
    }
	b="";
	document.getElementById("value").value=b;
    opt=document.getElementById("/").value;
    document.getElementById("opt").value=opt;
    if(document.getElementById("value").value==""){
        document.getElementById("value").value=0;
    }
}
function funce(){
	let eq=document.getElementById("=").value;
    document.getElementById("opt").value=eq;
    document.getElementById("clear").value="C";
	if (i==1) {
	    n=parseFloat(b);
    }
    else{
    	n=parseInt(b);
    }
	b="";
	if (opt=='+') {
		document.getElementById("value").value=m+n;
		b=(m+n).toString();
		opt="";
		document.getElementById("opt").value=opt;
	}
	if (opt=='-') {
		document.getElementById("value").value=m-n;
		m=m-n;
		opt="";
		document.getElementById("opt").value=opt;
	}
	if (opt=='*') {
		document.getElementById("value").value=m*n;
		m=m*n;
		opt="";
		document.getElementById("opt").value=opt;
	}
	if (opt=='/') {
		document.getElementById("value").value=m/n;
		m=m/n;
	    opt="";
	    document.getElementById("opt").value=opt;
	}
}
function funcc(){
     if(document.getElementById("clear").value=="C"){
        document.getElementById("clear").value="<x";
        opt="";
        b="";
	    document.getElementById("value").value=b;
	    document.getElementById("opt").value=opt;
     }
     else{
		if(b[b.length-2]=='.'){
			b=b.slice(0,b.length-1);
			document.getElementById("value").value=b+0;
		}
		else{
     	    b=b.slice(0,b.length-1);
     	    document.getElementById("value").value=b;
		}
     }
     
     if(document.getElementById("value").value==""){
         document.getElementById("value").value=0;
     }
}

