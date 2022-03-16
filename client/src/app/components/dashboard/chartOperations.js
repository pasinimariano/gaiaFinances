import React from 'react'
import ReactApexChart from 'react-apexcharts'

export const ChartOperations = ({ chartDataX, chartDataY, classes }) => {
  const series = [
    {
      name: 'Cantidad',
      data: chartDataY
    }
  ]
  const config = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      }
    },
    colors: ['#B8405E'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Operaciones a lo largo del tiempo',
      align: 'center'
    },
    grid: {
      row: {
        colors: ['#203239', 'transparent']
      }
    },
    xaxis: {
      categories: chartDataX
    }
  }

  return (
    <ReactApexChart options={config} series={series} type='line' height={350} />
  )
}
