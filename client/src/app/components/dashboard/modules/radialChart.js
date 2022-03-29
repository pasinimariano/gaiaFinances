import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'

export const RadialChart = ({ radialChartData }) => {
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
      text: 'Gastos por categoria'
    },
    legend: {
      show: false
    }
  })

  useEffect(() => {
    setSeries(Object.values(radialChartData))
    setConfig(prevState => ({
      ...prevState,
      labels: Object.keys(radialChartData)
    }))
  }, [radialChartData])

  return (
    <>
      {!series ? null : (
        <ReactApexChart options={config} series={series} type='pie' />
      )}
    </>
  )
}
