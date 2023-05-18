//1
function add(a,b){
    s=a+b;
    return s;
}
console.log(add(2,10));


const http=require('http');
const exports2=require('./2exports');
const class3=require('./3class');
const arrow4=require('./4arrow_fun');


//IMP: res.write() has to be in string use toString()
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //2
    res.write("Addition is: " + exports2.add(10,3));

    //3
    class3_obj=new class3();
    class3_obj.add();
    res.write("<br>Class -> sum:"+class3_obj.s.toString());

    //4
    res.write("<bR>Arrow -> Addition is: " + arrow4.add(10,5));


    res.end();
}).listen(3000);