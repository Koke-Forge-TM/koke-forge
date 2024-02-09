export async function getAllFeatures(){
    const res: Response = await fetch('/api/features')
    if(!res.ok) throw new Error('Error Opteniendo las Features de la API')
    return res.json()
}