import { projects } from '../consts';

export const getProductNames = (key) => {
    return projects[key].Project.Samples.map((sample) => {
        return {
            id: sample.Id,
            name: sample.ProductName,
        }
    })

};


export const getParametars = (key, id) => {
    console.log(projects[key].Project.InputConditions);
    return projects[key].Project.InputConditions.map((condition) => {
        return {
            id: condition.Id,
            name: condition.Parameter,
            min: condition.Min,
            max: condition.Max,
        }
    })
}

