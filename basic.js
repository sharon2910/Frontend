const mydata = JSON.parse(data1);
// alert(mydata[0].name);
// alert(mydata[0].age);
document.getElementById("id04").innerHTML = "Parse method: "+mydata[0].name +", "+mydata[0].age;

const jsondata=JSON.stringify(data);
document.getElementById("id02").innerHTML = "Stringify method: "+jsondata;
const jsondata2 = JSON.parse(jsondata);
document.getElementById("id03").innerHTML= "Parse method: "+jsondata2.name +", "+jsondata2.email;

const object1 = JSON.parse(text1);
        let text2 = "";
        for(const x in object1){
            text2 += x + ":" + object1[x]+", ";
        }
        document.getElementById("id05").innerHTML=text2;