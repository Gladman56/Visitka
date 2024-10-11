const petro = document.getElementById('Petro')
const tucson = document.getElementById('Tucson')
const saumal = document.getElementById('Saumal')

async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const respons_saumal = await fetch('https://api.open-meteo.com/v1/forecast?latitude=53.2927&longitude=68.105&current=temperature_2m&hourly=temperature_2m')
    const respons_tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m&hourly=temperature_2m')
    const data_petro = await respons_petro.json()
    const data_saumal = await respons_saumal.json()
    const data_tucson = await respons_tucson.json()
    return [data_petro, data_saumal, data_tucson]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        tucson.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        saumal.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()