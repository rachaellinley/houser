let houses = [
    {
        name: 'The White House',
        address: '1600 Pennsylvania Ave NW',
        city:'Washington D.C',
        state: 'Merca',
        zipcode: '20500',

    }
]
let id = 0;

function getHouses(req, res){
    res.status(200).json(houses)
}

function addHouse(req, res){
    const {name, address, city, state, zipcode} = req.body
 completed.push({
     name,
     address,
     city,
     state,
     zipcode,
     id
 })
 id++
 res.status(200).json(houses)
}

function deleteHouse(req, res){
    const {id} = req.params

    let houseIndex = events.findIndex(house => houses.id === +id)
    houses.splice(houseIndex , 1)
    res.status(200).json(events)
}
function editHouse(req, res){
    const {id} = req.params
    const {name, address, city, state, zipcode} = req.body
    console.log(description);
    console.log(id)


    let myIndex = houses.findIndex(completed  => houses.id === +id)
  

    completed.splice(myIndex, 1, {house: name, address, city, state, zipcode})
    console.log(houses);
    res.status(200).json(houses)
}

// Write a POST endpoint in your server.
// The endpoint should pull the name, address, city, state, and zipcode off of the body.
// The endpoint should respond with the 'all good' status code once it has added the house to the database.

module.exports = { 
    getHouses,
    addHouse, 
    deleteHouse,
    editHouse

}