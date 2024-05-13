'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ account }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Account',
        data: [1250, 2500, 1000],
        backgroundColor: ['#aab6bd', '#3a5b71', '#c2ae7c'],
      },
    ],
    labels: ['Checking', 'Savings', 'Credit Card'],
  }

  return (
    <Doughnut
      data={data}
      options={{
        cutout: '80%',
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  )
}

export default DoughnutChart
