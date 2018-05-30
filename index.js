const express = require('express')

const app = express()

/*
* Dada una lista de artistas, escribir una función que reciba:
 * - el nombre de un artista (string)
 * - una popularidad mínima (number)
 *
 * Y devuelva una lista de artistas relacionados a ese artista que tengan al
 * menos esa popularidad.
*/
const allArtists = [
    {id: 'u78q0i', name: 'Earl Sweatshirt', popularity: 61, relatedTo: ['82jkdj', '0ka74j']},
    {id: '82jkdj', name: 'RZA', popularity: 67, relatedTo: ['u78q0i']},
    {id: '8jasd8', name: 'Miles Davis', popularity: 50, relatedTo: ['84ja0j']},
    {id: '84ja0j', name: 'John Coltrane', popularity: 49, relatedTo: ['8jasd8']},
    {id: '0ka74j', name: 'Tyler, the Creator', popularity: 76, relatedTo: ['u78q0i']},
    {id: 'ka9gj1', name: 'LNG/SHT', popularity: 32, relatedTo: []},
  ];

function searchArtist(artistName,pop) {
    const {relatedTo:related} = allArtists.find(({name})=>name==artistName)||{relatedTo:[]}
    const rel = []
    allArtists.forEach((a)=>{
        related.forEach((b)=>{
            if (a.id == b) {
                if (pop <= a.popularity)
                    rel.push(a)
            }
        })
    })
    return rel
}

function getArtistRel(artistName) {
    return allArtists.find(({name})=>name==artistName)
    /*
    let ret = []
    allArtists.forEach((a)=>{
        if (a.name == name) {
            ret = a.relatedTo
        }
    })
    return ret    */
}

app.get('/', (req, res) => {
    res.send(searchArtist(req.query.name,req.query.pop))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))


