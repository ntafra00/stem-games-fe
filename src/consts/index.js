export const projectOptions =
    [{ value: "L1", label: "L1" },
    { value: "L2", label: "L2" },
    { value: "M1", label: "M1" },
    { value: "M2", label: "M2" },]
    ;

export const projects = {
    'L1': {
        "Project": {
            "Name": "ABC Electronics",
            "Samples": [
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "PowerMCU Y2",
                    "Name": "POR 1",
                    "Id": 1
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "Microchip X5",
                    "Name": "POR 2",
                    "Id": 2
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "SmartChip W8",
                    "Name": "POR 3",
                    "Id": 3
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "Microchip X13",
                    "Name": "POR 4",
                    "Id": 4
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "PowerMCU Y16",
                    "Name": "POR 5",
                    "Id": 5
                }
            ],
            "InputConditions": [
                {
                    "Parameter": "Operating Humidity",
                    "Min": 10,
                    "Typical": 50,
                    "Max": 90,
                    "TimeBetweenPoints": 1,
                    "Id": 12
                },
                {
                    "Parameter": "Operating Altitude",
                    "Min": 0,
                    "Typical": 1000,
                    "Max": 5000,
                    "TimeBetweenPoints": 1,
                    "Id": 15
                },
                {
                    "Parameter": "Power Consumption",
                    "Min": 100,
                    "Typical": 500,
                    "Max": 1000,
                    "TimeBetweenPoints": 0.5,
                    "Id": 11
                },
                {
                    "Parameter": "I2C Clock Speed",
                    "Min": 10000,
                    "Typical": 400000,
                    "Max": 1000000,
                    "TimeBetweenPoints": 0.2,
                    "Id": 18
                },
                {
                    "Parameter": "Number of PWM Channels",
                    "Min": 2,
                    "Typical": 4,
                    "Max": 8,
                    "TimeBetweenPoints": 0.5,
                    "Id": 16
                },
                {
                    "Parameter": "SPI Clock Speed",
                    "Min": 10000,
                    "Typical": 1000000,
                    "Max": 10000000,
                    "TimeBetweenPoints": 0.5,
                    "Id": 19
                },
                {
                    "Parameter": "Operating Voltage",
                    "Min": 2.7,
                    "Typical": 3.3,
                    "Max": 3.6,
                    "TimeBetweenPoints": 0.1,
                    "Id": 1
                },
                {
                    "Parameter": "Digital Input Voltage",
                    "Min": 0,
                    "Typical": 3.3,
                    "Max": 5,
                    "TimeBetweenPoints": 0.1,
                    "Id": 13
                },
                {
                    "Parameter": "Number of GPIO Pins",
                    "Min": 10,
                    "Typical": 20,
                    "Max": 40,
                    "TimeBetweenPoints": 0.5,
                    "Id": 6
                },
                {
                    "Parameter": "UART Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.2,
                    "Id": 7
                },
                {
                    "Parameter": "SPI Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.2,
                    "Id": 9
                },
                {
                    "Parameter": "Analog Output Voltage",
                    "Min": 0,
                    "Typical": 2.5,
                    "Max": 5,
                    "TimeBetweenPoints": 0.2,
                    "Id": 14
                },
                {
                    "Parameter": "ADC Sampling Rate",
                    "Min": 1000,
                    "Typical": 10000,
                    "Max": 100000,
                    "TimeBetweenPoints": 0.1,
                    "Id": 20
                },
                {
                    "Parameter": "I2C Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.1,
                    "Id": 8
                },
                {
                    "Parameter": "ADC Resolution",
                    "Min": 8,
                    "Typical": 10,
                    "Max": 12,
                    "TimeBetweenPoints": 0.1,
                    "Id": 10
                }
            ],
            "Id": 2
        },
        "TestPointCollections": [
            {
                "InputConditionId": 12,
                "SampleIds": [
                    5,
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 20,
                        "Unit": null
                    },
                    {
                        "Value": 30,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    },
                    {
                        "Value": 50,
                        "Unit": null
                    },
                    {
                        "Value": 60,
                        "Unit": null
                    },
                    {
                        "Value": 70,
                        "Unit": null
                    },
                    {
                        "Value": 80,
                        "Unit": null
                    },
                    {
                        "Value": 90,
                        "Unit": null
                    }
                ],
                "Id": 1
            },
            {
                "InputConditionId": 12,
                "SampleIds": [
                    4,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 20,
                        "Unit": null
                    },
                    {
                        "Value": 30,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    },
                    {
                        "Value": 50,
                        "Unit": null
                    },
                    {
                        "Value": 60,
                        "Unit": null
                    },
                    {
                        "Value": 70,
                        "Unit": null
                    },
                    {
                        "Value": 80,
                        "Unit": null
                    },
                    {
                        "Value": 90,
                        "Unit": null
                    }
                ],
                "Id": 2
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    1,
                    4,
                    5,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 3
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 833.3,
                        "Unit": null
                    },
                    {
                        "Value": 1666.7,
                        "Unit": null
                    },
                    {
                        "Value": 2500,
                        "Unit": null
                    },
                    {
                        "Value": 3333.3,
                        "Unit": null
                    },
                    {
                        "Value": 4166.7,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 4
            },
            {
                "InputConditionId": 11,
                "SampleIds": [
                    2,
                    3,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 280,
                        "Unit": null
                    },
                    {
                        "Value": 460,
                        "Unit": null
                    },
                    {
                        "Value": 640,
                        "Unit": null
                    },
                    {
                        "Value": 820,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    }
                ],
                "Id": 5
            },
            {
                "InputConditionId": 11,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 250,
                        "Unit": null
                    },
                    {
                        "Value": 400,
                        "Unit": null
                    },
                    {
                        "Value": 550,
                        "Unit": null
                    },
                    {
                        "Value": 700,
                        "Unit": null
                    },
                    {
                        "Value": 850,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    }
                ],
                "Id": 6
            },
            {
                "InputConditionId": 11,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 164.3,
                        "Unit": null
                    },
                    {
                        "Value": 228.6,
                        "Unit": null
                    },
                    {
                        "Value": 292.9,
                        "Unit": null
                    },
                    {
                        "Value": 357.1,
                        "Unit": null
                    },
                    {
                        "Value": 421.4,
                        "Unit": null
                    },
                    {
                        "Value": 485.7,
                        "Unit": null
                    },
                    {
                        "Value": 550,
                        "Unit": null
                    },
                    {
                        "Value": 614.3,
                        "Unit": null
                    },
                    {
                        "Value": 678.6,
                        "Unit": null
                    },
                    {
                        "Value": 742.9,
                        "Unit": null
                    },
                    {
                        "Value": 807.1,
                        "Unit": null
                    },
                    {
                        "Value": 871.4,
                        "Unit": null
                    },
                    {
                        "Value": 935.7,
                        "Unit": null
                    }
                ],
                "Id": 7
            },
            {
                "InputConditionId": 18,
                "SampleIds": [
                    3,
                    5,
                    4,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 8
            },
            {
                "InputConditionId": 18,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 151428.6,
                        "Unit": null
                    },
                    {
                        "Value": 292857.1,
                        "Unit": null
                    },
                    {
                        "Value": 434285.7,
                        "Unit": null
                    },
                    {
                        "Value": 575714.3,
                        "Unit": null
                    },
                    {
                        "Value": 717142.9,
                        "Unit": null
                    },
                    {
                        "Value": 858571.4,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 9
            },
            {
                "InputConditionId": 16,
                "SampleIds": [
                    1,
                    3,
                    5,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    },
                    {
                        "Value": 6,
                        "Unit": null
                    },
                    {
                        "Value": 6,
                        "Unit": null
                    },
                    {
                        "Value": 7,
                        "Unit": null
                    },
                    {
                        "Value": 7,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    }
                ],
                "Id": 10
            },
            {
                "InputConditionId": 16,
                "SampleIds": [
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    },
                    {
                        "Value": 6,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    }
                ],
                "Id": 11
            },
            {
                "InputConditionId": 19,
                "SampleIds": [
                    4,
                    1,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 842500,
                        "Unit": null
                    },
                    {
                        "Value": 1675000,
                        "Unit": null
                    },
                    {
                        "Value": 2507500,
                        "Unit": null
                    },
                    {
                        "Value": 3340000,
                        "Unit": null
                    },
                    {
                        "Value": 4172500,
                        "Unit": null
                    },
                    {
                        "Value": 5005000,
                        "Unit": null
                    },
                    {
                        "Value": 5837500,
                        "Unit": null
                    },
                    {
                        "Value": 6670000,
                        "Unit": null
                    },
                    {
                        "Value": 7502500,
                        "Unit": null
                    },
                    {
                        "Value": 8335000,
                        "Unit": null
                    },
                    {
                        "Value": 9167500,
                        "Unit": null
                    },
                    {
                        "Value": 10000000,
                        "Unit": null
                    }
                ],
                "Id": 12
            },
            {
                "InputConditionId": 19,
                "SampleIds": [
                    5,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 918181.8,
                        "Unit": null
                    },
                    {
                        "Value": 1826363.6,
                        "Unit": null
                    },
                    {
                        "Value": 2734545.5,
                        "Unit": null
                    },
                    {
                        "Value": 3642727.3,
                        "Unit": null
                    },
                    {
                        "Value": 4550909.1,
                        "Unit": null
                    },
                    {
                        "Value": 5459090.9,
                        "Unit": null
                    },
                    {
                        "Value": 6367272.7,
                        "Unit": null
                    },
                    {
                        "Value": 7275454.5,
                        "Unit": null
                    },
                    {
                        "Value": 8183636.4,
                        "Unit": null
                    },
                    {
                        "Value": 9091818.2,
                        "Unit": null
                    },
                    {
                        "Value": 10000000,
                        "Unit": null
                    }
                ],
                "Id": 13
            },
            {
                "InputConditionId": 1,
                "SampleIds": [
                    5,
                    4,
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 2.7,
                        "Unit": null
                    },
                    {
                        "Value": 2.8,
                        "Unit": null
                    },
                    {
                        "Value": 2.8,
                        "Unit": null
                    },
                    {
                        "Value": 2.9,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3.1,
                        "Unit": null
                    },
                    {
                        "Value": 3.1,
                        "Unit": null
                    },
                    {
                        "Value": 3.2,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 3.4,
                        "Unit": null
                    },
                    {
                        "Value": 3.5,
                        "Unit": null
                    },
                    {
                        "Value": 3.5,
                        "Unit": null
                    },
                    {
                        "Value": 3.6,
                        "Unit": null
                    }
                ],
                "Id": 14
            },
            {
                "InputConditionId": 1,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 2.7,
                        "Unit": null
                    },
                    {
                        "Value": 2.8,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3.2,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 3.4,
                        "Unit": null
                    },
                    {
                        "Value": 3.6,
                        "Unit": null
                    }
                ],
                "Id": 15
            },
            {
                "InputConditionId": 13,
                "SampleIds": [
                    2,
                    1,
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 1.2,
                        "Unit": null
                    },
                    {
                        "Value": 2.5,
                        "Unit": null
                    },
                    {
                        "Value": 3.8,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 16
            },
            {
                "InputConditionId": 13,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 1.7,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 17
            },
            {
                "InputConditionId": 13,
                "SampleIds": [
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.4,
                        "Unit": null
                    },
                    {
                        "Value": 0.8,
                        "Unit": null
                    },
                    {
                        "Value": 1.2,
                        "Unit": null
                    },
                    {
                        "Value": 1.5,
                        "Unit": null
                    },
                    {
                        "Value": 1.9,
                        "Unit": null
                    },
                    {
                        "Value": 2.3,
                        "Unit": null
                    },
                    {
                        "Value": 2.7,
                        "Unit": null
                    },
                    {
                        "Value": 3.1,
                        "Unit": null
                    },
                    {
                        "Value": 3.5,
                        "Unit": null
                    },
                    {
                        "Value": 3.8,
                        "Unit": null
                    },
                    {
                        "Value": 4.2,
                        "Unit": null
                    },
                    {
                        "Value": 4.6,
                        "Unit": null
                    }
                ],
                "Id": 18
            },
            {
                "InputConditionId": 6,
                "SampleIds": [
                    1,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 13,
                        "Unit": null
                    },
                    {
                        "Value": 15,
                        "Unit": null
                    },
                    {
                        "Value": 18,
                        "Unit": null
                    },
                    {
                        "Value": 21,
                        "Unit": null
                    },
                    {
                        "Value": 24,
                        "Unit": null
                    },
                    {
                        "Value": 26,
                        "Unit": null
                    },
                    {
                        "Value": 29,
                        "Unit": null
                    },
                    {
                        "Value": 32,
                        "Unit": null
                    },
                    {
                        "Value": 35,
                        "Unit": null
                    },
                    {
                        "Value": 37,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    }
                ],
                "Id": 19
            },
            {
                "InputConditionId": 6,
                "SampleIds": [
                    3,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 14,
                        "Unit": null
                    },
                    {
                        "Value": 18,
                        "Unit": null
                    },
                    {
                        "Value": 21,
                        "Unit": null
                    },
                    {
                        "Value": 25,
                        "Unit": null
                    },
                    {
                        "Value": 29,
                        "Unit": null
                    },
                    {
                        "Value": 32,
                        "Unit": null
                    },
                    {
                        "Value": 36,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    }
                ],
                "Id": 20
            },
            {
                "InputConditionId": 6,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 13,
                        "Unit": null
                    },
                    {
                        "Value": 15,
                        "Unit": null
                    },
                    {
                        "Value": 18,
                        "Unit": null
                    },
                    {
                        "Value": 21,
                        "Unit": null
                    },
                    {
                        "Value": 24,
                        "Unit": null
                    },
                    {
                        "Value": 26,
                        "Unit": null
                    },
                    {
                        "Value": 29,
                        "Unit": null
                    },
                    {
                        "Value": 32,
                        "Unit": null
                    },
                    {
                        "Value": 35,
                        "Unit": null
                    },
                    {
                        "Value": 37,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    }
                ],
                "Id": 21
            },
            {
                "InputConditionId": 7,
                "SampleIds": [
                    5,
                    4,
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 22
            },
            {
                "InputConditionId": 7,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 23
            },
            {
                "InputConditionId": 9,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 24
            },
            {
                "InputConditionId": 9,
                "SampleIds": [
                    2,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 25
            },
            {
                "InputConditionId": 9,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 26
            },
            {
                "InputConditionId": 9,
                "SampleIds": [
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 27
            },
            {
                "InputConditionId": 14,
                "SampleIds": [
                    5,
                    1,
                    4,
                    2,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.6,
                        "Unit": null
                    },
                    {
                        "Value": 1.1,
                        "Unit": null
                    },
                    {
                        "Value": 1.7,
                        "Unit": null
                    },
                    {
                        "Value": 2.2,
                        "Unit": null
                    },
                    {
                        "Value": 2.8,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 3.9,
                        "Unit": null
                    },
                    {
                        "Value": 4.4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 28
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 17500,
                        "Unit": null
                    },
                    {
                        "Value": 34000,
                        "Unit": null
                    },
                    {
                        "Value": 50500,
                        "Unit": null
                    },
                    {
                        "Value": 67000,
                        "Unit": null
                    },
                    {
                        "Value": 83500,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 29
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    2,
                    3,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 25750,
                        "Unit": null
                    },
                    {
                        "Value": 50500,
                        "Unit": null
                    },
                    {
                        "Value": 75250,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 30
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 50500,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 31
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    3,
                    4,
                    5,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 32
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 33
            },
            {
                "InputConditionId": 10,
                "SampleIds": [
                    3,
                    4,
                    5,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 8,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 12,
                        "Unit": null
                    },
                    {
                        "Value": 12,
                        "Unit": null
                    }
                ],
                "Id": 34
            },
            {
                "InputConditionId": 10,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 8,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 12,
                        "Unit": null
                    },
                    {
                        "Value": 12,
                        "Unit": null
                    }
                ],
                "Id": 35
            }
        ]
    },
    'L2': {
        "Project": {
            "Name": "ABC Electronics",
            "Samples": [
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "PowerMCU Y2",
                    "Name": "POR 1",
                    "Id": 1
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "Microchip X5",
                    "Name": "POR 2",
                    "Id": 2
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "SmartChip W8",
                    "Name": "POR 3",
                    "Id": 3
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "Microchip X13",
                    "Name": "POR 4",
                    "Id": 4
                },
                {
                    "FamilyName": "XYZ Technologies",
                    "ProductName": "PowerMCU Y16",
                    "Name": "POR 5",
                    "Id": 5
                }
            ],
            "InputConditions": [
                {
                    "Parameter": "Digital Input Voltage",
                    "Min": 0,
                    "Typical": 3.3,
                    "Max": 5,
                    "TimeBetweenPoints": 0.1,
                    "Id": 13
                },
                {
                    "Parameter": "SPI Clock Speed",
                    "Min": 10000,
                    "Typical": 1000000,
                    "Max": 10000000,
                    "TimeBetweenPoints": 0.5,
                    "Id": 19
                },
                {
                    "Parameter": "Operating Voltage",
                    "Min": 2.7,
                    "Typical": 3.3,
                    "Max": 3.6,
                    "TimeBetweenPoints": 0.1,
                    "Id": 1
                },
                {
                    "Parameter": "UART Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.2,
                    "Id": 7
                },
                {
                    "Parameter": "UART Baud Rate",
                    "Min": 9600,
                    "Typical": 115200,
                    "Max": 1000000,
                    "TimeBetweenPoints": 0.1,
                    "Id": 17
                },
                {
                    "Parameter": "Operating Humidity",
                    "Min": 10,
                    "Typical": 50,
                    "Max": 90,
                    "TimeBetweenPoints": 1,
                    "Id": 12
                },
                {
                    "Parameter": "ADC Sampling Rate",
                    "Min": 1000,
                    "Typical": 10000,
                    "Max": 100000,
                    "TimeBetweenPoints": 0.1,
                    "Id": 20
                },
                {
                    "Parameter": "Clock Frequency",
                    "Min": 1,
                    "Typical": 16,
                    "Max": 100,
                    "TimeBetweenPoints": 0.5,
                    "Id": 3
                },
                {
                    "Parameter": "Operating Altitude",
                    "Min": 0,
                    "Typical": 1000,
                    "Max": 5000,
                    "TimeBetweenPoints": 1,
                    "Id": 15
                },
                {
                    "Parameter": "I2C Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.1,
                    "Id": 8
                },
                {
                    "Parameter": "Analog Output Voltage",
                    "Min": 0,
                    "Typical": 2.5,
                    "Max": 5,
                    "TimeBetweenPoints": 0.2,
                    "Id": 14
                },
                {
                    "Parameter": "I2C Clock Speed",
                    "Min": 10000,
                    "Typical": 400000,
                    "Max": 1000000,
                    "TimeBetweenPoints": 0.2,
                    "Id": 18
                },
                {
                    "Parameter": "Power Consumption",
                    "Min": 100,
                    "Typical": 500,
                    "Max": 1000,
                    "TimeBetweenPoints": 0.5,
                    "Id": 11
                },
                {
                    "Parameter": "Number of GPIO Pins",
                    "Min": 10,
                    "Typical": 20,
                    "Max": 40,
                    "TimeBetweenPoints": 0.5,
                    "Id": 6
                },
                {
                    "Parameter": "Number of PWM Channels",
                    "Min": 2,
                    "Typical": 4,
                    "Max": 8,
                    "TimeBetweenPoints": 0.5,
                    "Id": 16
                }
            ],
            "Id": 2
        },
        "TestPointCollections": [
            {
                "InputConditionId": 13,
                "SampleIds": [
                    4,
                    3,
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 1
            },
            {
                "InputConditionId": 13,
                "SampleIds": [
                    2,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 2
            },
            {
                "InputConditionId": 19,
                "SampleIds": [
                    1,
                    2,
                    3,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 723571.4,
                        "Unit": null
                    },
                    {
                        "Value": 1437142.9,
                        "Unit": null
                    },
                    {
                        "Value": 2150714.3,
                        "Unit": null
                    },
                    {
                        "Value": 2864285.7,
                        "Unit": null
                    },
                    {
                        "Value": 3577857.1,
                        "Unit": null
                    },
                    {
                        "Value": 4291428.6,
                        "Unit": null
                    },
                    {
                        "Value": 5005000,
                        "Unit": null
                    },
                    {
                        "Value": 5718571.4,
                        "Unit": null
                    },
                    {
                        "Value": 6432142.9,
                        "Unit": null
                    },
                    {
                        "Value": 7145714.3,
                        "Unit": null
                    },
                    {
                        "Value": 7859285.7,
                        "Unit": null
                    },
                    {
                        "Value": 8572857.1,
                        "Unit": null
                    },
                    {
                        "Value": 9286428.6,
                        "Unit": null
                    },
                    {
                        "Value": 10000000,
                        "Unit": null
                    }
                ],
                "Id": 3
            },
            {
                "InputConditionId": 19,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 778461.5,
                        "Unit": null
                    },
                    {
                        "Value": 1546923.1,
                        "Unit": null
                    },
                    {
                        "Value": 2315384.6,
                        "Unit": null
                    },
                    {
                        "Value": 3083846.2,
                        "Unit": null
                    },
                    {
                        "Value": 3852307.7,
                        "Unit": null
                    },
                    {
                        "Value": 4620769.2,
                        "Unit": null
                    },
                    {
                        "Value": 5389230.8,
                        "Unit": null
                    },
                    {
                        "Value": 6157692.3,
                        "Unit": null
                    },
                    {
                        "Value": 6926153.8,
                        "Unit": null
                    },
                    {
                        "Value": 7694615.4,
                        "Unit": null
                    },
                    {
                        "Value": 8463076.9,
                        "Unit": null
                    },
                    {
                        "Value": 9231538.5,
                        "Unit": null
                    },
                    {
                        "Value": 10000000,
                        "Unit": null
                    }
                ],
                "Id": 4
            },
            {
                "InputConditionId": 1,
                "SampleIds": [
                    3,
                    4,
                    5,
                    2,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 2.7,
                        "Unit": null
                    },
                    {
                        "Value": 2.8,
                        "Unit": null
                    },
                    {
                        "Value": 2.9,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3.1,
                        "Unit": null
                    },
                    {
                        "Value": 3.2,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 3.4,
                        "Unit": null
                    },
                    {
                        "Value": 3.5,
                        "Unit": null
                    }
                ],
                "Id": 5
            },
            {
                "InputConditionId": 7,
                "SampleIds": [
                    1,
                    5,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 6
            },
            {
                "InputConditionId": 7,
                "SampleIds": [
                    3,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 7
            },
            {
                "InputConditionId": 17,
                "SampleIds": [
                    3,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 9600,
                        "Unit": null
                    },
                    {
                        "Value": 174667,
                        "Unit": null
                    },
                    {
                        "Value": 339733,
                        "Unit": null
                    },
                    {
                        "Value": 504800,
                        "Unit": null
                    },
                    {
                        "Value": 669867,
                        "Unit": null
                    },
                    {
                        "Value": 834933,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 8
            },
            {
                "InputConditionId": 17,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 9600,
                        "Unit": null
                    },
                    {
                        "Value": 151086,
                        "Unit": null
                    },
                    {
                        "Value": 292571,
                        "Unit": null
                    },
                    {
                        "Value": 434057,
                        "Unit": null
                    },
                    {
                        "Value": 575543,
                        "Unit": null
                    },
                    {
                        "Value": 717029,
                        "Unit": null
                    },
                    {
                        "Value": 858514,
                        "Unit": null
                    }
                ],
                "Id": 9
            },
            {
                "InputConditionId": 17,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 9600,
                        "Unit": null
                    },
                    {
                        "Value": 504800,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 10
            },
            {
                "InputConditionId": 17,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 9600,
                        "Unit": null
                    },
                    {
                        "Value": 85785,
                        "Unit": null
                    },
                    {
                        "Value": 161969,
                        "Unit": null
                    },
                    {
                        "Value": 238154,
                        "Unit": null
                    },
                    {
                        "Value": 314338,
                        "Unit": null
                    },
                    {
                        "Value": 390523,
                        "Unit": null
                    },
                    {
                        "Value": 466708,
                        "Unit": null
                    },
                    {
                        "Value": 542892,
                        "Unit": null
                    },
                    {
                        "Value": 619077,
                        "Unit": null
                    },
                    {
                        "Value": 695262,
                        "Unit": null
                    },
                    {
                        "Value": 771446,
                        "Unit": null
                    },
                    {
                        "Value": 847631,
                        "Unit": null
                    },
                    {
                        "Value": 923815,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 11
            },
            {
                "InputConditionId": 12,
                "SampleIds": [
                    4,
                    2,
                    5,
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 17.3,
                        "Unit": null
                    },
                    {
                        "Value": 24.5,
                        "Unit": null
                    },
                    {
                        "Value": 31.8,
                        "Unit": null
                    },
                    {
                        "Value": 39.1,
                        "Unit": null
                    },
                    {
                        "Value": 46.4,
                        "Unit": null
                    },
                    {
                        "Value": 53.6,
                        "Unit": null
                    },
                    {
                        "Value": 60.9,
                        "Unit": null
                    },
                    {
                        "Value": 68.2,
                        "Unit": null
                    },
                    {
                        "Value": 75.5,
                        "Unit": null
                    },
                    {
                        "Value": 82.7,
                        "Unit": null
                    },
                    {
                        "Value": 90,
                        "Unit": null
                    }
                ],
                "Id": 12
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 25750,
                        "Unit": null
                    },
                    {
                        "Value": 50500,
                        "Unit": null
                    },
                    {
                        "Value": 75250,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 13
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    4,
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 8615.4,
                        "Unit": null
                    },
                    {
                        "Value": 16230.8,
                        "Unit": null
                    },
                    {
                        "Value": 23846.2,
                        "Unit": null
                    },
                    {
                        "Value": 31461.5,
                        "Unit": null
                    },
                    {
                        "Value": 39076.9,
                        "Unit": null
                    },
                    {
                        "Value": 46692.3,
                        "Unit": null
                    },
                    {
                        "Value": 54307.7,
                        "Unit": null
                    },
                    {
                        "Value": 61923.1,
                        "Unit": null
                    },
                    {
                        "Value": 69538.5,
                        "Unit": null
                    },
                    {
                        "Value": 77153.8,
                        "Unit": null
                    },
                    {
                        "Value": 84769.2,
                        "Unit": null
                    },
                    {
                        "Value": 92384.6,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 14
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 8071.4,
                        "Unit": null
                    },
                    {
                        "Value": 15142.9,
                        "Unit": null
                    },
                    {
                        "Value": 22214.3,
                        "Unit": null
                    },
                    {
                        "Value": 29285.7,
                        "Unit": null
                    },
                    {
                        "Value": 36357.1,
                        "Unit": null
                    },
                    {
                        "Value": 43428.6,
                        "Unit": null
                    },
                    {
                        "Value": 50500,
                        "Unit": null
                    },
                    {
                        "Value": 57571.4,
                        "Unit": null
                    },
                    {
                        "Value": 64642.9,
                        "Unit": null
                    },
                    {
                        "Value": 71714.3,
                        "Unit": null
                    },
                    {
                        "Value": 78785.7,
                        "Unit": null
                    },
                    {
                        "Value": 85857.1,
                        "Unit": null
                    },
                    {
                        "Value": 92928.6,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 15
            },
            {
                "InputConditionId": 3,
                "SampleIds": [
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 20.8,
                        "Unit": null
                    },
                    {
                        "Value": 40.6,
                        "Unit": null
                    },
                    {
                        "Value": 60.4,
                        "Unit": null
                    },
                    {
                        "Value": 80.2,
                        "Unit": null
                    },
                    {
                        "Value": 100,
                        "Unit": null
                    }
                ],
                "Id": 16
            },
            {
                "InputConditionId": 3,
                "SampleIds": [
                    4,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 17.5,
                        "Unit": null
                    },
                    {
                        "Value": 34,
                        "Unit": null
                    },
                    {
                        "Value": 50.5,
                        "Unit": null
                    },
                    {
                        "Value": 67,
                        "Unit": null
                    },
                    {
                        "Value": 83.5,
                        "Unit": null
                    },
                    {
                        "Value": 100,
                        "Unit": null
                    }
                ],
                "Id": 17
            },
            {
                "InputConditionId": 3,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 17.5,
                        "Unit": null
                    },
                    {
                        "Value": 34,
                        "Unit": null
                    },
                    {
                        "Value": 50.5,
                        "Unit": null
                    },
                    {
                        "Value": 67,
                        "Unit": null
                    },
                    {
                        "Value": 83.5,
                        "Unit": null
                    },
                    {
                        "Value": 100,
                        "Unit": null
                    }
                ],
                "Id": 18
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    3,
                    1,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 1666.7,
                        "Unit": null
                    },
                    {
                        "Value": 3333.3,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 19
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 20
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 21
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    2,
                    3,
                    4,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 22
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 23
            },
            {
                "InputConditionId": 14,
                "SampleIds": [
                    4,
                    2,
                    1,
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 24
            },
            {
                "InputConditionId": 14,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.6,
                        "Unit": null
                    },
                    {
                        "Value": 1.1,
                        "Unit": null
                    },
                    {
                        "Value": 1.7,
                        "Unit": null
                    },
                    {
                        "Value": 2.2,
                        "Unit": null
                    },
                    {
                        "Value": 2.8,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 3.9,
                        "Unit": null
                    },
                    {
                        "Value": 4.4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 25
            },
            {
                "InputConditionId": 18,
                "SampleIds": [
                    3,
                    4,
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 505000,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 26
            },
            {
                "InputConditionId": 18,
                "SampleIds": [
                    2,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 133750,
                        "Unit": null
                    },
                    {
                        "Value": 257500,
                        "Unit": null
                    },
                    {
                        "Value": 381250,
                        "Unit": null
                    },
                    {
                        "Value": 505000,
                        "Unit": null
                    },
                    {
                        "Value": 628750,
                        "Unit": null
                    },
                    {
                        "Value": 752500,
                        "Unit": null
                    },
                    {
                        "Value": 876250,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 27
            },
            {
                "InputConditionId": 11,
                "SampleIds": [
                    4,
                    3,
                    2,
                    5,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 190,
                        "Unit": null
                    },
                    {
                        "Value": 280,
                        "Unit": null
                    },
                    {
                        "Value": 370,
                        "Unit": null
                    },
                    {
                        "Value": 460,
                        "Unit": null
                    },
                    {
                        "Value": 550,
                        "Unit": null
                    },
                    {
                        "Value": 640,
                        "Unit": null
                    },
                    {
                        "Value": 730,
                        "Unit": null
                    },
                    {
                        "Value": 820,
                        "Unit": null
                    },
                    {
                        "Value": 910,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    }
                ],
                "Id": 28
            },
            {
                "InputConditionId": 6,
                "SampleIds": [
                    4,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 13,
                        "Unit": null
                    },
                    {
                        "Value": 15,
                        "Unit": null
                    },
                    {
                        "Value": 18,
                        "Unit": null
                    },
                    {
                        "Value": 21,
                        "Unit": null
                    },
                    {
                        "Value": 24,
                        "Unit": null
                    },
                    {
                        "Value": 26,
                        "Unit": null
                    },
                    {
                        "Value": 29,
                        "Unit": null
                    },
                    {
                        "Value": 32,
                        "Unit": null
                    },
                    {
                        "Value": 35,
                        "Unit": null
                    },
                    {
                        "Value": 37,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    }
                ],
                "Id": 29
            },
            {
                "InputConditionId": 6,
                "SampleIds": [
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 14,
                        "Unit": null
                    },
                    {
                        "Value": 19,
                        "Unit": null
                    },
                    {
                        "Value": 23,
                        "Unit": null
                    },
                    {
                        "Value": 27,
                        "Unit": null
                    },
                    {
                        "Value": 31,
                        "Unit": null
                    },
                    {
                        "Value": 36,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    }
                ],
                "Id": 30
            },
            {
                "InputConditionId": 6,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 25,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    }
                ],
                "Id": 31
            },
            {
                "InputConditionId": 6,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 20,
                        "Unit": null
                    },
                    {
                        "Value": 30,
                        "Unit": null
                    },
                    {
                        "Value": 40,
                        "Unit": null
                    }
                ],
                "Id": 32
            },
            {
                "InputConditionId": 16,
                "SampleIds": [
                    3,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    },
                    {
                        "Value": 6,
                        "Unit": null
                    },
                    {
                        "Value": 6,
                        "Unit": null
                    },
                    {
                        "Value": 7,
                        "Unit": null
                    },
                    {
                        "Value": 7,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    }
                ],
                "Id": 33
            },
            {
                "InputConditionId": 16,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    }
                ],
                "Id": 34
            },
            {
                "InputConditionId": 16,
                "SampleIds": [
                    1,
                    5
                ],
                "TestPoints": [
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    },
                    {
                        "Value": 6,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    }
                ],
                "Id": 35
            }
        ]
    },
    'M1': {
        "Project": {
            "Name": "ABC Electronics",
            "Samples": [
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "Microchip X1",
                    "Name": "POR 1",
                    "Id": 1
                },
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "PowerMCU Y7",
                    "Name": "POR 2",
                    "Id": 2
                },
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "Microchip X15",
                    "Name": "POR 3",
                    "Id": 3
                },
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "MicroControl Z11",
                    "Name": "POR 4",
                    "Id": 4
                }
            ],
            "InputConditions": [
                {
                    "Parameter": "Power Consumption",
                    "Min": 100,
                    "Typical": 500,
                    "Max": 1000,
                    "TimeBetweenPoints": 0.5,
                    "Id": 11
                },
                {
                    "Parameter": "SPI Clock Speed",
                    "Min": 10000,
                    "Typical": 1000000,
                    "Max": 10000000,
                    "TimeBetweenPoints": 0.5,
                    "Id": 19
                },
                {
                    "Parameter": "Digital Input Voltage",
                    "Min": 0,
                    "Typical": 3.3,
                    "Max": 5,
                    "TimeBetweenPoints": 0.1,
                    "Id": 13
                },
                {
                    "Parameter": "UART Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.2,
                    "Id": 7
                },
                {
                    "Parameter": "I2C Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.1,
                    "Id": 8
                },
                {
                    "Parameter": "ADC Sampling Rate",
                    "Min": 1000,
                    "Typical": 10000,
                    "Max": 100000,
                    "TimeBetweenPoints": 0.1,
                    "Id": 20
                },
                {
                    "Parameter": "SPI Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.2,
                    "Id": 9
                },
                {
                    "Parameter": "Operating Humidity",
                    "Min": 10,
                    "Typical": 50,
                    "Max": 90,
                    "TimeBetweenPoints": 1,
                    "Id": 12
                },
                {
                    "Parameter": "Operating Temperature",
                    "Min": -40,
                    "Typical": 25,
                    "Max": 190,
                    "TimeBetweenPoints": 1,
                    "Id": 2
                },
                {
                    "Parameter": "Operating Altitude",
                    "Min": 0,
                    "Typical": 1000,
                    "Max": 5000,
                    "TimeBetweenPoints": 1,
                    "Id": 15
                }
            ],
            "Id": 2
        },
        "TestPointCollections": [
            {
                "InputConditionId": 11,
                "SampleIds": [
                    3,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 280,
                        "Unit": null
                    },
                    {
                        "Value": 460,
                        "Unit": null
                    },
                    {
                        "Value": 640,
                        "Unit": null
                    },
                    {
                        "Value": 820,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    }
                ],
                "Id": 1
            },
            {
                "InputConditionId": 11,
                "SampleIds": [
                    4,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 400,
                        "Unit": null
                    },
                    {
                        "Value": 700,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    }
                ],
                "Id": 2
            },
            {
                "InputConditionId": 19,
                "SampleIds": [
                    4,
                    1,
                    2,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 10000,
                        "Unit": null
                    },
                    {
                        "Value": 1009000,
                        "Unit": null
                    },
                    {
                        "Value": 2008000,
                        "Unit": null
                    },
                    {
                        "Value": 3007000,
                        "Unit": null
                    },
                    {
                        "Value": 4006000,
                        "Unit": null
                    },
                    {
                        "Value": 5005000,
                        "Unit": null
                    },
                    {
                        "Value": 6004000,
                        "Unit": null
                    },
                    {
                        "Value": 7003000,
                        "Unit": null
                    },
                    {
                        "Value": 8002000,
                        "Unit": null
                    },
                    {
                        "Value": 9001000,
                        "Unit": null
                    },
                    {
                        "Value": 10000000,
                        "Unit": null
                    }
                ],
                "Id": 3
            },
            {
                "InputConditionId": 13,
                "SampleIds": [
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.6,
                        "Unit": null
                    },
                    {
                        "Value": 1.2,
                        "Unit": null
                    },
                    {
                        "Value": 1.9,
                        "Unit": null
                    },
                    {
                        "Value": 2.5,
                        "Unit": null
                    },
                    {
                        "Value": 3.1,
                        "Unit": null
                    },
                    {
                        "Value": 3.8,
                        "Unit": null
                    },
                    {
                        "Value": 4.4,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 4
            },
            {
                "InputConditionId": 13,
                "SampleIds": [
                    2,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.8,
                        "Unit": null
                    },
                    {
                        "Value": 1.7,
                        "Unit": null
                    },
                    {
                        "Value": 2.5,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 4.2,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 5
            },
            {
                "InputConditionId": 7,
                "SampleIds": [
                    4,
                    2,
                    3,
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 6
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    4,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 7
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 8
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 9
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    1,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 17500,
                        "Unit": null
                    },
                    {
                        "Value": 34000,
                        "Unit": null
                    },
                    {
                        "Value": 50500,
                        "Unit": null
                    },
                    {
                        "Value": 67000,
                        "Unit": null
                    },
                    {
                        "Value": 83500,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 10
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 34000,
                        "Unit": null
                    },
                    {
                        "Value": 67000,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 11
            },
            {
                "InputConditionId": 20,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 8071.4,
                        "Unit": null
                    },
                    {
                        "Value": 15142.9,
                        "Unit": null
                    },
                    {
                        "Value": 22214.3,
                        "Unit": null
                    },
                    {
                        "Value": 29285.7,
                        "Unit": null
                    },
                    {
                        "Value": 36357.1,
                        "Unit": null
                    },
                    {
                        "Value": 43428.6,
                        "Unit": null
                    },
                    {
                        "Value": 50500,
                        "Unit": null
                    },
                    {
                        "Value": 57571.4,
                        "Unit": null
                    },
                    {
                        "Value": 64642.9,
                        "Unit": null
                    },
                    {
                        "Value": 71714.3,
                        "Unit": null
                    },
                    {
                        "Value": 78785.7,
                        "Unit": null
                    },
                    {
                        "Value": 85857.1,
                        "Unit": null
                    },
                    {
                        "Value": 92928.6,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 12
            },
            {
                "InputConditionId": 9,
                "SampleIds": [
                    1,
                    3,
                    2,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 13
            },
            {
                "InputConditionId": 12,
                "SampleIds": [
                    1,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 36.7,
                        "Unit": null
                    },
                    {
                        "Value": 63.3,
                        "Unit": null
                    }
                ],
                "Id": 14
            },
            {
                "InputConditionId": 12,
                "SampleIds": [
                    3,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 26,
                        "Unit": null
                    },
                    {
                        "Value": 42,
                        "Unit": null
                    },
                    {
                        "Value": 58,
                        "Unit": null
                    },
                    {
                        "Value": 74,
                        "Unit": null
                    },
                    {
                        "Value": 90,
                        "Unit": null
                    }
                ],
                "Id": 15
            },
            {
                "InputConditionId": 2,
                "SampleIds": [
                    3,
                    1,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": -40,
                        "Unit": null
                    },
                    {
                        "Value": -7.1,
                        "Unit": null
                    },
                    {
                        "Value": 25.7,
                        "Unit": null
                    },
                    {
                        "Value": 58.6,
                        "Unit": null
                    },
                    {
                        "Value": 91.4,
                        "Unit": null
                    },
                    {
                        "Value": 124.3,
                        "Unit": null
                    },
                    {
                        "Value": 157.1,
                        "Unit": null
                    },
                    {
                        "Value": 190,
                        "Unit": null
                    }
                ],
                "Id": 16
            },
            {
                "InputConditionId": 2,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": -40,
                        "Unit": null
                    },
                    {
                        "Value": 190,
                        "Unit": null
                    }
                ],
                "Id": 17
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    2,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 2000,
                        "Unit": null
                    },
                    {
                        "Value": 3000,
                        "Unit": null
                    },
                    {
                        "Value": 4000,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 18
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 625,
                        "Unit": null
                    },
                    {
                        "Value": 1250,
                        "Unit": null
                    },
                    {
                        "Value": 1875,
                        "Unit": null
                    },
                    {
                        "Value": 2500,
                        "Unit": null
                    },
                    {
                        "Value": 3125,
                        "Unit": null
                    },
                    {
                        "Value": 3750,
                        "Unit": null
                    },
                    {
                        "Value": 4375,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 19
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 416.7,
                        "Unit": null
                    },
                    {
                        "Value": 833.3,
                        "Unit": null
                    },
                    {
                        "Value": 1250,
                        "Unit": null
                    },
                    {
                        "Value": 1666.7,
                        "Unit": null
                    },
                    {
                        "Value": 2083.3,
                        "Unit": null
                    },
                    {
                        "Value": 2500,
                        "Unit": null
                    },
                    {
                        "Value": 2916.7,
                        "Unit": null
                    },
                    {
                        "Value": 3333.3,
                        "Unit": null
                    },
                    {
                        "Value": 3750,
                        "Unit": null
                    },
                    {
                        "Value": 4166.7,
                        "Unit": null
                    },
                    {
                        "Value": 4583.3,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 20
            }
        ]
    },
    'M2': {
        "Project": {
            "Name": "ABC Electronics",
            "Samples": [
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "Microchip X1",
                    "Name": "POR 1",
                    "Id": 1
                },
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "PowerMCU Y7",
                    "Name": "POR 2",
                    "Id": 2
                },
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "Microchip X15",
                    "Name": "POR 3",
                    "Id": 3
                },
                {
                    "FamilyName": "ABC Electronics",
                    "ProductName": "MicroControl Z11",
                    "Name": "POR 4",
                    "Id": 4
                }
            ],
            "InputConditions": [
                {
                    "Parameter": "ADC Sampling Rate",
                    "Min": 1000,
                    "Typical": 10000,
                    "Max": 100000,
                    "TimeBetweenPoints": 0.1,
                    "Id": 20
                },
                {
                    "Parameter": "Operating Humidity",
                    "Min": 10,
                    "Typical": 50,
                    "Max": 90,
                    "TimeBetweenPoints": 1,
                    "Id": 12
                },
                {
                    "Parameter": "Analog Output Voltage",
                    "Min": 0,
                    "Typical": 2.5,
                    "Max": 5,
                    "TimeBetweenPoints": 0.2,
                    "Id": 14
                },
                {
                    "Parameter": "Digital Input Voltage",
                    "Min": 0,
                    "Typical": 3.3,
                    "Max": 5,
                    "TimeBetweenPoints": 0.1,
                    "Id": 13
                },
                {
                    "Parameter": "UART Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.2,
                    "Id": 7
                },
                {
                    "Parameter": "I2C Interfaces",
                    "Min": 1,
                    "Typical": 2,
                    "Max": 4,
                    "TimeBetweenPoints": 0.1,
                    "Id": 8
                },
                {
                    "Parameter": "UART Baud Rate",
                    "Min": 9600,
                    "Typical": 115200,
                    "Max": 1000000,
                    "TimeBetweenPoints": 0.1,
                    "Id": 17
                },
                {
                    "Parameter": "Operating Altitude",
                    "Min": 0,
                    "Typical": 1000,
                    "Max": 5000,
                    "TimeBetweenPoints": 1,
                    "Id": 15
                },
                {
                    "Parameter": "ADC Resolution",
                    "Min": 8,
                    "Typical": 10,
                    "Max": 12,
                    "TimeBetweenPoints": 0.1,
                    "Id": 10
                },
                {
                    "Parameter": "Power Consumption",
                    "Min": 100,
                    "Typical": 500,
                    "Max": 1000,
                    "TimeBetweenPoints": 0.5,
                    "Id": 11
                }
            ],
            "Id": 2
        },
        "TestPointCollections": [
            {
                "InputConditionId": 20,
                "SampleIds": [
                    1,
                    2,
                    4,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 20800,
                        "Unit": null
                    },
                    {
                        "Value": 40600,
                        "Unit": null
                    },
                    {
                        "Value": 60400,
                        "Unit": null
                    },
                    {
                        "Value": 80200,
                        "Unit": null
                    },
                    {
                        "Value": 100000,
                        "Unit": null
                    }
                ],
                "Id": 1
            },
            {
                "InputConditionId": 12,
                "SampleIds": [
                    4,
                    2,
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 17.3,
                        "Unit": null
                    },
                    {
                        "Value": 24.5,
                        "Unit": null
                    },
                    {
                        "Value": 31.8,
                        "Unit": null
                    },
                    {
                        "Value": 39.1,
                        "Unit": null
                    },
                    {
                        "Value": 46.4,
                        "Unit": null
                    },
                    {
                        "Value": 53.6,
                        "Unit": null
                    },
                    {
                        "Value": 60.9,
                        "Unit": null
                    },
                    {
                        "Value": 68.2,
                        "Unit": null
                    },
                    {
                        "Value": 75.5,
                        "Unit": null
                    },
                    {
                        "Value": 82.7,
                        "Unit": null
                    },
                    {
                        "Value": 90,
                        "Unit": null
                    }
                ],
                "Id": 2
            },
            {
                "InputConditionId": 14,
                "SampleIds": [
                    4,
                    3,
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.8,
                        "Unit": null
                    },
                    {
                        "Value": 1.7,
                        "Unit": null
                    },
                    {
                        "Value": 2.5,
                        "Unit": null
                    },
                    {
                        "Value": 3.3,
                        "Unit": null
                    },
                    {
                        "Value": 4.2,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 3
            },
            {
                "InputConditionId": 14,
                "SampleIds": [
                    1
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.5,
                        "Unit": null
                    },
                    {
                        "Value": 0.9,
                        "Unit": null
                    },
                    {
                        "Value": 1.4,
                        "Unit": null
                    },
                    {
                        "Value": 1.8,
                        "Unit": null
                    },
                    {
                        "Value": 2.3,
                        "Unit": null
                    },
                    {
                        "Value": 2.7,
                        "Unit": null
                    },
                    {
                        "Value": 3.2,
                        "Unit": null
                    },
                    {
                        "Value": 3.6,
                        "Unit": null
                    },
                    {
                        "Value": 4.1,
                        "Unit": null
                    },
                    {
                        "Value": 4.5,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 4
            },
            {
                "InputConditionId": 13,
                "SampleIds": [
                    2,
                    4,
                    1,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 0.5,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1.5,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2.5,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3.5,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4.5,
                        "Unit": null
                    },
                    {
                        "Value": 5,
                        "Unit": null
                    }
                ],
                "Id": 5
            },
            {
                "InputConditionId": 7,
                "SampleIds": [
                    3,
                    1,
                    2,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 6
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    1,
                    2,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 7
            },
            {
                "InputConditionId": 8,
                "SampleIds": [
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 1,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 2,
                        "Unit": null
                    },
                    {
                        "Value": 3,
                        "Unit": null
                    },
                    {
                        "Value": 4,
                        "Unit": null
                    }
                ],
                "Id": 8
            },
            {
                "InputConditionId": 17,
                "SampleIds": [
                    1,
                    2,
                    3,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 9600,
                        "Unit": null
                    },
                    {
                        "Value": 207680,
                        "Unit": null
                    },
                    {
                        "Value": 405760,
                        "Unit": null
                    },
                    {
                        "Value": 603840,
                        "Unit": null
                    },
                    {
                        "Value": 801920,
                        "Unit": null
                    },
                    {
                        "Value": 1000000,
                        "Unit": null
                    }
                ],
                "Id": 9
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 416.7,
                        "Unit": null
                    },
                    {
                        "Value": 833.3,
                        "Unit": null
                    },
                    {
                        "Value": 1250,
                        "Unit": null
                    },
                    {
                        "Value": 1666.7,
                        "Unit": null
                    },
                    {
                        "Value": 2083.3,
                        "Unit": null
                    },
                    {
                        "Value": 2500,
                        "Unit": null
                    },
                    {
                        "Value": 2916.7,
                        "Unit": null
                    },
                    {
                        "Value": 3333.3,
                        "Unit": null
                    },
                    {
                        "Value": 3750,
                        "Unit": null
                    },
                    {
                        "Value": 4166.7,
                        "Unit": null
                    },
                    {
                        "Value": 4583.3,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 10
            },
            {
                "InputConditionId": 15,
                "SampleIds": [
                    2,
                    1,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 0,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    },
                    {
                        "Value": 2000,
                        "Unit": null
                    },
                    {
                        "Value": 3000,
                        "Unit": null
                    },
                    {
                        "Value": 4000,
                        "Unit": null
                    },
                    {
                        "Value": 5000,
                        "Unit": null
                    }
                ],
                "Id": 11
            },
            {
                "InputConditionId": 10,
                "SampleIds": [
                    2
                ],
                "TestPoints": [
                    {
                        "Value": 8,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 12,
                        "Unit": null
                    }
                ],
                "Id": 12
            },
            {
                "InputConditionId": 10,
                "SampleIds": [
                    3,
                    1,
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 8,
                        "Unit": null
                    },
                    {
                        "Value": 8,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 9,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 10,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 11,
                        "Unit": null
                    },
                    {
                        "Value": 12,
                        "Unit": null
                    }
                ],
                "Id": 13
            },
            {
                "InputConditionId": 11,
                "SampleIds": [
                    4
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 400,
                        "Unit": null
                    },
                    {
                        "Value": 700,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    }
                ],
                "Id": 14
            },
            {
                "InputConditionId": 11,
                "SampleIds": [
                    1,
                    2,
                    3
                ],
                "TestPoints": [
                    {
                        "Value": 100,
                        "Unit": null
                    },
                    {
                        "Value": 280,
                        "Unit": null
                    },
                    {
                        "Value": 460,
                        "Unit": null
                    },
                    {
                        "Value": 640,
                        "Unit": null
                    },
                    {
                        "Value": 820,
                        "Unit": null
                    },
                    {
                        "Value": 1000,
                        "Unit": null
                    }
                ],
                "Id": 15
            }
        ]
    },
}