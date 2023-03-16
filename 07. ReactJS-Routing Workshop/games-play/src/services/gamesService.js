import * as  request from "../requester/requester"

const baseUrl = 'http://localhost:3030/jsonstore/games'



export const getAll = async () => {

    const result = await request.get(baseUrl)
    const games = Object.values(result)
    console.log(games);
    return games
}

export const create = async (data) => {
    const result = await request.post(baseUrl, data)
    console.log(result);
    return result
}