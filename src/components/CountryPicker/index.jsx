import React, { useState, useEffect } from "react"
import styles from './index.module.css'
import { NativeSelect, FormControl } from "@material-ui/core"

import { fetchCountries } from "./../../api"

const CountryPicker = ({ handleCountryChange }) => {
    const [fCountries, setFCountries] = useState([])

    useEffect(() => {
        const fetchC = async () => {
            setFCountries(await fetchCountries())
        }
        fetchC()
        // console.log(fCountries)
    }, [fCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} className={styles.select_option}>
                <option value="">Global</option>
                {fCountries.map((c, i) => {
                    return (
                        <option key={i} value={c}>{c}</option>
                    )
                })}

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker