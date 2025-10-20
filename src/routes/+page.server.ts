import type { Project } from '$lib/types';
import type { PageServerLoadEvent } from './$types';

const projectsToLoad = ["Budgeting", "homelab", "Portfolio", "RomBooking", "gammel-portfolio"]

export const load = async ({ fetch, setHeaders }: PageServerLoadEvent) => {

    

    const projects: Project[] = (
        await Promise.all(
            projectsToLoad.map(async projectToLoad => {
                const res = await fetch(`https://api.github.com/repos/ErikAndreasKlokk/${projectToLoad}`);
                if (!res.ok) {
                    console.log("error");
                    return null;
                }
                return await res.json() as Project;
            })
        )
    ).filter((project): project is Project => project !== null);
    
    setHeaders({ 'cache-control': 'public, max-age=86400' }) // 24 hours

    return { projects: projects };
};