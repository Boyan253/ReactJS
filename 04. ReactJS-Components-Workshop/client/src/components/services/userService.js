let baseUrl = 'http://localhost:3005/api/users'
export async function getAll() {

    const response = await fetch(`${baseUrl}`)
    const result = await response.json()

    return result.users
}

export async function getOne(userId) {

    const response = await fetch(`${baseUrl}/${userId}`)
    const result = await response.json()
    return result.user

}

export async function create(userData) {

    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    const result = await response.json()
    console.log(result);
    return result
}