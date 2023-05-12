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


export const getTests = () => {
    
const operatingHumidity = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const operatingAltitude = [0, 5000];
const powerConsumption = [100, 250, 400, 550, 700, 850, 1000];
const i2cClockSpeed = [10000, 151428.6, 292857.1, 434285.7, 575714.3, 717142.9, 858571.4, 1000000];
const operatingVoltage = [2.7, 2.8, 2.8, 2.9, 3, 3, 3.1, 3.1, 3.2, 3.3, 3.3, 3.4, 3.5, 3.5, 3.6];

const sizeHum = 9;
const sizeAltidue = 2;
const sizeConsum = 7;
const sizeClock = 8;
const sizeVolt = 15;

const dataArray = [operatingHumidity, operatingAltitude, powerConsumption, i2cClockSpeed, operatingVoltage];
const size = [sizeHum, sizeAltidue, sizeConsum, sizeClock, sizeVolt];

const arrayPeriod1 = [sizeAltidue * sizeVolt * sizeClock * sizeHum, sizeAltidue * sizeVolt * sizeClock, sizeVolt * sizeClock, sizeVolt, 1];

const arrayPeriod = [
    sizeHum * sizeAltidue * sizeConsum * sizeClock * sizeVolt,
    sizeHum * sizeAltidue * sizeConsum * sizeClock,
    sizeHum * sizeAltidue * sizeConsum,
    sizeHum * sizeAltidue,
    sizeHum];

console.log("\n\noperatingHumidity\toperatingAltitude\tpowerConsumption\ti2cClockSpeed\toperatingVoltage")

for (let i = 0; i < 2 * arrayPeriod1[0]; i++) {
    console.log("\t" +  dataArray[0][Math.floor(i / arrayPeriod1[0]) % size[0]] + "\t\t" +
                        dataArray[1][Math.floor(i / arrayPeriod1[1]) % size[1]] + "\t\t" +
                        dataArray[2][Math.floor(i / arrayPeriod1[2]) % size[2]] + "\t\t" +
                        dataArray[3][Math.floor(i / arrayPeriod1[3]) % size[3]] + "\t\t" +
                        dataArray[4][Math.floor(i / arrayPeriod1[4]) % size[4]]);
}


console.log('Hello world'); 
console.log(arrayPeriod[0] );

let a = 1;
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


