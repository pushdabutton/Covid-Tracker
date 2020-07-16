import React from 'react'

import {fetchData} from './api'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'

class App extends React.Component {

    state = {
        data: {},
        counrty: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState( { data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country})
    }

    render() {
        const {data, country} = this.state
        return (
            <div className={styles.container} >
               <Cards data={data} country={country}/>
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;