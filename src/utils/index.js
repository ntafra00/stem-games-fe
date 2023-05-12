import { projects } from '../consts';

export const getProductNames = (key) => {
    return projects[key].Project.Samples.map((sample) => {
        return {
            id: sample.Id,
            name: sample.ProductName,
        }
    })

};


export const getParameters = (key) => {
    return projects[key].Project.InputConditions.map((condition) => {
        return {
            id: condition.Id,
            name: condition.Parameter,
            min: condition.Min,
            max: condition.Max,
        }
    })
}

export const getTestsForProduct = (key, productId) => {
    return projects[key].Project.Samples.find((sample) => sample.Id === productId).Tests.map((test) => {
        return {
            id: test.Id,
            name: test.TestName,
            min: test.Min,
            max: test.Max,
        }
    })
}


