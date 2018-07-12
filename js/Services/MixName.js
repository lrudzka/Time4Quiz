class MixName {

    static MixSearchedCountryName (name) {

        let nameLength = name.length-1;
        let loopNumber = name.length;
        let nameArray = [];
        nameArray.push(...name);

        let mixedNameArray = [];


        for (let i=0; i<loopNumber; i++) {
            let randomNumber = (Math.random() * (nameLength)).toFixed(0);
            mixedNameArray.push(nameArray[randomNumber]);
            nameArray.splice(randomNumber, 1);
            nameLength = nameLength-1;
        }


        return(mixedNameArray);


    }
}

module.exports = MixName;