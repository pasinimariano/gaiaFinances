import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'

export const RoundedChart = ({ roudedChartData }) => {
  const [series, setSeries] = useState([])
  const [config, setConfig] = useState({
    labels: [],
    bar: {
      dataLabels: {
        position: 'top'
      }
    },
    chart: {
      width: '100%'
    },
    dataLabels: {
      enabled: true
    },
    title: {
      text: 'Movimientos según su categoria'
    },
    legend: {
      show: false
    }
  })

  useEffect(() => {
    setSeries(Object.values(roudedChartData))
    setConfig(prevState => ({
      ...prevState,
      labels: Object.keys(roudedChartData)
    }))
  }, [roudedChartData])

  return (
    <>
      {!roudedChartData ? null : (
        <ReactApexChart options={config} series={series} type='pie' />
      )}
    </>
  )
}
