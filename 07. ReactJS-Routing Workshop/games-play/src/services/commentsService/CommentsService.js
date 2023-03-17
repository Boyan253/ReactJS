import * as request from '../../requester/requester'

const baseUrl = 'http://localhost:3030/jsonstore/comments'


export const create = async (data) => {
    const result = await request.post(baseUrl, data)
    const comments = Object.values(result)

    return comments

}

export const getAllComments = async (data) => { 


}