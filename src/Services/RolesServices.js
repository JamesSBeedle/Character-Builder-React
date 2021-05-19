const baseURL = "https://www.dnd5eapi.co"

const fetchClasses = () => {
    return fetch(baseURL + "/api/classes")
    .then(res => res.json())
}

const getClassDetails = (url) => {
    return fetch(baseURL + url)
    .then(res => res.json())
}

export {fetchClasses, getClassDetails}