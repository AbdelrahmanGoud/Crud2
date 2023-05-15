
let inputName=document.getElementById("name");
let inputUrl=document.getElementById("lname")
let addbtn=document.getElementById("ADDbot")
let forsearch=document.getElementById("forsearch")

let boockmarcks;
let mianIndex=0;
  


if(localStorage.getItem("boockmarcks")==null)
{
          boockmarcks=[];
}else
{
          boockmarcks=JSON.parse(localStorage.getItem("boockmarcks"))
          displaydata(boockmarcks)
}




 


function tackData()
{
 
      

          if(addbtn.innerHTML=="update")
          {
                    var boockmarck={
                              name:inputName.value,
                              iUrl:inputUrl.value
                            
                    }
                    boockmarcks.splice(mianIndex,1, boockmarck)
          
                    addbtn.innerHTML="Submit"
          }
          
  else {

                    var boockmarck={
                              name:inputName.value,
                              iUrl:inputUrl.value
                            
                    }
                    boockmarcks.push(boockmarck)
          
          }

                    
          

          displaydata(boockmarcks);
          cealyrInput();
          localStorage.setItem("boockmarcks",JSON.stringify(boockmarcks));
         
}

function cealyrInput()
{
          inputName.value="";
          inputUrl.value="";
}

function displaydata(anyarrye)
{
          let mark=``

          for(let i=0;i<anyarrye.length;i++)
          {
                    mark +=`<tr>
                    <td>${anyarrye[i].name}</td>
                    <td >  <a  href="${boockmarcks[i].iUrl}"><button class="btn btn-primary">visit</button></a></td>
                    <td><button class="btn btn-info" onclick="updatebook(${i})">updata</button></td>
                    <td><button class="btn btn-danger" onclick="deleteboolk(${i})">delete</button></td>
          </tr>`
          }
          document.getElementById("addtable").innerHTML=mark;
         
}

function deleteboolk(index)
{
          boockmarcks.splice(index,1)
          localStorage.setItem("boockmarcks",JSON.stringify(boockmarcks));
          displaydata(boockmarcks);
}

function updatebook(index)
{
          inputName.value=boockmarcks[index].name
          inputUrl.value=boockmarcks[index].iUrl
          addbtn.innerHTML="update"
          mianIndex=index;
          displaydata();    
                localStorage.setItem("boockmarcks",JSON.stringify(boockmarcks));

}

function search(term)
{
          let wantedbook=[];
          for(let i=0;i<boockmarcks.length;i++)
          {
                    if(boockmarcks[i].name.toLowerCase().includes(term))
                    {
                              wantedbook.push(boockmarcks[i]);
                    }
          }
          displaydata(wantedbook)
}