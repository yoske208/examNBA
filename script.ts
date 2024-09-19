const Position = document.querySelector('#position') as HTMLLabelElement
const Name = document.querySelector('#name') as HTMLLabelElement
const Three = document.querySelector('#three') as HTMLLabelElement
const Two = document.querySelector('#two') as HTMLLabelElement
const Points = document.querySelector('#points') as HTMLLabelElement
const Tbody = document.querySelector('#tbody') as HTMLTableRowElement
const btnsearch = document.querySelector('#btnsearch') as HTMLButtonElement
const pointRaange = document.querySelector('#pointRaange') as HTMLInputElement
const steage2Raange = document.querySelector('#steage2Raange') as HTMLInputElement
const steage3Raange = document.querySelector('#steage3Raange') as HTMLInputElement
const filterinput = document.querySelector('#filterinput') as HTMLSelectElement

const BASE_url = 'https://nbaserver-q21u.onrender.com/api/filter/'

interface getPlayer { 
    name? : string
    position: string,
    twoPercent: number
    threePercent: number
    points: number

}

interface players {
    playerName? : string
    position: string,
    twoPercent: number
    threePercent: number
    points: number
    

}

const newplay: getPlayer = {
    position: 'C',
    threePercent: 4,
    twoPercent: 4,
    points: 300

}




btnsearch.addEventListener('click',async function (){
    fetchPlayers(newplay)

})
pointRaange.addEventListener('input', () => pointRaange.textContent = pointRaange.value);
steage2Raange.addEventListener('input', () => steage2Raange.textContent = steage2Raange.value);
steage3Raange.addEventListener('input', () => steage3Raange.textContent = steage3Raange.value)



function displayTable(players: getPlayer[]): void {
    Tbody.textContent = ''; 

    players.forEach((player: getPlayer) => {
        const row = document.createElement('tr');


        const playerTD = document.createElement('td');
        const positionTD = document.createElement('td');
        const fgTD = document.createElement('td');
        const threePTD = document.createElement('td');
        const actionTD = document.createElement('td');
        
        const selectPlayerBTN = document.createElement('button');
        selectPlayerBTN.textContent = 'add player';
        

        positionTD.textContent = player.position;
        fgTD.textContent = player.twoPercent.toString();
        threePTD.textContent = player.threePercent.toString();


        row.appendChild(playerTD);
        row.appendChild(positionTD);
        row.appendChild(fgTD);
        row.appendChild(threePTD);
        row.appendChild(actionTD);
        actionTD.appendChild(selectPlayerBTN);

        Tbody.appendChild(row);
    });
}


async function createPlayer(player: getPlayer): Promise<void> {
    const resp = await fetch(BASE_url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(player)
    })
    const newPlayer = await resp.json();
    console.log(newPlayer);

    const playerList = document.createElement('ul')
    const li = document.createElement('li')
    li.textContent = `${player.points} ${player.position} ${player.threePercent} ${player.twoPercent}`
    playerList.append(li)
}






async function fetchPlayers(newplay : getPlayer) : Promise <void> {
    const filterData : getPlayer = {
        position : filterinput.value,
        twoPercent : parseInt(steage2Raange.value),
        threePercent : parseInt(steage3Raange.value) ,
        points :parseInt(pointRaange.value) 
        
    } 

    try {
        const response = await fetch(BASE_url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(filterData)
        })

        const data = await response.json();
        displayTable(data);
    }

    catch (error) {
        console.log(error);

    }
}



fetchPlayers(newplay)