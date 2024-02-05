
import Appcontainer from '../components/appcontainer.vue';
<template>
    <div class="grid grid-cols-2 gap-2">
        <div class="bg-grey-200 rounded-md shadow-md">
            <highchart :options="chartColumnStackOptions"/>
        </div>
        <div class="bg-grey-200 rounded-md shadow-md">
            <highchart 
            :options="pieChartOptions"
            :modules="['exporting', 'export-data']"
            />
        </div>
        <div class="bg-grey-200 rounded-md shadow-md">
            <highchart 
            :options="chartOptions"
            :modules="['exporting', 'export-data']"
            />
        </div>
        <div class="bg-grey-200 rounded-md shadow-md">
            <highchart 
            :options="chartColumnOptions"
            :modules="['exporting', 'export-data']"
            />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pieChartOptions: {
                    lang: {
                        // dictionary
                    },
                    chart: {
                        type: 'pie',
                        backgroundColor: 'grey',
                    },
                    title: {
                        text: 'Sales figurin tahun 2023',
                        style: {
                            color: 'white',
                            fontSize: '20px',
                            textTransform: 'uppercase'
                        }
                    },
                    subtitle: {
                        text: 'Source: Hobby Store Tangerang Selatan 2018 - 2024',
                        style: {
                            color: 'white'
                        }
                    },
                    plotOptions: {
                        pie: {
                            innerSize: '30%',
                            allowPointSelect: true,
                            dataLabels: {
                                enabled: true,
                                disctance: -90,
                                format: '{point.name}<br /> {point.y}'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Jumlah',
                            data: [
                                {
                                    name: 'Pria',
                                    y: 300
                                },
                                {
                                    name: 'wanita',
                                    y: 120
                                },
                            ]
                        }
                    ]
                },
                chartOptions: {
                    chart: {
                        type: 'areaspline',
                        backgroundColor: 'transparent',
                    },
                    title: {
                        text: 'statistic penduduk tangerang selatan'
                    },
                    subtitle: {
                        text: 'Source: Tangerang Selatan 2018 - 2024'
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        layout: 'vertical',
                    },
                    tooltip: {
                        // formatter: function () {
                        //     return `<br><b>Tahun ${this.x} </b></br>  
                        //     jumlah penduduk ${this.point.y} 
                        //     <b>${this.series.name}</b>`;
                        // },
                        shared: true,
                        formatter: function () {
                            console.log(this.points)
                            return [`<b>Tahun ${this.x}</b><br />`].concat(
                                this.points ? this.points.map(point => {
                                    return `Jumlah ${point.series.name}: ${point.y} <br />` 
                                }) : []
                            )
                            return 'something';
                        }
                        // format:'tahun : <br>{point.x}</br> jumlah penduduk : <b>{series.name}</b> <b>{point.y}</b>'
                    },
                    plotOptions: {
                        areaspline: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: false
                            },
                        },
                    },
                    xAxis: {
                        categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                        title: {
                            text: 'Tahun'
                        },
                    },
                    yAxis: {
                        title: {
                            text: 'Jumlah penduduk'
                        },
                    },
                    series: [
                        {
                            name: 'Pria',
                            data: [2140, 2500, 3670, 5500, 6320, 6201, 7000]
                        },
                        {
                            name: 'Wanita',
                            data: [3333, 3901, 6270, 7890, 9000, 8906, 8771]
                        }
                    ]
                },
                chartColumnOptions: {
                    chart: {
                        type: 'column',
                        backgroundColor: 'transparent',
                    },
                    credits: {
                        enabled: "true"
                    },
                    title: {
                        text: 'statistic penduduk tangerang selatan'
                    },
                    subtitle: {
                        text: 'Source: Tangerang Selatan 2018 - 2024'
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        layout: 'vertical',
                    },
                    tooltip: {
                        // formatter: function () {
                        //     return `<br><b>Tahun ${this.x} </b></br>  
                        //     jumlah penduduk ${this.point.y} 
                        //     <b>${this.series.name}</b>`;
                        // },
                        split: true,
                        formatter: function () {
                            console.log(this.points)
                            return [`<b>Tahun ${this.x}</b><br />`].concat(
                                this.points ? this.points.map(point => {
                                    return `Jumlah ${point.series.name}: ${point.y} <br />` 
                                }) : []
                            )
                            return 'something';
                        }
                        // format:'tahun : <br>{point.x}</br> jumlah penduduk : <b>{series.name}</b> <b>{point.y}</b>'
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: false
                            },
                        },
                    },
                    xAxis: {
                        categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                        title: {
                            text: 'Tahun'
                        },
                    },
                    yAxis: {
                        title: {
                            text: 'Jumlah penduduk'
                        },
                    },
                    series: [
                        {
                            name: 'Pria',
                            data: [2140, 2500, 3670, 5500, 6320, 6201, 7000]
                        },
                        {
                            name: 'Wanita',
                            data: [3333, 3901, 6270, 7890, 9000, 8906, 8771]
                        }
                    ]
                },
                chartColumnStackOptions: {
                    chart: {
                        type: 'bar',
                        backgroundColor: 'transparent',
                    },
                    title: {
                        text: 'statistic penduduk tangerang selatan'
                    },
                    subtitle: {
                        text: 'Source: Tangerang Selatan 2018 - 2024'
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        layout: 'vertical',
                    },
                    tooltip: {
                        // formatter: function () {
                        //     return `<br><b>Tahun ${this.x} </b></br>  
                        //     jumlah penduduk ${this.point.y} 
                        //     <b>${this.series.name}</b>`;
                        // },
                        shared: true,
                        formatter: function () {
                            console.log(this.points)
                            return [`<b>Tahun ${this.x}</b><br />`].concat(
                                this.points ? this.points.map(point => {
                                    return `Jumlah ${point.series.name}: ${point.y} <br />` 
                                }) : []
                            )
                            return 'something';
                        }
                        // format:'tahun : <br>{point.x}</br> jumlah penduduk : <b>{series.name}</b> <b>{point.y}</b>'
                    },
                    plotOptions: {
                        bar: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: false
                            },
                        },
                    },
                    xAxis: {
                        categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                        title: {
                            text: 'Tahun'
                        },
                    },
                    yAxis: {
                        title: {
                            text: 'Jumlah penduduk'
                        },
                    },
                    series: [
                        {
                            name: 'Pria',
                            data: [2140, 2500, 3670, 5500, 6320, 6201, 7000]
                        },
                        {
                            name: 'Wanita',
                            data: [3333, 3901, 6270, 7890, 9000, 8906, 8771]
                        }
                    ]
                }
            }
        }
    }
</script>