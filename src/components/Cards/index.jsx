import React from "react"
import styles from './index.module.css'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"
import cx from "classnames"

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading..."
    }

    const population = (Number(confirmed.value) + Number(recovered.value) + Number(deaths.value));

    const recoveredColor = (Number(recovered.value) / population) * 100
    const recoveredColorDec = recoveredColor.toFixed(1)
    const deathsColor = (Number(deaths.value) / population) * 100
    const deathsColorDec = deathsColor.toFixed(1)

    // const confirmedColor = (100 - Number(recoveredColorDec)) + Number(recoveredColorDec)
    const confirmedColor = (Number(confirmed.value) / population) * 100
    console.log(confirmedColor)

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} style={{ borderBottom: ` ${confirmedColor}px solid rgba(0, 0, 255, 0.5)` }}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} style={{ borderBottom: ` ${recoveredColorDec}px solid rgba(0, 255, 0, 0.5)` }}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number recovered from covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} style={{ borderBottom: ` ${deathsColorDec}px solid rgba(255, 0, 0, 0.5)` }}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div >
    )
}

export default Cards