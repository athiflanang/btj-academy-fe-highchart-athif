<template>
    <div class="bg-grey-500 rounded-md shadow-md">
        <highchart 
            :options="chartMultipleOptions"
            :modules="['exporting', 'export-data']"
        />
    </div>
</template>

<script>
export default{
    data(){
        return {
            chartMultipleOptions: {
                title: {
                    text: 'Census Data Penduduk Indonesia 2023',
                    align: 'left',
                },
                subtitle: {
                    text: 'Source: Pemerintah Indonesia periode tahun 2018 - 2024',
                    align: 'left',
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'horizontal',
                    reversed: false,
                },
                tooltip: {
                    shared: true,
                    formatter: function () {
                        console.log(this.points)
                        return [`<b>Daerah ${this.x}</b><br />`].concat(
                            this.points ? this.points.map(point =>{
                                return `Jumlah ${point.series.name}: ${point.y}<br />`
                            }) : []
                        )
                    },
                },
                yAxis: [
                    {
                        title: {
                            text: 'Jumlah Penduduk',
                        },
                        labels: {
                            format: '{value} Jt',
                        },
                    },
                    {
                        title: {
                            text: 'Jumlah Penduduk / Kilometer Persegi'
                        },
                        labels: {
                            format: '{value} km2',
                        },
                        opposite: true
                    }
                ],
                series: [
                    {
                        name: 'Penduduk',
                        type: 'column',
                        color: 'lightgreen',
                        tooltip: {
                            valueSuffix: ' Jt',
                        },
                        data: [
                            5471625, 15401904, 5701545, 6794944, 3726004,
                            8813243, 2078958, 9001424, 2150329, 11350328,
                            49572392, 37949234, 3710229, 41471061, 12381098,
                            4327276, 5576992, 5573515, 5525789, 2726529,
                            4205816, 3970764, 734713, 2676012, 3123662,
                            9349137, 2726590, 1225808, 1457481, 1900914,
                            1354803, 1077141, 562214, 526777, 1351659,
                            1461492, 607097
                        ]
                    },
                    {
                        name: 'Penduduk / Kilometer Persegi',
                        type: 'spline',
                        color: 'lightblue',
                        yAxis: 1,
                        tooltip: {
                            valueSuffix: ' km2',
                        },
                        makers: {
                            enabled: false
                        },
                        data: [
                            56834.746, 72460.744, 42119.542, 89935.896, 49026.579,
                            86771.684, 20128.34, 33570.264, 8269.708, 660.982,
                            37044.858, 34337.489, 3170.645, 48036.84, 9352.767,
                            5590.15, 19675.889, 46446.644, 147037.037, 153443.908,
                            37135.054, 126981.279, 70101.184, 14500.275, 61605.718,
                            45330.55, 36159.713, 12025.147, 16594.749, 46158.267,
                            32998.696, 82680.958, 60275.31, 117849.159, 61072.913,
                            51213.33, 39122.948
                        ]
                    },
                ],
                xAxis: {
                    categories: [
                        'ACEH', 'SUMATERA UTARA', 'SUMATERA BARAT', 'RIAU', 'JAMBI',
                        'SUMATERA SELATAN', 'BENGKULU', 'LAMPUNG', 'KEPULAUAN RIAU',
                        'DKI JAKARTA', 'JAWA BARAT', 'JAWA TENGAH', 'DAERAH ISTIMEWA YOGYAKARTA', 
                        'JAWA TIMUR', 'BANTEN', 'BALI', 'NUSA TENGGARA BARAT', 'NUSA TENGGARA TIMUR',
                        'KALIMANTAN BARAT', 'KALIMANTAN TENGAH', 'KALIMANTAN SELATAN', 'KALIMANTAN TIMUR', 'KALIMANTAN UTARA',
                        'SULAWESI UTARA', 'SULAWESI TENGAH', 'SULAWESI SELATAN', 'SULAWESI TENGGARA', 'GORONTALO',
                        'SULAWESI BARAT', 'MALUKU', 'MALUKU UTARA', 'PAPUA', 'PAPUA BARAT',
                        'PAPUA SELATAN', 'PAPUA TENGAH', 'PAPUA PEGUNUNGAN', 'PAPUA BARAT DAYA'
                    ],
                    title: {
                        text: 'Daerah'
                    }
                }
            }
        }
    }
}
</script>