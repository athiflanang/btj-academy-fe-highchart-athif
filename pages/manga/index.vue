<template>
    <highchart :options="chartMultipleAxisOptions"></highchart>
    <highchart :options="chartOptions"></highchart>
</template>

<script>
    export default {
        data() {
            return {
            chartMultipleAxisOptions: {
                        chart: {
                            // type: 'column'
                        },
                        title: {
                            text: 'Perkiraan Cuaca Bulanan Tangerang Selatan',
                            align: 'Left',
                        },
                        subtitle: {
                            text: 'Badan Meterologi Indonesia',
                            align: 'Left'
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
                                return [`<b>Tahun ${this.x}</b><br />`].concat(
                                    this.points ? this.points.map(point => {
                                        return `Jumlah ${point.series.name}: ${point.y} <br />` 
                                    }) : []
                                )
                            },
                            split: true
                        },
                        yAxis: [
                            {
                                title: {
                                    text: 'Temperature'
                                },
                                labels: {
                                    format: '{value}°C',
                                }
                            },
                            {
                                title: {
                                    text: 'Kelembapan udara'
                                },
                                labels: {
                                    format: '{value}%',
                                }
                            },
                            {
                                title: {
                                    text: 'Kecepatan angin'
                                },
                                labels: {
                                    format: '{value} Km/H',
                                },
                                opposite: true
                            }
                        ],
                        series: [
                            {
                                name: 'temperature',
                                type: 'column',
                                color: 'lightblue',
                                tooltip: {
                                    valueSuffix: '°C',
                                },
                                data: [25, 26, 25, 28, 29, 30, 31, 34, 30, 35, 31, 29]
                            },
                            {
                                name: 'Kelembapan udara',
                                type: 'spline',
                                color: 'green',
                                yAxis: 1,
                                tooltip: {
                                    valueSuffix: '%',
                                },
                                marker: {
                                    enabled: true
                                },
                                dashStyle: 'dot',
                                data: [85, 87, 89, 90, 92, 88, 89, 95, 97, 92, 93, 90]
                            },
                            {
                                name: 'Kecepatan angin',
                                type: 'spline',
                                color: 'yellow',
                                yAxis: 2,
                                tooltip: {
                                    valueSuffix: ' Km/H'
                                },
                                data: [12, 14, 18, 20, 16, 17, 14, 16, 18, 13, 18, 14]
                            }
                        ],
                        xAxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            title: {
                                text: 'Bulan'
                            }
                        },
                    },
            chartOptions: {
                        chart: {
                            // type: 'column'
                        },
                        title: {
                            text: 'Census penduduk tangsel',
                            align: 'Left',
                        },
                        subtitle: {
                            text: 'Kabupaten tangsel',
                            align: 'Left'
                        },
                        legend: {
                            align: 'right',
                            verticalAlign: 'top',
                            layout: 'vertical',
                            reversed: false,
                        },
                        tooltip: {
                            shared: true,
                            formatter: function () {
                                console.log(this.points)
                                return [`<b>Tahun ${this.x}</b><br />`].concat(
                                    this.points ? this.points.map(point => {
                                        return `Jumlah ${point.series.name}: ${point.y} <br />` 
                                    }) : []
                                )
                            },
                            split: true
                        },
                        series: [
                            {
                                name: 'Pria',
                                type: 'column',
                                data: [70, 80, 120, 125, 122]
                            },
                            {
                                name: 'Wanita',
                                type: 'column',
                                data: [75, 88, 130, 145, 152]
                            },
                            {
                                name: 'Rata - rata',
                                type: 'line',
                                color: 'yellow',
                                step: 'center',
                                data: [72.5, 84, 125, 135, 137]
                            },
                            {
                                name: 'Total',
                                type: 'pie',
                                size: 120,
                                center: [50, 44],
                                innerSize: '30%',
                                dataLabels: {
                                    enabled: false
                                },
                                data: [
                                    {
                                        name: 'Pria',
                                        y: 517,
                                    },
                                    {
                                        name: 'Wanita',
                                        y: 590,
                                    },
                                ],
                            }
                        ],
                        xAxis: {
                            categories: ['2019', '2020', '2021', '2022', '2023'],
                            title: {
                                text: 'Tahun',
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'Jumlah Penduduk'
                            },
                            labels: {
                                format: '{value}Jt',
                            }
                        },
                    }
                }
            }
        }
</script>