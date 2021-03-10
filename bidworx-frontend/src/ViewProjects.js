import {getAllProjects} from './fetch.js'
import DisplayProjects from './DisplayProjects.js'

export default function ViewProjects() {
    const user_id = window.localStorage.getItem('user_id')
    getAllProjects(user_id).then(DisplayProjects)
}