<<<<<<< HEAD
// import React from 'react'
// import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
// import { Pie } from 'react-chartjs-2'
// import { ChartWrapper } from './Charts.style'

// ChartJS.register(ArcElement, Tooltip, Legend)

// const PieChart = (props) => {
//     const { data } = props
//     return (
//         <ChartWrapper>
//             <Pie data={data} options={{ responsive: true }} />
//         </ChartWrapper>
//     )
// }

// PieChart.propTypes = {}

// export default PieChart
=======
import React from 'react'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { ChartWrapper } from './Charts.style'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = (props) => {
    const { data } = props
    return (
        <ChartWrapper>
            <Pie data={data} options={{ responsive: true }} />
        </ChartWrapper>
    )
}

PieChart.propTypes = {}

export default PieChart
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
