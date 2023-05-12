import { projects } from '../consts';

export const getProductNames = (key) => {
    // get the data from json in consts
    console.log("GET REQUEST")
    console.log("KEY: " + key)
    console.log(projects[key])
    return projects[key].Project.Samples.map((sample) => {
        console.log(sample.ProductName)
        return {
            id: sample.Id,
            name: sample.ProductName,
        }
        

    })

};


export const getParametars = (key, id) => {
    return projects[key].Project.InputConditions.map((condition) => {
        return {
            id: condition.Id,
            name: condition.Parameter,
            min: condition.Min,
            max: condition.Max,
            unit: condition.Unit,
        }
    })
}

