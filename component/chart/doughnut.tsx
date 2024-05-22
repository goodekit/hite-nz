'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ account }: DoughnutChartProps) => {
  const accountNames = account.map((item) => item.name)
  const balances = account.map((item) => item.currentBalance)

  const data = {
    datasets: [
      {
        label: 'Account',
        data: balances,
        backgroundColor: ['#aab6bd', '#3a5b71', '#c2ae7c'],
      },
    ],
    labels: accountNames,
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
