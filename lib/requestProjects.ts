export async function getAllProjects(){
    const res: Response = await fetch('/api/projects')
    if(!res.ok) throw new Error('Error Opteniendo los Proyectos de la API')
    return res.json()
}