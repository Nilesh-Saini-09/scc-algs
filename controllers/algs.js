// importing require from node modules to use it in module file
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const algsData = require('../algs.json');

// Retrieve all algs
const getAllAlgs = (req, res) => {
    try {
        let data = JSON.stringify(algsData)
        res.send(data);
        //res.send(algsData);
        console.log(typeof algsData)
    } catch (error) {
        res.send('Please enter correct route')
        console.log(error);
    }
}

// Retrieve algs by puzzle name
const getAlgsByPuzzle = async (req, res) => {
    let {puzzle} = await req.params;
    try {
        let data = JSON.stringify(algsData.algs[puzzle])
        res.send(data);
        //res.send(algsData.algs[puzzle]);
    } catch (error) {
        console.log(error);
        res.send('Not Found');
    }
}

// Retrieve algs by puzzlename followed by algset
const getAlgByAlgSet = async (req, res) => {
    let {puzzle, algSet} = await req.params;
    try {
        let data = JSON.stringify(algsData.algs[puzzle][algSet])
        res.send(data);
        //res.send(algsData.algs[puzzle][algSet]);
    } catch (error) {
        console.log(error);
        res.send('Not Found');
    }
}

// Retrieve algs by puzzlename followed by algset and then id
const getAlgById = async (req, res) => {
    let {puzzle, algSet, num} = await req.params;
    try {
        let data = JSON.stringify(algsData.algs[puzzle][algSet][num]);
        res.send(data);
        //res.send(algsData.algs[puzzle][algSet][num]);
    } catch (error) {
        console.log(error);
        res.send('Not Found');
    }
}

export {getAllAlgs, getAlgsByPuzzle, getAlgByAlgSet, getAlgById}