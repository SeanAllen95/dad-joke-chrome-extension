async function fetchdata(){

    const joke = {
        method: 'GET',
        headers: {'Accept':'application/json'}
    }

    const res = await fetch('https://icanhazdadjoke.com/slack')
    .then(res => res.json())
    console.log("record:", res)

    document.getElementById('joke').innerHTML = res.attachments[0].text
}

fetchdata();