import {fetch_post} from "./includes.mjs";

let backend_get = "https://editor.duostories.org/get"
let backend_set = "https://editor.duostories.org/set"


export async function getCourses() {
    try {
        let response_courses = await fetch(`${backend_get}/courses`);
        return await response_courses.json();
    }
    catch (e) {
        return [];
    }
}

export async function getSession() {
    try {
        let response_courses = await fetch(`${backend_get}/session`);
        return await response_courses.json();
    }
    catch (e) {
        return undefined;
    }
}


export async function login(data) {
    console.log('login', data)
    // check if the user is logged in
    let reponse = await fetch_post(`${backend_get}/login`, data)
    console.log(reponse);
    return reponse.status !== 403;

}

export async function getCourse(id) {
    try {
        let response = await fetch(`${backend_get}/course?id=${id}`);
        return await response.json();
    }
    catch (e) {
        return {};
    }
}

export async function getAvatars(id, course_id) {
    console.log("getAvatars", id, `${backend_get}/avatar_names?id=${id}`)
    try {
        let response = await fetch(`${backend_get}/avatar_names?id=${id}&course_id=${course_id}`);
        return await response.json();
    }
    catch (e) {
        return {};
    }
}

export async function getSpeakers(id) {
    try {
        let response = await fetch(`${backend_get}/speakers?id=${id}`);
        return await response.json();
    }
    catch (e) {
        return {};
    }
}

export async function getLanguageName(id) {
    try {
        let response = await fetch(`${backend_get}/language?id=${id}`);
        return await response.json();
    }
    catch (e) {
        return {};
    }
}

export async function setAvatarSpeaker(data) {
    try {
        let response = await fetch_post(`${backend_set}/avatar`, data);
        return await response.json();
    }
    catch (e) {
        return {};
    }
}

export async function setPublic(id, is_public) {
    return await fetch(backend_stories+"set_story_public.php?id="+id+"&public="+is_public);
}


export async function getStory(id) {
    let response_json = await fetch(`${backend_get}/story?id=${id}`);
    return response_json.json();
}
export async function getAvatar(id) {
    try {
        let response_json = await fetch(`${backend_get}/avatar?id=${id}`);
        return response_json.json();
    }
    catch (e) {
        return {};
    }
}

let images_cached = {};
export function getImage(id) {
    if(images_cached[id] !== undefined) {
        return images_cached[id];
    }
    getImageAsync(id)
    return {}
}

export async function getImageAsync(id) {
    try {
        let response_json = await fetch(`${backend_get}/image?id=${id}`);
        let image = await response_json.json();
        images_cached[id] = image;
        console.log("getImage", images_cached[id], id, image)
        return image;
    }
    catch (e) {
        return {};
    }
}

export async function getImportList(id, id2) {
    let response_json = await fetch(`${backend_get}/import?id=${id}&id2=${id2}`);
    return response_json.json();
}

export async function setImport(id, course_id) {
    let response_json = await fetch(`${backend_set}/import?id=${id}&course_id=${course_id}`);
    return response_json.text();
}

export async function setStory(data) {
    let res = await fetch_post(`${backend_set}/story`, data);
    res = await res.text()
    return res;
}

export async function deleteStory(data) {
    let res = await fetch_post(`${backend_set}/story_delete`, data);
    res = await res.text()
    return res;
}



