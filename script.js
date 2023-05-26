const key = 'AIzaSyBx1dOIomYel126PY_ImNRHlP-e_ObCqSs'
let listName = 'owner'
const sheetId = '1AKJZjo0-DRFKMCmMGhtsxq0FEuu3FcjR713bnx-l8C0'
let url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${listName}?key=${key}`
let contentBlock = document.querySelector('.content') 
//console.log(url)

async function GetData(){
    let data = await fetch(url)
    let json = await data.json()
    //console.log(json)
    let convertedData = CovertToObject(json.values)
    console.log(convertedData)
    convertedData.forEach(function(element){
        CreateBlock(element)
    })
}

function CovertToObject(jsonData){
    let formatedList = []
    
    for(let i = 1; i < jsonData.length; i++){
        let row = jsonData[i]
        let object = {}
        for(let j = 0; j < row.length; j++){
            object[jsonData[0][j]] = row[j]
        }
        //console.log(object)
        formatedList.push(object)
    }
    return formatedList 
}
function CreateBlock(item){
    let block = `<div class="card">
                    <div class="left">
                        <h1 class="title">${item.Название}</h1>
                        <p class="desc">${item.Цена}</p>
                    </div>
                    <div class="right">
                         <div class="img" style="background-image: url(${item.Изображение})"></div>
                    </div>
                    <div class="line"></div>
                </div>`
    contentBlock.innerHTML += block
            }




GetData()
