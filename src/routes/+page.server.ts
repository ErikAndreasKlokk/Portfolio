import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, isDataRequest }) => {

    async function fetchProjects() {
        const res = await fetch('https://api.github.com/users/ErikAndreasKlokk/repos')
        .then((response) => response.json())
        .catch((err) => console.log(err))

        return res
    }

    const projects = fetchProjects()

    return {
        streamed: {
            projects: isDataRequest ? projects : await projects
        }
    }
}