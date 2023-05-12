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


export const getTests = (testPointColection) => {
    let periodPoint = [];
    periodPoint[testPointColection.length - 1] = 1;


    for (let i = periodPoint.length - 2; i >= 0; i--) {
        periodPoint[i] = periodPoint[i + 1] * testPointColection[i].length;
    }
    let dataTable = [][periodPoint.length];
    for (let i = 0; i < 10; i++) {
        // for (let j = 0; j < testPointColection[i].length; j++) {
        //     dataTable[i][j] = testPointColection[j][Math.floor(i / periodPoint[j]) % testPointColection[i][j].length];
        // }
        console.log(dataTable[i] = testPointColection[0][Math.floor(i / periodPoint[0]) % testPointColection[i][0]]);
    }


    return dataTable;
}

export const getTestsForProduct = (key, productId) => {
    // Filter the test points for the product id
    const inputConditions = projects[key].TestPointCollections.filter((sample) => {
        return sample.SampleIds.includes(+productId)
    });
    return inputConditions.map((inputCondition) => inputCondition.TestPoints.map((testPoint) => testPoint.Value));
}

