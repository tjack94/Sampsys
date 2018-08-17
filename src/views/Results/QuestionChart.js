import React, {Component} from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'

class QuestionChart extends Component{
    constructor(props){
        super(props)
        this.state ={
            displayCharts: false,
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'Responses',
                        data:[],
                        backgoundColor:[]
                    }
                ]
            }
        }
    }
    componentWillMount(){
        axios.get('/api/get-chart-data/' + this.props.currentQuestion.question_id)
        .then( ({data})=>{
            var chartData = this.state.data
            const chartLabels = []
            const dataPoints = []
            const backgroundColor=[]

            data.map((response)=>{
                chartLabels.push(response.response) 
                dataPoints.push(response.count)
                backgroundColor.push('rgba(41, 59, 89, 1)')

                chartData.labels = chartLabels
                chartData.datasets[0].data = dataPoints
                chartData.datasets[0].backgroundColor=backgroundColor
                
                this.setState( { data: chartData } )
            })
        }).then(()=> this.setState({displayCharts: true}))
    }
     render(){
     const chart= this.state.displayCharts === true ? (
        <Bar
        data={this.state.data}
        options ={{
            title:{
                display: true,
                text: this.props.currentQuestion.question,
                fontSize: 28
            },
            legend:{
                display: false
            },
            scales:{
                yAxes: [{
                    ticks:{
                        beginAtZero: true,
                        
                    }
                }]
            }
            
        }}
        width ={800}
        height= {400}
        />

     )  : (
         
         <h1>Loading...</h1>
         
     ) 
         return(
           <div>
               {chart}
           </div>
         )
     }   
}
export default QuestionChart