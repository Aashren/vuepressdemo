---
next:
  text: Conclusion
  link: /conclusion.md

prev:
  text: Mission Design
  link: /Missiondesign.md
---
<div style="text-align: justify;">

# ECube
_____

<br>
<br>
<br>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
</head>

## 3.1 Introduction
<br>

To understand the logic behind ECube we have to look back to all the accomplishments that
has happened in the Nepali Space sector. We will keep it brief, so that the reader gets to know
where we are coming from and how it relates to the greater vision Antarikchya Pratisthan
Nepal (APN) has for the future. It all started with the launch of NepaliSat-1 on April 17, 2019.
That day serves as a starting point for Nepal into its venture in space sector. The developer
of NepaliSat-1, to encourage, inspire and educate Nepali community about space sciences
and satellites, founded a Non-profit Organization, APN (Space Foundation Nepal). Since
then, APN has been credited with the design and development of Project Danfe and Project
Munal. Not only has APN been making missions but it also has had been actively providing
hands on training projects to high school students and teachers all around Nepal from private,
public and governmental sector. As a matter of fact, Project Munal team consists of students,
of different background, enrolled in highschool, making a 1U satellite. And they are also
developing a payload for a 3U CubeSat Danfe.

It already has been established that making a satellite and deploying it in space is an
expensive affair. Hence, engineers at APN came up with a comprehensible plan to educate
Nepali public about the ins and outs of satellite design and development. With that primary
objective, a low price copy Project Munal was made called SastoCube. The objective was
well received and APN was given encouragement from different organizations to move on
with project. Then a third satellite was made, primarily to introduce space technology to
school students, that not only gave them hands on experience with satellite manufacture but
also focused on mission design aspect of satellite development process. That project is called
ECube which mainly focuses on educating interested parties on satellite sciences.
<br>

### 3.1.1 ETSP and ECube
<br>

Having taken it’s infantile steps in space, Nepali space sector was asked yet another question:
Can Nepal conserve the momentum that it has gained? Do we also have the expertise to train,
inspire and encourage newer generation of Nepali people to develop to keep the momentum
alive?

CubeSat, a nano-satellite, has been actively developed at the level of university laboratories
and private companies. Although the nano-satellite is smaller scale than a large satellite, it
requires capabilities to build the satellite system by integrating various element technologies
and legal procedures including launch and radio waves. The nano-satellite is a very effective
educational material for learning system thinking in which various elements are appropriately combined. In order to aim to systematize those technologies and knowledge, education
through satellite projects (ETSP) has implemented education of practical development via
CanSat and nano-satellite in Nepal. In order to further expand various efforts under these
circumstances, ETSP has implemented the construction of different creative technologists
using the knowledge and experience they got during the program. This is implemented with
the aim of providing education of system engineering to all the enthuses and learners. ETSP
focuses on creating a higher education program of space technologists for undergraduates and
graduate, where they will be presenting mission idea of space but they need to demonstrate
that mission analogy. Mission ideas can be of CanSat and Nanosatellite. We conducted
different types of programs for different groups of people; hands-on programs for engineers
and researchers at universities, and the Cansat development programs for the mid and
primary levels and PaperSat art computation for kids from 1-5 years.

<b>ETSP</b>

The ETSP is a hands-on study of small satellite design and engineering over several days
of intensive practical lessons. ECube is one of the kits for the program. ECube’s hands-on
course puts focuses on establishing the knowledge of systems engineering by going through
the whole process of system integration. The uniqueness of this program is:

  - The breakdown of educational materials related to nano-satellites, and the illustration
of significant structural design.
  - It outlines an educational method that utilizes both hardware and software, referred to
as "kit" and "text," for each visualized subject.

This manual presents a hands-on type knowledge transfer program that utilizes the ECube
Training Kit (ETK). The program targets all space enthusiasts and learners from various backgrounds, who will be taught the fundamentals of space engineering through the assembly,
testing, and integration of the ETK. This visiting class is available for technical/science/managerial education as the first step in nano-satellite development.

<b>ECube</b>

The ECube program is divided into several stages, including the design process, building
the satellite, and mission planning. The design process involves conceptualization the
nanosatellite, defining its requirements, and developing the necessary hardware and software
systems, During the building phase, students will construct and integrate the different
components of the ECube, the mission planning stage involve developing a plan for the
operation of satellite, as well as defining the objectives and goals of the mission. ECube is a
small educational kit, realising the low cost, size, and mass by using inexpensive consumer
hardware analogs to the real CubeSat concept and architecture.

The three-layer design of the ECube satellite allows for easy integration of different sub-
systems and communication between them. The bottom board, OBC and communication, handles data handling and communication with the ground station. The middle board, EPS,
contains the primary power source and sensors. The top board is the sensor subsystem,
which allows for customization by connecting additional sensors via the 40-pin sockets. The
physical and electrical connection between the boards is maintained through spacers and
PC104 pin sockets.

The ECube model consists of five subsystems, including structure, power (EPS), command
and data handling (OBC), communication (COM), and payload (mission). It follows the
basic standard of real CubeSats at the subsystem level and integrates various functions such
as the support of devices, generation, storage, and control of electric power, data handling,
communication, and sensing to function as a satellite system. Five subsystems are organised
into three boards. Below, we briefly discuss the the three boards.

  - <b>OBC:</b> OBC in the ECube satellite uses a Wi-Fi System-on-a-Chip (SoC) for data handling
and communication with the Ground Station (GS). The satellite’s Wi-Fi module transmits
housekeeping and mission data to the GS, which in this case is the PC. By using Wi-Fi
for communication, the cost of the ECube is reduced.

  - <b>EPS</b> EPS  of the ECubeis a crucial component for ensuring the functioning of the satellite.
The EPS consists of a 3.7V 1800mAh Li-Ion battery that has the ability to power the
satellite for a duration of 8 hours. A 5V 8mAh solar panel is used to charge the battery,
and if necessary, the satellite can also be charged using a Type-B USB cable. The EPS
integrates several sensors to monitor various parameters of the satellite, including
attitude, humidity, temperature, 9-axis gyro, magnetic field, light intensity, solar voltage
data, and battery voltage data. The EPS is equipped with a release detection switch that
has two modes: Ground and Flight.

  - When the deployment switch is pressed and the satellite is in Ground mode, the
power will be transmitted to the satellite.
  - When the switch is released and the satellite is in Flight mode, only then will the power in the satellite be activated.
      This system ensures that the satellite is powered only when it is in its intended operating environment, which helps to conserve battery life and improve the reliability of the satellite.

  -<b>Payload:</b> Payload board in the ECube serves as a base for students to design and
implement their own missions using sensors and other components. The payload board
provides an electrical power supply of 3.3v and 5v and has a 40-pin socket that brings
in peripheral interfaces for UART, SDIO, SPI, I2C, I2S, GPIO, ADC, PWM, LED light,
and button. The students are provided with the necessary documentation, including the
Interface Control Document (ICD) and engineering drawings, to assist them in creating
their own mission board which can be placed in the payload board. This hands-on
experience will allow students to gain practical knowledge and skills in satellite system
engineering.
<br>

## 3.2 Building ECube
<br>

Here we will discuss about what we did while making ECube. This portion talks about the
structure choices that we took and gives an indepth explanation behind the options that we
took.
<br>

### 3.2.1 Structure Design
<br>

Structure Design (Mechanical-Computer-Aided Design (CAD)) is the process of creating a safe
and functional structure under any load that it may experience. The objective of structural
design and analysis is to produce a structural capable system. The design process of the
1U ECube structure begins with sketching and conceptualising the design. This includes
understanding the various subsystems that need to be integrated into the structure, such
as the power system, communication system, and payload. The design must also meet the
dimensional and mass requirements of the 1U CubeSat, which are outlined in the CubeSat
Specification. As an example we will be designing a structure of ECube.

  - <b>Introduction to Sketch:</b> Sketching is the initial step in the design process for any
structure. It is a quick and easy way to explore different design options and to visualize
the structure in 3D. Sketches can be done by hand or using computer-aided design
(CAD) software. In the case of CubeSats, it is important to consider the size and weight
constraints of the 1U structure while sketching. The sketch should also include any
mounting points for subsystems or payloads.
  - <b>3D Designing and Modelling:</b> After the initial sketch, the design process moves on to
3D designing and modelling. This is where the structure is designed in detail using
3D CAD software. 3D models provide a more accurate representation of the final
product and allow for simulations and stress analysis to be run. It is important to
consider the structural requirements of the CubeSat, such as strength, stiffness, and
mass, while designing the 3D model. It is also important to consider the manufacturing
process during this stage, as some features may not be feasible to produce with certain
manufacturing methods.
  -  <b>Manufacturing process of 3D Design:</b> After the 3D design is complete, the next step
is to manufacture the structure. There are several manufacturing methods available for
CubeSats, including Computer Numerical Control (CNC) machining, waterjet cutting,
and laser cutting. The choice of manufacturing method will depend on the design
and the materials used. For example, CNC machining is well suited for aluminium
structures, while waterjet cutting is better for composite structures.

<b>Requirements for structual design</b>

There are several requirements that must be considered while designing the structure of
ECube. These include the size and weight constraints, strength and stiffness requirements. The structural dimensions of a ECube are defined by the CubeSat Specification Drawing. The
general features of a ECube are that it may not exceed 1 kg in mass, the center of mass must
be within 2 cm of its geometric center. The structural dimensions of a ECube is 100 mm per
side. It is important to keep in mind that designing a structure for CubeSats is a complex
process and it is necessary to consider all of these factors in order to achieve a successful
design. The design process should be iterative, with testing and analysis at each stage to
ensure that the final structure meets all of the requirements for the CubeSat mission.
<br>

### 3.2.2 PCB Design 
<br>

In the bus systems and payload systems, several electrical components have been observed to
be present. The main objective of designing a CubeSat is to fit several important components
of service inside a fixed architecture of the device so that smooth communication and the
intended mission can be successfully performed. In order to do this, delicate, high precision
and minute electrical circuits are required to be built (Electronic-CAD) so that smooth
operation is imminent. So, engineers have formulated printed circuit boards PCB that are
firstly designed to accumulate all the electrical components that are required for smooth
operation of that intended mission and then manufactured according to this design that is
done earlier. PCB design involves creating a layout for a PCB that specifies the placement
of components and the routing of electrical connections between them. The design process
typically involves using CAD software to create a detailed plan for the PCB, which is then
used to produce the actual PCB using a manufacturing process such as photolithography.
Some key considerations in PCB design include the size and shape of the PCB, the placement
of components to minimize the length of traces and reduce the risk of interference, and the
routing of traces to avoid crossing or overlapping. It is also important to consider the specific
requirements of the components and the intended use of the PCB, as well as any regulatory
or industry standards that apply.

<b>Manufacturing and Soldering</b>

PCB manufacturing is the process of producing PCBs, which are used to support and
electrically connect electronic components using conductive tracks, pads, and other features
etched from copper sheets and laminated onto a non-conductive substrate. For designing the
PCB boards, several softwares are available but we have used Fusion 360 due to its versatility
and ease in design process. There are several steps involved in the PCB manufacturing
process, including:

  - <b>Design:</b> The first step in the PCB manufacturing process is to design the layout of the PCB. This typically involves using CAD software to create a detailed plan for the placement of components and the routing of electrical connections. The design process can be divided into 3 parts:
     - Schematic Design,
     - Component Library Design, &
     - Layout Design 
  - <b>Photolithography:</b> After the PCB design is complete, it is transferred to a film that is
used to create a photomask. The photomask is then used to expose a photosensitive PCB
laminate to UV light, which creates a pattern of resist on the laminate. In household
PCB manufacturing we print circuit from laser printer on glossy paper. We cut out a size
of copper board on as per our design and then we use iron to transfer the toner of glossy
paper to copper board. This process might take 5-15 minutes as per the experience of
the user.
  - <b>Etching:</b> The exposed PCB laminate is then placed in an etching solution, which removes the copper from the areas that were not protected by the photoresist. This leaves a pattern of copper traces on the laminate that corresponds to the desired circuit layout. To etch copper board to set a setup one must follow the following points:
     - Take a plastic box and fill it up with some water. If you want your process to be swift then you can add some hot water, however, using hot water is a bit risky.
     - Dissolve 2-3 teaspoons of ferric chloride powder in the water.
     - Dip the PCB into the etching solution (Ferric chloride solution, FeCl3) for approximately 5-15 minutes.
     - FeCl3 reacts with the unmasked copper and removes the unwanted copper from the PCB.

      This process is called Etching. Use pliers to take the PCB out of the vessel and check if the entire unmasked area has been etched or not. In case it is not etched leave it for some more time in the solution.

  - <b>Drilling:</b> Holes are then drilled through the PCB laminate at the locations where
components will be installed. These holes are usually drilled using a CNC drill.
  - <b>Soldering:</b> After the PCB has been drilled, components can be installed and soldered
in place. Soldering is the process of melting a metal alloy (solder) and using it to join
two metal surfaces together.
  - <b>Testing:</b> Once the PCB is fully assembled, it is tested to ensure that it is functioning
correctly. This can be done using a variety of techniques, including visual inspection,
electrical testing, and X-ray inspection.
  - <b>Finishing:</b> Finally, the PCB is given a protective finish to protect it from environmental
damage. This can be done using a variety of techniques, such as conformal coating,
which is a thin layer of insulating material applied to the surface of the PCB.
<br>

## 3.3 Sensors and programming in ECube
<br>


Satellite programming refers to the process of writing software programs to control and
manage various functions of a satellite, such as communication, navigation, data processing, and more. This programming is essential for the proper operation of a satellite, as it governs how the satellite will respond to different situations and input. There are several types of
programming languages used in satellite programming, including C, C++, Python, and others.
The choice of language depends on the requirements of the satellite and the specific task
the software will be performing. For example, some languages may be better suited for
real-time systems, while others may have more support for complex data processing tasks. In
ECube we have ESP8266 microcontroller in OBC. It is a Wi-FI chip developed by the Espressif
system. It can be used as a standalone device, or as a UART to Wi-Fi adaptor to allow other
microcontrollers to connect to a Wi-Fi network. For example, you can connect an ESP8266 to
an Arduino to add Wi-Fi capabilities to your Arduino board. The most practical application
is using it as a standalone device. With the ESP8266, you can control inputs and outputs as
you would do with an Arduino, but with Wi-Fi capabilities. This means you can bring your
satellite online, which is great for communicating with ECube.

<br>

<div style="text-align: center;">
<img src ="@source/.vuepress/public/images/esp8266.jpg" style="text-align: center;">
</div>
<br>


<p style="text-align:center; min-height:10vh;"> Figure 3.1: NodeMCU ESP8266 pinout. ([8])</p>

<br>

<h3> Plotting Graph </h3>

```html title="index.h"                                                                       
 
const char MAIN_page[] PROGMEM = R"=====(
<!doctype html>
<html>

<head>
  <title>E-cube DashBoard/</title>
  <!--For offline ESP graphs see this tutorial https://circuits4you.com/2018/03/10/esp8266-jquery-and-ajax-web-server/ -->
  <script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>  
  <style>
  canvas{
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* Data Table Styling */
  #dataTable {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #dataTable td, #dataTable th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #dataTable tr:nth-child(even){background-color: #f2f2f2;}

  #dataTable tr:hover {background-color: #ddd;}

  #dataTable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #ed1c24;
    color: white;
  }
  </style>
</head>

<body>
    <div style="text-align:center;"><b>E-CUBE DashBoard</b><br>Everest Satellite</div>
    <div class="chart-container" position: relative; height:350px; width:100%">
        <canvas id="Chart" width="400" height="400"></canvas>
    </div>
<div>
  <table id="dataTable">
    <tr><th>Time</th><th>Altitude (m)</th><th>Pressure (pa)</th><th>Temperaure (&deg;C)</th><th>Humidity (%)</th></tr>
  </table>
</div>
<br>
<br>  

<script>
//Graphs visit: https://www.chartjs.org
var ADCvalues = [];
var Tvalues = [];
var Hvalues = [];
var timeStamp = [];
var pressure = [];

function showGraph()
{
    var ctx = document.getElementById("Chart").getContext('2d');
    var Chart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeStamp,  //Bottom Labeling
            datasets: [{
                label: "Altitude",
                fill: false,  //Try with true
                backgroundColor: 'rgba( 243,18, 156 , 1)', //Dot marker color
                borderColor: 'rgba( 243, 18, 156 , 1)', //Graph Line Color
                data: ADCvalues,
            },{
                label: "Temperature",
                fill: false,  //Try with true
                backgroundColor: 'rgba( 243, 156, 18 , 1)', //Dot marker color
                borderColor: 'rgba( 243, 156, 18 , 1)', //Graph Line Color
                data: Tvalues,
            },
            {
                label: "Humidity",
                fill: false,  //Try with true
                backgroundColor: 'rgba(156, 18, 243 , 1)', //Dot marker color
                borderColor: 'rgba(156, 18, 243 , 1)', //Graph Line Color
                data: Hvalues,
            }],
        },
        options: {
            title: {
                    display: true,
                    text: "ECube"
                },
            maintainAspectRatio: false,
            elements: {
            line: {
                    tension: 0.5 //Smoothening (Curved) of data lines
                }
            },
            scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
            }
        }
    });

}

//On Page load show graphs
window.onload = function() {
  console.log(new Date().toLocaleTimeString());
};

//Ajax script to get ADC voltage at every 5 Seconds 
//Read This tutorial https://circuits4you.com/2018/02/04/esp8266-ajax-update-part-of-web-page-without-refreshing/

setInterval(function() {
  // Call a function repetatively with 5 Second interval
  getData();
}, 200); //5000mSeconds update rate
 
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //Push the data in array
  var time = new Date().toLocaleTimeString();
  var txt = this.responseText;
  var obj = JSON.parse(txt); //Ref: https://www.w3schools.com/js/js_json_parse.asp
      ADCvalues.push(obj.Altitude);
      Tvalues.push(obj.Temperature);
      Hvalues.push(obj.Humidity);
      timeStamp.push(time);
      showGraph();  //Update Graphs
  //Update Data Table
    var table = document.getElementById("dataTable");
    var row = table.insertRow(1); //Add after headings
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = time;
    cell2.innerHTML = obj.Altitude;
    cell3.innerHTML = obj.Pressure;
    cell4.innerHTML = obj.Temperature;
    cell5.innerHTML = obj.Humidity;
    
    }
  };
  xhttp.open("GET", "readADC", true); //Handle readADC server on ESP8266
  xhttp.send();
}
    
</script>
</body>

</html>

)=====";
```

<br>
<br>
 
```C title=".ino"
                                                                                      
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <Wire.h>
#include <Adafruit_BMP085.h>
#include <DHT.h>    // Include the DHT library

#include "index.h" // Our HTML webpage contents with javascripts

#define LED 2        // On board LED
#define DHTpin 0     // D3 of NodeMCU is GPIO0

DHT dht(DHTpin, DHT11); // Initialize DHT object for DHT11 sensor
Adafruit_BMP085 bmp;

// SSID and Password of your WiFi router
const char* ssid = "Public High School";
const char* password = "PHSdharan12";

ESP8266WebServer server(80); // Server on port 80

void handleRoot() {
  String s = MAIN_page;
  server.send(200, "text/html", s);
}

float humidity, temperature;

void handleADC() {
  int a = analogRead(A0);
  int altitude = bmp.readAltitude();
  int pressure = bmp.readPressure();

  humidity = dht.readHumidity();      // Read humidity from DHT sensor
  temperature = dht.readTemperature(); // Read temperature from DHT sensor

  String data = "{\"Pressure\":\"" + String(pressure) + "\", \"Altitude\":\"" + String(altitude) + "\", \"Temperature\":\"" + String(temperature) + "\", \"Humidity\":\"" + String(humidity) + "\"}";

  digitalWrite(LED, !digitalRead(LED));
  server.send(200, "text/plain", data);
}

void setup() {
  Serial.begin(115200);
  Serial.println();

  dht.begin(); // Initialize the DHT sensor

  if (!bmp.begin()) {
    Serial.println("Could not find a valid BMP085 sensor, check wiring!");
    while (1) {}
  }

  WiFi.begin(ssid, password);
  Serial.println();
 
  pinMode(LED, OUTPUT);
  delay(1000);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
 
  server.on("/", handleRoot);
  server.on("/readADC", handleADC);
 
  server.begin();
  Serial.println("HTTP server started");

  Serial.print("WiFi Status: ");
Serial.println(WiFi.status());
Serial.print("IP address: ");
Serial.println(WiFi.localIP());
}

void loop() {
  server.handleClient();

```

### 3.3.1 Component level Programming 
<br>

ECube consists of a few sensors in its EPS, which are responsible for collecting the housekeeping data. These sensors are known as primary sensors in cube. GY271, GY521, BMP
180, DHT11 sensors installed in ECube are equipped with a Geomagnetic sensor, gyro sensor, acceleration, Barometric Pressure sensor and Tempurater and Humidity. They are mentioned
briefly below:

   - GY521 is used to measure gyro and acceleration data.
   - BMP180 is designed to accurately measure atmospheric pressure. Atmospheric pressure varies with both weather and altitude.
   - GY271 measures the state of geomagnetism of each airframe axis.
   - DHT11 is also used to measure temperature and humidity.

  Now a brief introduction of the sensors mentioned above.

  <b>Interfacing with DHT11</b> 

  The DHT11 detects water vapor by measuring the electrical resistance between two electrodes.
The humidity sensing component is a moisture holding substrate with electrodes applied
to the surface. When water vapor is absorbed by the substrate, ions are released by the
substrate which increases the conductivity between the electrodes. The change in resistance
between the two electrodes is proportional to the relative humidity. Higher relative humidity
decreases the resistance between the electrodes, while lower relative humidity increases the
resistance between the electrodes. DHT11 is a low-cost digital sensor for sensing temperature
and humidity. This sensor can be easily interfaced with any micro-controller such as Arduino,
Raspberry Pi etc to measure humidity and temperature instantaneously. DHT11 humidity
and temperature sensor is available as a sensor and as a module. The difference between this
sensor and module is the pull-up resistor and a power-on LED. DHT11 is a relative humidity
sensor. To measure the surrounding air this sensor uses a thermistor and a capacitive humidity
sensor.

Wiring the DHT11 to the NodeMCU is really easy, but the connections are different
depending on which type you have either 3-pins or 4-pins. The wiring connections are made
as follows :

  - Pin 1 of the DHT11 goes into +3v of the NodeMCU.
  - Pin 2 of the DHT11 goes into Digital Pin D4 of the NodeMCU.
  - Pin 3 of the DHT11 goes into Ground Pin (GND) of the NodeMCU.

Before you use the DHT11 with NodeMCU, you need to install the DHTLib library. It has
all the functions needed to get the humidity and temperature readings from the sensor. All of
that can be done from Arduino library.

<br>
<div style="text-align: center;">
<img src ="@source/.vuepress/public/images/Dht.png" style="text-align: center;">
</div>


<p style="text-align:center; min-height:10vh;">Figure 3.2: DHT11 connected with NodeMCU ESP826. ([9])</p>

<br>


### 3.3.2 Interfacing with BMP 180

<br>
The BMP180 barometric pressure sensor from Bosch is used to predict the weather, detect
altitude, and measure vertical velocity. It can be used to measure environmental temperature,
absolute & relative pressure, & estimated altitude. The atmospheric pressure which is also
called Barometric pressure is the pressure caused by the weight of air pressing down on the
Earth. The air in the atmosphere has mass, so gravity causes the weight of that column to
exert pressure on the surface. The BMP180 outputs pressure readings in Pascals which is its
SI unit. We can also measure the pressure in hectoPascals (hPa) or millimetre of mercury
(mm of Hg). We will interface BMP180 Barometric Pressure Sensor with NodeMCU. We will
display the weather parameters like pressure, temperature & altitude. We will then send
these data and parameters over the internet to display on the Web.

<b>BMP180 Barometric Pressure Sensor</b>

The BMP180 Breakout is a barometric pressure sensor with an I2C (“Wire”) interface. Barometric pressure sensors measure the absolute pressure of the air around them. This 
pressure varies with both the weather and altitude. Depending on how you interpret the data, you can monitor changes in the weather, measure altitude, or any other tasks that 
require an accurate pressure reading.

<b>How does it work?</b> The BMP180 is a piezoresistive sensor that detects pressure. Piezoresistive sensors are made up of a semiconducting material (usually silicon) that 
changes resistance when a mechanical force like atmospheric pressure is applied. The sensor is soldered onto a PCB with a 3.3V regulator, I2C level shifter and pull-up resistors 
on the I2C pins. This board is 5V compliant – a 3.3V regulator and a i2c level shifter circuit is included so you can use this sensor safely with 5V logic and power. The Sensor 
has 4 pins, i.e VIN, GND, SDA, SCL Connect the VIN pin to the 5V/3.3V voltage pin, GND to ground, SCL to I2C Clock and SDA to I2C Data of the microcontroller.

<br>

<div style="text-align: center;">
<img src ="@source/.vuepress/public/images/BMP.jpg" style="text-align: center;">
</div>


<p style="text-align:center; min-height:10vh;">Figure 3.3: BMP180 connected with NodeMCU ESP826. ([10])</p>

<br>

Now let us interface BMP180 Barometric Pressure Sensor with NodeMCU ESP8266. The connection is fairly simple. Connect the VIN pin to the 3.3V voltage pin, GND to ground, SCL 
to D1 and SDA to D2 of Nodemcu ESP8266.
<br>
<br>

```C title=".ino"
                                                                                    

#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP085_U.h>

Adafruit_BMP085_Unified bmp;

void setup() {
  Serial.begin(9600);
  if (!bmp.begin()) {
    Serial.println("Could not find a valid BMP085 sensor, check wiring!");
    while (1) {}
  }
}

void loop() {
  sensors_event_t event;
  bmp.getEvent(&event);
  
  float temperature;
  bmp.getTemperature(&temperature);
  
  float pressure;
  bmp.getPressure(&pressure);
  
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");
  
  Serial.print("Pressure: ");
  Serial.print(pressure);
  Serial.println(" Pa");
  
  delay(1000);
}

```

### 3.3.3 Interfacing with GY271
<br>

The Compass Module (GY271) is designed for low-field magnetic sensing with a digital
interface and perfect to give precise heading information. This compact sensor fits into small
projects such as UAVs and robot navigation systems. The sensor converts any magnetic field
to a differential voltage output on 3 axes. This voltage shift is the raw digital output value,
which can then be used to calculate headings or sense magnetic fields coming from different
directions. A magnetometer is used for measurement of magnetic field direction in space.
Most navigation systems use electronic compasses to determine heading direction. It has
several types such as fluxgate, magnetoresistive, magneto-inductive and others.

<br>

<div style="text-align: center;">
<img src ="@source/.vuepress/public/images/Gy271.png" style="text-align: center;">
</div>


<p style="text-align:center; min-height:10vh;">Figure 3.4: GY271 connected with NodeMCU ESP826. ([11])</p>

<br>

<b>How does it work?</b>
Earth’s magnetic field is present in space which points towards the magnetic north. Current
carrying conductor also generates a magnetic field around itself. Hence, whenever a current
carrying conductor is placed in space, it experiences the effect of the earth’s magnetic field
affecting the flow of the electrons through that conductor. These changes in the flow of the
electrons are used for identifying the heading or direction of the magnetic field. This is the
basic working principle of the magnetometer.

HMC5883L uses a magnetoresistive sensor arranged in a bridge circuit, which is made
of nickel-iron (Ni-Fe magnetic film) material. Its electrical resistance varies with the change 
in the applied magnetic field. The correspondent movement of the nickel-iron material in
space experiences earth’s magnetic field which changes the material’s resistance, and hence
we get resultant voltage changes across the bridge. This change in voltages is used to get the magnetic field direction in space. The components of Earth magnetic field are parallel
to the earth’s surface and are used in determining the compass direction. Only the X and Y components of the earth’s field are used in determining the azimuth angle, or the compass
direction.

<br>

### 3.3.4 Interfacing with GY521

<br>

The (GY521) MPU-6050 IMU (Inertial Measurement Unit) is a 3-axis accelerometer and
3-axis gyroscope sensor. The accelerometer measures the gravitational acceleration and
the gyroscope measures the rotational velocity. Additionally, this module also measures
temperature. This sensor is ideal to determine the orientation of a moving object.

<b>How does it work?</b> The MPU-6050 is a module with a 3-axis accelerometer and a 3-axis
gyroscope. The gyroscope measures rotational velocity (rad/s), this is the change of the
angular position over time along the X, Y and Z axis (roll, pitch and yaw). This allows us
to determine the orientation of an object. The accelerometer measures acceleration (rate of
change of the object’s velocity). It senses static forces like gravity (9.8m/s2) or dynamic forces
like vibrations or movement. The MPU-6050 measures acceleration over the X, Y an Z axis.
Ideally, in a static object the acceleration over the Z axis is equal to the gravitational force,
and it should be zero on the X and Y axis.

Using the values from the accelerometer, it is possible to calculate the roll and pitch angles
using trigonometry. However, it is not possible to calculate the yaw. We can combine the
information from both sensors to get more accurate information about the sensor orientation.
Wire the ESP8266 to the MPU-6050 sensor as shown in the following schematic diagram:


<br>
<div style="text-align: center;">
<img src ="@source/.vuepress/public/images/gy5.jpg" style="text-align: center;">
</div>


<p style="text-align:center; min-height:10vh;">Figure 3.5: GY521 connected with NodeMCU ESP826. ([12])</p>
<br>
Connect the SCL pin to GPIO 5 and the SDA pin to GPIO 4.


<br>
<br>

## 3.4 ECube Mission Design

<br>

The payload board of ECube is designed for the learners to implement their mission idea on
it. The board is the area where you will be doing your satellite mission. Satellite missions
are inspired by different climate events i.e. global warming, GLOF, Climate Change, etc.
A satellite’s purpose is decided by different criteria like feasibility, simplicity, creativity,
execution plan and many more. With the help with the topics discussed in Chapter :2, here
we decide one of the mission ideas as our main mission. Once deciding on a mission idea,
that idea will be implemented into the satellite. Implementation phase can be considered
as the most intriguing phase as one can implement their formerly learnt skills like CAD
modelling, PCB design, Soldering, 3D printing. This will result in a satellite payload with a
properly implemented mission on it.

Here critical thinking from the students is expected and this ends up becoming a way to
test what they have taken away from the program. Having told a lot of expositions and a lot
of theoretical knowledge that goes around in satellite designing, the students are required
to employ their knowledge, experiences and their training of ECube ETSP. This part of
the training assumes that the students have required knowledge know how to design a
sustainable system. Here, the existing components of ECube subsystem also comes in handy
as that could also help enabling the payload whenever that is added.

</div>