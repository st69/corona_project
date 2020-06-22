import React from 'react';
import styles from './App.module.css';
import { Cards, CountryPicker } from "./components"

import { fetchData } from "./api"

import coronaImage from "./images/corona.png"
import corona_two from "./images/corona_two.png"

class App extends React.PureComponent {
  state = {
    data: {},
    country: "",
    toggle: false
  }

  async componentDidMount() {
    const responseData = await fetchData()
    this.setState({ data: responseData })
  }

  handleCountryChange = async (country) => {
    const responseData = await fetchData(country)
    this.setState({ data: responseData, country: country })
  }

  handleTheme = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const { data, country, toggle } = this.state
    return (
      <div className={styles.container} style={toggle ? { backgroundColor: "#000" } : { backgroundColor: "#fff" }}>
        <div className={styles.img_btn_box}>
          {toggle ? <img src={corona_two} className={styles.coronaImageStyle} alt="Covid19" /> : <img src={coronaImage} className={styles.coronaImageStyle} alt="Covid19" />}
          <button className={toggle ? styles.darkTheme : styles.lightTheme} onClick={this.handleTheme}>{toggle ? "Light" : "Dark"}</button>
        </div>
        <div className={styles.components_padding}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          {/* <Chart data={data} country={country} /> */}
        </div>
      </div >
    )
  }
}

export default App;
