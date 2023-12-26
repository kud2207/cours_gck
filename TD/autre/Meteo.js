/*const para = {
    key : 'ccc28fb9fe76de85fa963fe8638a2757',
    pays : 'cameroon',
    units : 'm'
}

fetch(`http://api.weatherstack.com/current?access_key=${para.key}&query=${para.pays}&units=${para.units}`)
    .then(res =>res.json())
    .then(data =>{
        const{curent , location ,resquest} = data;
        console.log(location.region)
    })*/

    const weather = (location, unit , callback) => {
        const url = `http://api.weatherstack.com/current?access_key=ccc28fb9fe76de85fa963fe8638a2757&query=${encodeURIComponent(location)}&units=${unit}`

        fetch(url)
            .then(res =>res.json())
            .then(data =>{
                if(data.success === false){
                    callback(`Impossible de renvoyer vos information . error ${data.error.code} : ${data.error.info}` , undefined)
                } else{
                    const { current , location} = data
                    callback(undefined, `le nom de votre ville est ${location.name} . le pays est la ${location.country}. il fait ${current.temperature}°`)
              }
    })
    }

    weather("Bertoua" , "m" , (err , data) =>{
        console.log('Erreur' , err)
        console.log('Data' , data)
    })