//const chalk = require('.chalk') 
const fs = require('fs')
const f = require('./ApllFuntion')

    console.log(f.Multiply(8,4) )
  //  console.log(chalk.bgred('bonjour'))

    const {devDependencies} = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
    console.log(devDependencies)

    let MyDate = {
        name : 'KAGEU ULRICH',
        age : 21,
        piseau : false,
        futuresalaire : '150000Fcfa'
    }

    const ObjetJson = JSON.stringify(MyDate)

fs.writeFileSync('./DataKud.json', ObjetJson)
console.log('bb')
console.log('bbnn')