import './App.css';
import {Box, Button, Container, Grid, Paper, Stack, TextField, Typography} from "@mui/material";
import gjlogo from './weiss_weiss.png'
import {Component} from "react";
import React, { useState } from "react"
function App(){

        const [zeitraum, setzeitraum] = useState("");
        const [termin1, settermin1] = useState("");
        const [termin2, settermin2] = useState("");
        const [termin3, settermin3] = useState("");
        const [termin4, settermin4] = useState("");
        const [termin5, settermin5] = useState("");
        const [termin6, settermin6] = useState("");
        const [veranstaltung1, setveranstaltung1] = useState("");
        const [veranstaltung2, setveranstaltung2] = useState("");
        const [veranstaltung3, setveranstaltung3] = useState("");
        const [veranstaltung4, setveranstaltung4] = useState("");
        const [veranstaltung5, setveranstaltung5] = useState("");
        const [veranstaltung6, setveranstaltung6] = useState("");


        const handlezeitraum = e => {
            setzeitraum(e.target.value);
        }

        const handletermin1 = e => {
            settermin1(e.target.value);
        }

        const handletermin2 = e => {
            settermin2(e.target.value);
        }

        const handletermin3 = e => {
            settermin3(e.target.value);
        }

        const handletermin4 = e => {
            settermin4(e.target.value);
        }

        const handletermin5 = e => {
            settermin5(e.target.value);
        }

        const handletermin6 = e => {
            settermin6(e.target.value);
        }

        return (
            <div className="App">


                <header className="App-header">
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={4}

                    >
                        <Stack
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={4}

                        >
                            <Typography marginLeft ={12}  marginTop={5} marginBottom={5} fontFamily="Good Brush" fontSize={90} color={"#212520"} >
                                Termin Generator <br/>
                            </Typography>
                        </Stack>
                    </Stack>

                </header>

                <Grid
                    container
                    justifyContent="space-around"
                    direction="row"
                    margin={7}
                    alignItems="center"


                >
                    <Grid item>
                        <div id = "Form">
                            <Stack spacing={2}>
                                <TextField id = "zeitraum" label = "Zeitraum" variant = "standard" onChange={handlezeitraum}></TextField>
                                <Stack direction="row" spacing={2}>
                                    <TextField id = "termin1" label = "Tag, Datum, Veranstaltung"  variant = "standard" onChange={handletermin1}></TextField>

                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <TextField id = "termin2" label = "Tag, Datum, Veranstaltung"  variant = "standard" onChange={handletermin2}></TextField>

                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <TextField id = "termin3" label = "Tag, Datum, Veranstaltung" variant = "standard" onChange={handletermin3}></TextField>

                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <TextField id = "termin4" label = "Tag, Datum, Veranstaltung"  variant = "standard" onChange={handletermin4}></TextField>

                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <TextField id = "termin5" label = "Tag, Datum, Veranstaltung"  variant = "standard" onChange={handletermin5}></TextField>

                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <TextField id = "termin6" label = "Tag, Datum, Veranstaltung "  variant = "standard" onChange={handletermin6}></TextField>

                                </Stack>
                                <Typography>
                                    (max 29 buchstaben)
                                </Typography>

                            </Stack>
                        </div>
                    </Grid>

                    <Grid item>

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={3}
                        >
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={0}
                                sx={{
                                    width: 300,
                                    height: 300,
                                    backgroundColor: '#006342',
                                }}
                            >
                                <Typography
                                    sx={{
                                        transform: "matrix(1, -0.11, 0.09, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={1}
                                    fontFamily="Good Brush"
                                    fontSize={50}
                                    color={"#FFF"} >
                                    Termine
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -25,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.09, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={0}
                                    fontFamily="Good Brush"
                                    fontSize={30}
                                    textAlign={"left"}
                                    color={"#78D348"} >
                                    {zeitraum != "" ? zeitraum : "\n" }
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -20,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={0}
                                    fontFamily= "Titillium"
                                    textAlign={"left"}
                                    fontWeight={"normal"}
                                    fontSize={16}
                                    color={"#FFF"} >
                                    {termin1 != "" ? termin1 + "\n" : <br/>}
                                </Typography>
                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -20,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={0}
                                    fontFamily= "Titillium"
                                    fontWeight={"normal"}
                                    textAlign={"left"}
                                    fontSize={16}
                                    color={"#FFF"} >
                                    {termin2 != "" ? termin2 + "\n" : <br/>}
                                </Typography>
                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -20,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={0}
                                    fontFamily= "Titillium"
                                    fontWeight={"normal"}
                                    textAlign={"left"}
                                    fontSize={16}
                                    color={"#FFF"} >
                                    {termin3 != "" ? termin3 + "\n" : <br/>}
                                </Typography>
                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -20,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={0}
                                    fontFamily= "Titillium"
                                    fontWeight={"normal"}
                                    textAlign={"left"}
                                    fontSize={16}
                                    color={"#FFF"} >
                                    {termin4 != "" ? termin4 + "\n" : <br/>}
                                </Typography>
                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -20,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={0}
                                    fontFamily= "Titillium"
                                    fontWeight={"normal"}
                                    textAlign={"left"}
                                    fontSize={16}
                                    color={"#FFF"} >
                                    {termin5 != "" ? termin5 + "\n" : <br/>}
                                </Typography>
                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -20,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                    }}
                                    marginLeft={4}
                                    marginTop ={0}
                                    fontFamily= "Titillium"
                                    fontWeight={"normal"}
                                    textAlign={"left"}
                                    fontSize={16}
                                    color={"#FFF"} >
                                    {termin6 != "" ? termin6 + "\n" : <br/>}
                                </Typography>

                                <Container
                                    sx={{
                                        position: "relative",
                                        top: -70,
                                        left: 175,
                                        textAlign: "left",
                                    }}
                                >
                                    <img
                                        width={100}
                                        height={100}
                                        src={gjlogo}
                                        alt={"logo"}
                                    />
                                </Container>

                            </Stack>




                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"

                                sx={{

                                    width: 300,
                                    height: 532.89,
                                    backgroundColor: '#006342',
                                }}
                            >
                                <Typography
                                    sx={{
                                        transform: "matrix(1, -0.11, 0.09, 0.99, 0, 0)",
                                    }}
                                    marginLeft={3}
                                    marginTop ={5}
                                    fontFamily="Good Brush"
                                    fontSize={60}
                                    color={"#FFF"} >
                                    Termine
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -25,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.09, 0.99, 0, 0)",
                                        textAlign: "left",
                                    }}
                                    marginLeft={3}
                                    marginTop ={0}
                                    fontFamily="Good Brush"
                                    textAlign={"left"}
                                    fontSize={40}
                                    color={"#78D348"} >
                                    {zeitraum != "" ? zeitraum : "\n" }
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -15,
                                        width: 290,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                        textAlign: "left",
                                    }}
                                    marginLeft={3}
                                    marginTop ={2}
                                    fontFamily= "Titillium"
                                    textAlign={"left"}
                                    fontWeight={"normal"}
                                    fontSize={19}
                                    color={"#FFF"} >
                                    {termin1 != "" ? termin1 + "\n" : <br/>}
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -15,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                        textAlign: "left",
                                    }}
                                    marginLeft={3}
                                    marginTop ={2}
                                    fontFamily= "Titillium"
                                    textAlign={"left"}
                                    fontWeight={"normal"}
                                    fontSize={19}
                                    color={"#FFF"} >
                                    {termin2 != "" ? termin2 + "\n" : <br/>}
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -15,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                        textAlign: "left",
                                    }}
                                    marginLeft={3}
                                    marginTop ={2}
                                    fontFamily= "Titillium"
                                    textAlign={"left"}
                                    fontWeight={"normal"}
                                    fontSize={19}
                                    color={"#FFF"} >
                                    {termin3 != "" ? termin3 + "\n" : <br/>}
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -15,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                        textAlign: "left",
                                    }}
                                    marginLeft={3}
                                    marginTop ={2}
                                    fontFamily= "Titillium"
                                    textAlign={"left"}
                                    fontWeight={"normal"}
                                    fontSize={19}
                                    color={"#FFF"} >
                                    {termin4 != "" ? termin4 + "\n" : <br/>}
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -15,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                        textAlign: "left",
                                    }}
                                    marginLeft={3}
                                    marginTop ={2}
                                    fontFamily= "Titillium"
                                    textAlign={"left"}
                                    fontWeight={"normal"}
                                    fontSize={19}
                                    color={"#FFF"} >
                                    {termin5 != "" ? termin5 + "\n" : <br/>}
                                </Typography>

                                <Typography
                                    sx={{
                                        position: "relative",
                                        top: -15,
                                        width: 250,
                                        transform: "matrix(1, -0.11, 0.01, 0.99, 0, 0)",
                                        textAlign: "left",
                                    }}
                                    marginLeft={3}
                                    marginTop ={2}
                                    fontFamily= "Titillium"
                                    textAlign={"left"}
                                    fontWeight={"normal"}
                                    fontSize={19}
                                    color={"#FFF"} >
                                    {termin6 != "" ? termin6 + "\n" : <br/>}
                                </Typography>

                                <Container
                                    sx={{
                                        position: "relative",
                                        top: -40,
                                        left: 150,
                                        textAlign: "left",
                                    }}
                                >
                                    <img
                                        width={120}
                                        height={120}
                                        src={gjlogo}
                                        alt={"logo"}
                                    />
                                </Container>

                            </Stack>
                        </Stack>

                    </Grid>

                </Grid>

            </div>
        );


}

export default App

