---
next:
  text: ECube
  link: /ECube.md

prev:
  text: Introduction
  link: /Introduction.md
---
<div style="text-align: justify;">

#  Mission Design 

_____


<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
</head>

<br>
<br>
<br>

## 2.1 Introduction
<br>


In chapter 1 we discussed about CubeSats and it’s benifits and also it’s restriction. In this
chapter, we will discuss, about satellite mission design and all the subsections that needs to
be addressed before mission development or production. For a CubeSat to function propery,
firstly, the designers and the engineers must be clear on what they expect out of the satellite.
They must haVe a clear objective on where the satellite will be deployed, what it will do; how
would the data it collects contribute to the current data pool; how feasible is the mission
given the SWaP requirements; why is the mission being designed and how will the designers
or the engineers obtain the outcome that they expect to get out of that system. A proper
mission design plan helps answer all these aforementioned questions and also provide a
robust roadmap for the development and production of the mission. Experts suggest keeping
the mission plan simple and less convoluted as that could pose problems in the production
phase of the satellite.

&nbsp; &nbsp; &nbsp; Apart from technical limitations and budgetary limitations, there can also be a social
limitation while production of CubeSats. When engineers or designers from developing
countries build a satellite, there are different parts that they must address. All the designing
procedure must be carried with meticulous attention to detail, for outcome of this process
will be deployed in space. Here in this chapter, we will try and cover all the aspects that one
has to be aware before making a satellite.

<br>

## 2.2 Bus Systems
<br>


The bus system in a CubeSat refers to the various subsystems and components that make
up the satellite, such as the power system, communication system, and control system.
These subsystems work together to allow the CubeSat to perform its intended mission. In
this section, we will discuss the importance of the bus system in a CubeSat, the different
subsystems that make up the bus system, and the requirements that need to be followed while
designing the bus system. The bus system of a CubeSat plays a crucial role in the satellite’s
overall design and functionality. It provides the necessary infrastructure and support for
the subsystems and payloads, ensures the satellite’s structural integrity, thermal control,
and safety, provides means of propulsion, enables communication and control, and allows
for flexibility and scalability. A well-designed bus system is essential for the successful
operation of a CubeSat. The bus system should be designed with tacit scalability, flexibility,
reliability, cost-effectiveness, and safety in mind. A bus system in a CubeSat also refers to the
various subsystems and components that make up the satellite, such as the power system,
communication system, and control system. These subsystems work together to allow the
CubeSat to perform its intended mission.


&nbsp; &nbsp; &nbsp; It is important to understand the difference between the bus system and the subsystems.
A subsystem is a specific component or group of components that make up the CubeSat,
such as the power system or the communication system. The bus system, on the other
hand, is the overall infrastructure that supports and connects the subsystems. It provides the
necessary support for the subsystems to function, and enables communication and control of
the subsystems.
 
&nbsp; &nbsp;  The importance of a well-designed bus system in a CubeSat includes:
  <ul>
    <li>Enabling the satellite to function properly and perform its mission,</li>
    <li>Allowing for the integration of various payloads or scientific instruments,</li>
    <li>Facilitating communication and control of the satellite from the ground,</li>
    <li>Ensuring the power needs of the satellite and its subsystems are met,</li>
    <li>Providing a stable platform for the payloads to operate on</li>
    <li>Minimizing the cost of the satellite and so on.</li>
  </ul>

&nbsp; &nbsp;&nbsp; A well-designed bus system can help to ensure the CubeSat is reliable and performs as
expected, which is crucial for successful scientific missions or commercial applications. It is
also responsible for maintaining the structural integrity of the satellite, providing thermal
control, and ensuring the safety of the satellite during launch and operation. The bus system
is also responsible for providing the CubeSat with a means of propulsion, (such as through
the use of a thruster), which is essential for controlling the satellite’s attitude and orbit. The
bus system is also responsible for providing the CubeSat with a means of communicating
with the ground and other satellites. This is typically done through the use of a transceiver,
which allows the CubeSat to send and receive data and commands. The communication
subsystem is a critical component of the bus system, as it allows the CubeSat to be operated
and controlled remotely, and to transmit along with the transmission of real time data back
to Earth. Another important aspect of the CubeSat bus system is its flexibility and scalability.
CubeSats are modular in design, meaning that they can be easily expanded or contracted
to suit the needs of a particular mission. This is made possible by the bus system, which
provides a standardized interface for connecting different subsystems and payloads. This
makes it easier to add new subsystems or payloads to the satellite without having to redesign
the entire system.

&nbsp; &nbsp;&nbsp; In summary, the bus system of a CubeSat plays a crucial role in the satellite’s overall design
and functionality. It provides the necessary infrastructure and support for the subsystems
and payloads, ensures the satellite’s structural integrity, thermal control, and safety, provides
movement through the means of propulsion characteristics, enables communication and
control, and allows for flexibility and scalability. A well-designed bus system is essential for
the successful operation of a CubeSat.
<br>

## 2.3 Subsystems
<br>

&nbsp; &nbsp;&nbsp; Subsystems of a satellite generally refers to the various functional components or modules that
make up a satellite. These subsystems are specialized units within the satellite that perform
specific tasks and work together to ensure the satellite’s proper functioning and mission
accomplishment. Just like a human body, a satellite is composed of several interconnected
systems, each with its own unique purpose and functionality. Hence, the term subsystem also
touches upon the modular nature of satellite design and it’s understanding. These subsystems
are often developed and integrated separately, but they must work in harmony to achieve
the overall mission objectives of the satellite. While talking about the subsystems, the focus
is on the different areas of expertise and engineering disciplines involved in satellite design
and operation. It acknowledges that each subsystem requires specialized knowledge and
skill sets, including power systems, communication systems, attitude control, thermal control,
command and data handling, structure, propulsion, and payload.

&nbsp; &nbsp;&nbsp; Understanding and managing the interactions and interfaces between these subsystems
are crucial for a successful satellite mission. Proper coordination and integration of these
subsystems ensure that the satellite can generate power, communicate with the ground,
maintain its desired attitude, manage temperature, process data, withstand structural loads,
maneuver in space, and fulfill its specific mission objectives. In summary, when someone
mentions "satellite subsystems," they are referring to the individual components and systems
that together form a complete satellite and perform specific functions necessary for its
operation and mission success.
  
&nbsp; &nbsp;&nbsp;A satellite is made up of several subsystems, and they are listed below:
  - Electrical Power System (EPS)
  - Structure System
  - Communication System
  - ADCS
  - OBC System
  - Thermal System
  - Payload System
  <br>

  ### 2.3.1 Electric Power System
  <br>


The EPS is a crucial subsystem for the proper functioning of a CubeSat. It is responsible
for collecting, storing, and distributing the electrical power needed by other systems on the
satellite to operate effectively. The EPS is also responsible for monitoring the overall health of
the satellite, and protecting it and its subsystems from the high levels of radiation in space.

Below we discuss about the most important of EPS:


  - <b>Power Sources:</b>The primary source of power for a CubeSat’s EPS is energy collected
from solar panels. These panels are typically made of photovoltaic cells, which convert
sunlight into electrical energy. The solar panels are typically mounted on the exterior of
the CubeSat, and are designed to track the sun as the CubeSat orbits the Earth, in order
to maximize the amount of energy collected. In addition to solar panels, CubeSats also
typically include rechargeable batteries to store the energy collected by the solar panels.
These batteries are used to provide power to the CubeSat during periods when it is
not in direct sunlight, such as during eclipses or when it is in the Earth’s shadow. The
batteries also provide a buffer to smooth out any variations in the power supply from
the solar panels, and provide power during periods of peak demand by the payload
on-board the CubeSat.

  - <b>Power Control and Distribution: </b>The EPS is responsible for regulating and distributing the power collected and stored by the solar panels and batteries to other systems
throughout the CubeSat as needed. This is done through a power control and distribution unit. The power control and distribution unit is responsible for monitoring the
power supply from the solar panels and batteries, and distributing the power to the
various subsystems of the CubeSat as needed. It also includes a power conditioning
unit, which is responsible for converting the power supply from the solar panels and
batteries into the appropriate voltage levels for different systems and sensors.

  - <b>Monitoring and Protection: </b>The EPS also plays an important role in monitoring the
overall health of the CubeSat. This includes collecting routine information from various
subsystems and sensors, such as voltages, currents, and temperatures, and communicating this information back to the ground as part of the telemetry for the CubeSat
operators to monitor the overall health of the system and guard against potential faults
or poor performance. The high levels of radiation in space can cause ”single event
latch-up” in the semiconductor devices on the CubeSat, this can damage some of the
components on the CubeSat if the power is not turned off quickly enough. To protect
against this, the EPS also includes overcurrent and overvoltage protection circuits to
protect the CubeSat and its subsystems from these events.

<b> Electrical Requirements</b>

In order to ensure the safety of the CubeSat during launch and operation, there are certain
electrical requirements that are recommended for the standard CubeSat form factor that EPS
should adhere to. These include:

- No electronics may be active during launch to prevent any electrical or RF interference
with the launch vehicle and primary payloads. CubeSats with rechargeable batteries
must be fully deactivated during launch or launch with discharged batteries.

- One deployment switch is required (two are recommended) for each CubeSat. The
deployment switch should be located at designated points.

- Developers who wish to perform testing and battery charging after integration must provide ground support equipment (GSE) that connects to the CubeSat through designated
data ports.

- A remove before flight (RBF) pin is required to deactivate the CubeSats during integration outside the Poly-PicoSatellite Orbital Deployer (P-POD). The pin will be removed
once the CubeSats are placed inside the P-POD. RBF pins must fit within the designated
data ports without protruding more than 6.5 mm from the rails when fully inserted.

- A remove before flight (RBF) pin is required to deactivate the CubeSats during integration outside the Poly-PicoSatellite Orbital Deployer (P-POD). The pin will be removed
once the CubeSats are placed inside the P-POD. RBF pins must fit within the designated
data ports without protruding more than 6.5 mm from the rails when fully inserted.

&nbsp; &nbsp;&nbsp; In conclusion, the EPS is a crucial subsystem for the proper functioning of a CubeSat. It is
responsible for collecting, storing, and distributing power, monitoring the overall health of the
satellite, and protecting it and its subsystems from the high levels of radiation in space. The
EPS must also adhere to certain electrical requirements to ensure the safety of the CubeSat
during launch and operation, while also being designed to minimize power consumption
and maximize energy efficiency to extend the CubeSat’s lifespan in orbit.

<br>

### 2.3.2 Structure System

<br>

A structure sub-system in a cubesat refers to the physical framework of the satellite, which
includes the frame, body, and other structural components that hold the various subsystems in
place and provide protection for the satellite during launch and operation. This subsystem is
critical for maintaining the structural integrity of the CubeSats and ensuring it can withstand
the various forces and stresses it will encounter in space. The structure subsystem is extremely
important in CubeSats, as it provides the basic framework for the rest of the satellite’s
subsystems and enables the satellite to maintain its shape and integrity in space.

&nbsp; &nbsp; In humans, the structural system is made up of the body itself, including the skeleton,
muscles, and skin. The skeleton provides support for the body, while the muscles allow
for movement, and the skin protects the internal organs from external shocks. Similarly, in
satellites, the structural subsystem serves two main roles: to protect the internal equipment
so that it can withstand launch and the space environment, and to support the internal
equipment so that it can function. The structural subsystem provides the physical framework
for the satellite, and includes the frame, body, and other structural components that hold
the various subsystems in place and provide protection for the satellite during launch and
operation.

&nbsp; &nbsp; The structural subsystem is critical for maintaining the structural integrity of the satellite
and ensuring it can withstand the various forces and stresses it will encounter in space. The
structural subsystem must also be able to withstand the forces encountered during launch
and deployment, such as vibrations, acceleration, and shock. The structural subsystem is
essential for the safe and successful operation of a satellite in space.

&nbsp; &nbsp; Unlike conventional satellites, while designing a CubeSat structure system, we have to keep
in account of the SWaP requirements. Also, as nano- and pico-satellites are not actually the
primary payloads of a launcher and are merely piggybacking loads, the launchers also have
their own set of requirements or restrictions. discussing the structural system of a satellite,
one must also pay attention to these key aspects that are listed and briefly explained below:

- <b>CubeSat Structure:</b> The structure of a CubeSat typically consists of an aluminum or
carbon fiber composite chassis, also known as the "CubeSat structure" or "bus." The
structure provides a rigid framework and mounting points for integrating the various
subsystems and payloads. It is designed to be lightweight and compact while ensuring
adequate structural integrity during launch and in space.

- <b>Panels and Rails</b> CubeSat structures often include removable panels and rails on the
external faces of the chassis. These panels can be opened or removed to access the
internal components during integration or maintenance. The rails provide attachment
points for subsystems, such as power systems, communication systems, and sensors.

- <b>Deployable Solar Panels:</b> Many CubeSats are equipped with deployable solar panels
to generate electrical power. These solar panels are typically stored in a folded configu-
ration and are deployed once the CubeSat is in orbit. The solar panels provide energy
to the onboard systems and recharge the batteries.

- <b>Antenna Deployment:</b> CubeSats require antennas for communication purposes. The
antennas may be deployed through various mechanisms, such as tape springs or shape
memory alloys, to extend them from the compact form to their operational configuration
after launch.

- <b>Vibration and Shock Mitigation</b> CubeSats must withstand the vibrations and shocks
experienced during launch. To mitigate these forces, the structure incorporates shock
mounts, vibration isolators, and other damping mechanisms. These components help
protect the CubeSat’s sensitive subsystems and payloads from damage.

- <b>Integration and Testing:</b> CubeSat structure systems undergo rigorous integration and
testing processes to ensure their functionality and reliability. The integration involves
securely mounting the subsystems and payloads onto the structure while considering
proper alignment and interfaces. Testing includes mechanical and thermal vacuum tests
to validate the structure’s performance under expected environmental conditions.

- <b>Standardized Mechanical Interfaces:</b> CubeSats use standardized mechanical interfaces,
such as the P-POD or NanoRacks CubeSat Deployer (NRCSD), for deployment from the
launch vehicle. These interfaces provide a secure and reliable means of deploying the
CubeSat into its designated orbit.

While designing the CubeSat structure, one must thus be aware of the SWaP requirements and also the launcher requirements. Generally, the structures provide are lightweight, reliable and compact platform to conduct a successful mission with the resources in hand. The standards for CubeSats help in the due process of designing a satellite.

<br>

### 2.3.3 Communication Systems

<br>

The communication system is responsible for transmitting and receiving data from the Cube-
Sat to the ground station. This system is crucial for the CubeSat mission, as it allows the
CubeSat to communicate with the ground station and transmit data and telemetry. The com-
munication system typically consists of antennas, transceivers, modulation and demodulation
units and a communication protocol such as AX.25 for packet radio communication. The
transceiver is responsible for sending and receiving data, while the antenna is responsible for
transmitting and receiving signals. The communication protocol is responsible for ensuring
that the data is transmitted and received correctly. This chapter will provide an in-depth
understanding of the communication subsystem in CubeSats, including its components,
design considerations, and best practices.

The role of the communication subsystem is to facilitate communication between the
CubeSat and the ground station. This includes receiving uplinked commands from the
ground station and downlinking housekeeping and mission data to the ground station. An
example of this would be a CubeSat receiving a command to take a picture from its onboard
camera, and then transmitting the picture back to the ground station for analysis.

The communication subsystem must be able to transmit and receive data at the necessary
speeds and frequencies, and it must be able to operate within the power and weight constraints
of the CubeSat. Additionally, the subsystem must be able to withstand the harsh conditions of
space, such as radiation and temperature extremes. An example of this would be a CubeSat
communication subsystem that is designed to operate at temperatures ranging from -40 to 85
degrees Celsius and has a radiation tolerance of 50 krad.

The packet data communication protocol is responsible for ensuring the correct transmission
and receipt of data. This includes selecting the appropriate protocol, such as AX.25, and
determining the necessary packet size and transmission rate. An example of this would be
using a packet size of 256 bytes and a transmission rate of 9600 baud for a CubeSat with
limited data storage capacity.

The data transmission speed between the ground station and the CubeSat is determined
based on the CubeSat’s mission requirements and the capabilities of the communication
equipment. Factors such as the distance between the ground station and the CubeSat, the
size of the data to be transmitted, and the desired transmission rate are taken into account
when calculating the data transmission speed. An example of this would be a CubeSat in low
Earth orbit that needs to transmit high-resolution images back to the ground station at a rate
of 1Mbps.

<b>Ground Stations</b>

Ground stations are the ground-based facilities that are used to communicate with and control CubeSats. They include the necessary equipment, such as antennas and receivers to communicate with the CubeSat, as well as the software and hardware to process the data received from the CubeSat. An example of a ground station would be a facility located at a high altitude, where the atmospheric conditions are optimal for communication with a CubeSat in low Earth orbit.

The design process of a ground station includes determining the required communication capabilities, such as data transmission speed and frequency, as well as selecting the appro- priate communication equipment and software. The design also includes considerations for the ground station’s location, such as its proximity to the CubeSat’s orbit and the availability
of power and internet connections. A ground station must have the necessary equipment and software to communicate with the CubeSat, such as antennas, receivers, and processing
software. It must also have a reliable power source and internet connection. Additionally, the ground station must be located in an area with a clear line of sight to the CubeSat’s orbit.

<b>Antenna and Link Budgets</b>

The design of the CubeSat antenna is a crucial aspect of the communication subsystem. The antenna must be able to transmit and receive signals at the necessary frequencies and with the required gain. Factors such as the CubeSat’s orbit, the size and weight constraints of the CubeSat, and the desired communication range must be taken into account when designing the antenna. For example, a CubeSat in a low Earth orbit may require a small, lightweight antenna with a lower gain, while a CubeSat in a higher orbit may require a larger, more powerful antenna with a higher gain.

Link budget is the calculation of the amount of power required at the transmitter and the sensitivity required at the receiver to establish a successful communication link. It includes factors such as the transmitter power, the receiver sensitivity, the path loss, and the atmospheric conditions. The link budget design is an important step in the communication subsystem design process, as it helps to ensure that the CubeSat will be able to communicate effectively with the ground station.

The communication method and frequency used by a CubeSat will depend on the mission requirements and the available communication equipment. Factors such as the desired data transmission rate, the CubeSat’s orbit, and the availability of frequencies must be taken into account when determining the communication method and frequency. An example of this would be a CubeSat in a low Earth orbit that uses UHF frequencies for communication, while a CubeSat in a higher orbit may use S-band or X-band frequencies.

<b>Communication Standards</b>

There are various communication standards that have been developed specifically for Cube- Sats, such as the CubeSat Space Protocol (CSP) and the CubeSat Communication Protocol (CCP). These standards provide guidelines for the design and operation of the communication subsystem and can help to ensure compatibility between different CubeSats and ground stations. Error correction and data compression are important techniques that can be used to improve the efficiency and reliability of the communication subsystem. Error correction techniques, such as forward error correction (FEC), can be used to detect and correct errors that may occur during data transmission. Data compression techniques, such as lossless or lossy compression, can be used to reduce the size of the data being transmitted, which can help to increase the data transmission speed.

Security is a critical aspect of the communication subsystem, as it ensures the integrity and
confidentiality of the data being transmitted. This can include encryption techniques, such
as AES, to protect against unauthorized access, and authentication methods, such as digital
signatures, to ensure that the data is coming from a trusted source.


In conclusion, the communication subsystem in CubeSats plays a vital role in the successful
operation of the satellite. The subsystem must be designed to meet the mission requirements
while also taking into account the CubeSat’s size and resource constraints. By understanding
the components, design considerations, and best practices for communication subsystems in
CubeSats, engineers and scientists can ensure that their CubeSat missions are successful.
<br>


### 2.3.4 ADCS
<br>


The ADCS is responsible for maintaining the CubeSat’s orientation in space and pointing
its payload in the correct direction. This system is crucial for the CubeSat’s mission, as
it ensures that the CubeSat’s payloads are pointed in the correct direction to collect data
or communicate with the ground station. The attitude control system typically consists of
sensors, actuators, and control algorithms. Attitude determination involves measuring the
CubeSat’s attitude, which includes its orientation, angular velocity, and position relative to
a reference frame. Attitude control involves adjusting the satellite’s orientation to achieve
desired pointing directions or stability.

While designing a functional ADCS, a system that senses its position or attitude should be
designed. That is the first step. Then, should the sensed data not be favorable, an actuator
should be employed to maintain the desired position and an algorithm must be made as such
that the whole system maintains itself, as a system, without any external influence. Here we
now discuss the main components and also the functionalities of a ADCS :

- <b>Sensors:</b> The attitude determination process relies on various sensors to measure the
CubeSat’s attitude parameters. These sensors may include:
   - *Gyroscopes or rate sensors*: To measure the angular velocity or rate of rotation of the CubeSat.
   - *Magnetometers*: To measure the magnetic field to determine the satellite’s orientation with respect to the Earth’s magnetic field.
   - *Sun sensors*: To detect the direction of sunlight to determine the CubeSat’s orientation relative to the Sun.
   - *Inertial measurement units (IMUs)*: To combine multiple sensors, such as accelerometers, gyroscopes, and magnetometers, to provide comprehensive attitude measurements.

- <b>Data Processing:</b> The ADCS processes the snsor data to calculate the CubeSat's attitude. This involves data fusion algorithms that combine the measuremenets from different sensors to obtain a more accurate and reliable estimate of the attitude. Various filtering techniques, such as Kalman filtering or complementary filtering, are commonly employed to optimize the attitude determination process. 

- <b>Control Actuators:</b> The attitude control aspect of the ADCS utilizes actuators to adjust and maintain the CubeSat’s orientation. Commonly used actuators include:
   - *Reaction wheels*: These spinning wheels can change the satellite’s angular momentum by accelerating or decelerating their rotation. By controlling the angular momentum, the CubeSat’s orientation can be adjusted.
   - *Magnetorquers*: These devices use electromagnetic forces generated by onboard electromagnets to interact with the Earth’s magnetic field. By selectively activating the magnetorquers, the CubeSat can generate torque and control its orientation.
   - *Thrusters*: In some cases, CubeSats may be equipped with small thrusters that use compressed gas or electric propulsion to provide additional attitude control capabilities.

- <b>Control Algorithms:</b> ADCS incorporates control algorithms to calculate the necessary actuator commands based on the desired attitude and the measured attitude. These algorithms aim to minimize the error between the desired attitude and the actual attitude, providing stable and accurate control

- <b>Power and Communication:</b> ADCS also requires power and communication links to operate. It is typically connected to the CubeSat's power supplu and onboard computer system for data processing and actuator control. The ADC system may also interface with the CubeSat's communication subsystem to receive commands and provide attitude-related telemetry data to the ground station. 

The ADCS plays a critical role in CubeSat missions that require precise pointing, imaging, or data acquisition. It enables the satellite to maintain a desired orientation, stabilize its attitude, or adjust its pointing direction for scientific observations, Earth imaging, or communication purposes.

<br>

### 2.3.5 OBC System
<br>


The OBC system is a crucial component of any CubeSat mission, serving as the central control
unit for the satellite’s avionics and payload systems. The OBC system runs the on-board
software that controls the vital functions of the CubeSat, such as attitude and orbit control,
telemetry data management, telecommunication actions, system housekeeping, and on-board
time synchronization. In this chapter, we will discuss the state of the art of OBCs in CubeSats,
the types of hardware and software used, and the major role and requirements that must be
considered when designing an OBC for a 1U CubeSat.

In recent years, there has been a trend towards using more advanced and powerful OBCs
in CubeSats. This is driven by the increasing complexity of CubeSat missions and the need or greater processing power and memory capacity. The use of 32-bit microcontrollers is
becoming more common in CubeSat OBCs, as they offer increased processing power and
memory compared to 8-bit and 16-bit microcontrollers. Additionally, more advanced software
and operating systems, such as real-time operating system (RTOS), are being used to improve
the reliability and performance of OBCs.

The hardware used in an OBC typically includes a microprocessor, memory banks, and
an interfacing chip to connect the computer to other subsystems. A range of standard and
non-standard interface formats are used, such as RS485, CAN, SpaceWire, SPI, and I2C. The
OBC can be provided as an integrated unit in the CubeSat bus and avionics system or as a
modular device that can work with various other pieces of multi-vendor equipment. The
software used in an OBC typically includes a RTOS that manages all the software applications
and provides the flight software for the CubeSat. Popular RTOSs used in CubeSat OBCs
include FreeRTOS, which is free, open-source, lightweight, and compatible with a wide range
of microcontroller types.

<b>Role of OBCs in CubeSats</b>

The OBC plays several key roles in the effective operation of a CubeSat. These functions include:

  - <b>Attitude and Orbit control:</b> The OBC is responsible for controlling the attitude and
orbit of the CubeSat, ensuring that it stays within the desired parameters.

  - <b>Telemtry data management:</b> The OBC is responsible for receiving, processing, and storing telemetry data from the CubeSat’s various subsystems, such as the power distribution system, the communication system, and the payload.

  - <b>Telecommunication actions:</b> The OBC is responsible for managing the CubeSat’s communication systems, including sending and receiving telecommands and telemetry data
to and from the ground station.

  - <b>System Housekeeping:</b> The OBC is responsible for monitoring the health and performance of the CubeSat’s subsystems and for performing any necessary housekeeping tasks, such as data backups and system updates.

  - <b>On-board time synchronization:</b> The OBC is responsible for maintaining accurate timekeeping on the CubeSat, which is crucial for accurate orbit prediction and coordination
of activities.

  - <b>Failure detection, isolation, and recovery:</b> The OBC is responsible for detecting and isolating any failures that occur on the CubeSat, and for initiating recovery procedures to bring the CubeSat back to normal operation.

<b>Requirements for Designing an OBC for a 1U CubeSat</b>

When designing an OBC for a 1U CubeSat, several key requirements must be considered to
ensure that the OBC will be able to perform its functions effectively. It is also important to
consider the use of industry standards such as the CubeSat Design Specification (CDS) and
the CubeSat Bus Standard (CSBS). Adhering to these standards can help ensure that the OBC
is compatible with other CubeSat subsystems and can be easily integrated into the overall
CubeSat design. Another important aspect to consider is the development process, it should
include a detailed requirements analysis, design, implementation, and verification phases.
This process should be carried out with a high degree of collaboration between the different
teams involved in the project, such as the mechanical, electrical, and software teams.
 
 In addition, the OBC hardware and software should be thoroughly tested before launch
to ensure that it will work as intended in the space environment. This includes testing for
radiation tolerance, thermal cycling, vibration, and shock.These requirements include:

  - <b>Processing capability:</b> The OBC must have sufficient processing power to handle the
demands of the CubeSat’s payload and subsystems.

  - <b>Memory:</b> The OBC must have enough memory to store the data generated by the
CubeSat’s payload and subsystems, as well as any housekeeping data.

  - <b>Interoperability and interfacing capabilities:</b> The OBC must be able to interface effectively with the CubeSat’s other subsystems, such as the power distribution system and
the communication system.

  - <b>Reliability of software:</b> The software running on the OBC must be reliable to ensure
that the CubeSat can operate effectively.

  - <b>Power requirements:</b> The OBC must be able to operate within the power constraints of
the CubeSat.

  - <b>Size and weight:</b> The OBC must be small and lightweight enough to fit within the 1U
CubeSat’s mass and volume constraints.

  - <b>Radiation tolerance:</b> The OBC must be able to withstand the harsh radiation environment of space without suffering any damage or degradation in performance.

  - <b>Single point of failure (SPOF):</b> The OBC should be designed in such a way that it is able to withstand a SPOF without compromising the overall functionality of the
CubeSat.

  - <b>Thermal management:</b> The OBC must be able to operate within the CubeSat’s thermal
constraints, which can vary depending on the CubeSat’s orbit and orientation.


  - <b>Power manangement:</b> The OBC must be able to effectively manage the power consump-
tion of the CubeSat’s subsystems, in order to ensure that the CubeSat can operate for
the duration of its mission.

  - <b>Fault tolerance:</b> The OBC must be able to tolerate faults in the CubeSat’s subsystems
and continue to operate effectively.

  - <b>Security:</b> The OBC must be designed with security in mind, to protect the CubeSat
against cyber-attacks and unauthorized access.

<br>

### 2.3.6 Thermal System
<br>


The thermal subsystem in a CubeSat is responsible for managing and regulating the satellite’s
temperature in the harsh environment of space. It ensures that the components and systems
of the CubeSat operate within their temperature limits, preventing overheating or extreme
cold conditions that could impact performance or cause failures. Here are some key aspects
of the thermal subsystem in a CubeSat:

  - <b>Thermal Design:</b> The thermal design of a CubeSat involves determining the heat generation and dissipation characteristics of the onboard systems and components. It includes identifying the critical heat sources, such as electronic components, power systems, and payloads, and designing strategies to manage their thermal loads. Generally, thermal management is done with two different processes and they are discussed below:

    - Passive Thermal Control: Passive thermal control techniques aim to regulate the satellite’s temperature without active components or power consumption. These techniques include:
        - *Insulation*: The CubeSat structure is typically equipped with thermal insulation materials to minimize heat transfer between the internal and external environments Insulation helps maintain a stable temperature inside the satellite.
        - *Radiative Surfaces*: The outer surfaces of the CubeSat structure are often designed with specific coatings or materials that enhance or reduce the emission and absorption of thermal radiation. This helps in managing the heat gain or loss from the satellite.
    - Active Thermal Control: Active thermal control techniques involve the use of active components and mechanisms to actively manage the satellite’s temperature. These techniques include:
        - *Heaters*: Heaters are used to generate controlled amounts of heat in specific areas of the CubeSat. They are employed to prevent components from getting too cold, remove condensation, or maintain optimal operating temperatures.
        - *Heat Sinks and Heat Pipes*: Heat sinks made of thermally conductive materials, such as aluminum or copper, are used to absorb and dissipate heat from high-temperature components. Heat pipes, which are sealed copper pipes containing a working fluid, are also employed to efficiently transfer heat from one location to another within the CubeSat structure.
        - *Temperature Sensors*: Temperature sensors are integrated into various locations inside the CubeSat to monitor the temperature of critical components. This information is used to regulate the active thermal control mechanisms and ensure that temperatures remain within acceptable limits.
   
  - <b>Thermal Coatings:</b> Specialized coatings on the satellite’s surfaces can enhance or reduce
thermal radiation, depending on the specific requirements. For example, selective
coatings can be used to maximize heat absorption from the Sun or minimize heat
emission to space.

  - <b>Thermal Modeling and Analysis:</b> Thermal modeling and analysis are conducted to
simulate the temperature distribution within the CubeSat and identify potential hotspots
or areas of concern. Computer-aided thermal analysis tools are used to evaluate the
impact of different thermal management strategies, validate the thermal design, and
optimize the thermal subsystem.

  - <b>Testing and Verification:</b> The thermal subsystem undergoes rigorous testing to ensure
its effectiveness and reliability. Thermal vacuum testing, where the CubeSat is subjected
to simulated space conditions, allows for the validation of the thermal design and
performance under extreme temperatures.

The thermal subsystem The thermal subsystem is essential for maintaining the proper functioning and longevity
of a CubeSat. By managing the temperature environment, it helps to protect the sensitive
electronics, payloads, and other systems, ensuring their operational integrity and maximizing
the overall mission success.

<br>

### 2.3.7 Payload System
<br>


The payload of a CubeSat refers to the scientific instruments or commercial equipment that
the satellite is designed to carry out its mission. In this chapter, we will discuss the importance
of payloads in CubeSats, the different types of payloads, and the requirements that need to
be followed while designing the payloads and the bus system to integrate them.

It’s important to understand the difference between the payload and the bus system.
The bus system refers to the infrastructure that supports and connects the subsystems that
enable the CubeSat to perform its mission, such as the power system, communication system,
and control system. The payload, however, refers to the specific scientific instruments or
commercial equipment that the CubeSat is designed to carry out its mission. The bus
system provides the necessary support and connection for the payloads to function and
to be integrated into the CubeSat. Payloads play a crucial role in CubeSat missions as
they enable the satellite to perform its intended mission. They can be scientific payloads,
commercial payloads, or technology demonstration payloads that enable us to showcase
various technologies that will be used in the satellites. Designing payloads and the bus
system to integrate them should consider compatibility, size and weight, power requirements,
thermal requirements, data requirements, and safety. A well-designed payload integrated
with a well-designed bus system is essential for the successful operation of a CubeSat.

<b>Types of Payloads</b>

There are several types of payloads that can be integrated into a CubeSat, including:

  - <b>Scientific payloads:</b> These payloads are designed to perform specific scientific experiments or observations. Examples include: cameras for Earth observation, spectrometers for atmospheric studies, and magnetometers for space weather research. 

  - <b>Commerical payoads:</b> These payloads are designed for commercial applications, such
as remote sensing, telecommunications, and navigation. Examples include: high resolution cameras, radar systems, and GPS receivers.

  - <b>Technology demonstration paylaods:</b> These payloads are designed to test and demonstrate new technologies in space. Examples include: advanced propulsion systems and
new materials.

  - <b>Educaation and Outreach Payloads:</b> CubeSats provide a valuable opportunity for educational institutions and organizations to engage students and the public in space-related
activities. These CubeSats may carry payloads designed for educational purposes, such as cameras for capturing images, student-built experiments, or amateur radio equipment fDesign Requirementsor communication.

<b>Design Requirements</b>

When designing the payloads and the bus system to integrate them, it is important to consider
several requirements, some of them are mentioned below:

   Moving forward towards building a nanosatellite, we will be dealing with the design,
fabrication and deployment procedure of the device. First and foremost, integrating the
idea of designing nanosatellites to paper or documentation of the idea is important. For
this, proper structural and electrical design of the components is required. Structural and
electrical design of the nanosatellite comprises predetermined dimensions that are to be used
in building the satellite. The design overview will help in manufacturing the nanosatellite as
we will be able to get a detailed idea about the various components.

<table>
   <tr>
      <td> Compatibility:</td>
      <td>The payloads should be compatible with the bus system and the other subsystems of the CubeSat.</td>
   </tr>
   <tr>
      <td>Size and weight:</td> 
      <td>The payloads should be designed to fit within the size and weight constraints of the CubeSat.</td>
   </tr>
   <tr>
      <td>Power requirements:</td>
      <td>The payloads should be designed to consume an acceptable amount of power, and to be able to operate with the power provided by the bus system.</td>
   </tr>
   <tr>
      <td>Thermal requirements:</td>
      <td>The payloads should be designed to operate within the thermal constraints of the CubeSat, and to not interfere with the thermal control subsystem.</td>
   </tr>
   <tr>
      <td>Data requirements:</td>
      <td>The payloads should be designed to provide the necessary data for the mission, and to be able to communicate with the communication subsystem.</td>
   </tr>
   <tr>
      <td>Safety:</td>
      <td>The payloads should be designed to be safe during launch and operation, and to not interfere with the safety subsystem.</td>
   </tr>
</table>

<div style="position: relative; min-height: 10vh;">
   <p style="position: absolute; width: 100%; text-align: center;">
      Table 2.1: Design requirements of Payload in a CubeSat
   </p>
</div>

<br>

## 2.4 Orbit
<br>

There are different types of CubeSat orbits that can be used for different missions. The altitude, orbital shape, and angle with the equatorial plane are all important parameters that can affect a CubeSat's capabilities and performance. Altitude is a key factor in determining a CubeSat's field of view and ground resolution. A CubeSat in a higher orbit will have a wider field of view but lower resolution, while a CubeSat in a lower orbit will have a higher resolution but a more limited field of view. Inclination is also an important factor in determining a CubeSat's coverage area. A CubeSat in a high inclination orbit will cover a larger geographic area, as it will pass over a greater variety of latitudes. This can be useful for missions that require global coverage, such as Earth observation or weather forecasting. The unique environment of space also provides a wide range of opportunities for scientific research. The microgravity, vacuum, high radiation, ultraviolet radiation, low and high temperatures, and the presence of atomic oxygen and plasma, can be used to conduct experiments in a variety of fields including Earth science, materials science, bioscience, and medical science. The characteristics of space utilization make CubeSats a versatile and cost-effective option for a wide range of missions, and their unique capabilities are continuously expanding as technology and capabilities improve and enhance.

<br>

<div style="text-align: center;">
<img src ="@source/.vuepress/public/images/KP.png" style="text-align: center;">
</div>

<div style="position: relative; min-height: 10vh;">
   <p style="position: absolute; width: 100%; text-align: center;">
      Figure 2.1: Graphical representation of all the Keplerian elements ([6]).
   </p>
</div>
For a CubeSat's mission to work efficiently, designing an apt orbit is a must. The orbit's characteristics mainly depends on the objective or tasks the satellite needs to accomplish. Hence, an effective orbit lets the engineers to position their satellites accordingly. The basic parameters that help us design an effective orbit are called the Keplerian elements. They are a set of parameters used to describe the orbit of a satellite or celestial body around another object, such as a planet or a star. There are six main Keplerian elements:

  - <b>Semi-major axis (a):</b> This element represents half the length of the longest diameter of
the elliptical orbit. It describes the size of the orbit and determines the average distance
between the satellite and the object it is orbiting.

  - <b>Eccentricity (e):</b> Eccentricity measures the shape of the orbit. It tells us how elongated or
circular the orbit is. An eccentricity of 0 represents a perfect circle, while an eccentricity
closer to 1 represents a more elongated orbit.

  - <b>Inclination (i):</b> Inclination is the angle between the orbital plane of the satellite and a
reference plane, usually the equatorial plane of the object being orbited. It determines how tilted the orbit is with respect to the reference plane.
  
  - <b>Right Ascension of the Ascending Node (Ω):</b> This element represents the angle
between the reference direction (usually the vernal equinox) and the point where the
satellite’s orbit crosses the reference plane from below. It defines the orientation of the
orbital plane in space.

  - <b>Argument of Perigee ( ω )</b> The argument of perigee is the angle between the ascending
node and the point of closest approach to the central object, called the perigee. It defines
the orientation of the satellite within its orbit.

  - <b>Mean Anomaly (M):</b> The mean anomaly represents the angular position of the satellite
along its orbit at a specific point in time. It helps determine the satellite’s position
within its orbit based on time.

By combining these elements, we can precisely define the shape, size, and orientation of
an orbit. These elements are used in orbital calculations, mission planning, and tracking
satellites in space. They are fundamental in understanding the motion and behavior of objects
in our solar system and beyond.
<br>

## 2.5 Testing and Analysis
<br>


Testing and analysis are critical for ensuring that a CubeSat structure will withstand the
harsh environment of space, including the launch, on-orbit operations, and reentry. Normally,
once the mission is designed and developed, it is subjected to all sort of tests to see it’s
spaceworthiness. The launchers also require evidences of several tests performed in a satellite
so that the CubeSat is not a liability and doesn’t actively effect the primary payload that it
is hitching the ride from. There are several types of testing and analysis that are typically
required for a 1U CubeSat structure, including:

   - <b>Structural testing:</b> This type of testing is used to verify the structural integrity of
the CubeSat structure and its ability to withstand the loads and vibrations that it
will experience during launch. This includes testing for launch loads, thermal cycles,
vibration, and shock.
   - <b>Fatigue testing:</b> This type of testing is used to verify that the CubeSat structure can
withstand the repeated loads and vibrations it will experience during its lifetime.
   - <b>Thermal testing:</b> This type of testing is used to verify the thermal performance of the
CubeSat structure and its ability to survive the extreme temperatures of space. This
includes testing for solar radiation, conduction, and convection.
   - <b>Material testing:</b> This type of testing is used to verify that the materials used in
the CubeSat structure meet the required mechanical and thermal properties and can
withstand the space environment.
   - <b>Environmental testing:</b> This type of testing is used to verify that the CubeSat structure
can withstand the harsh environment of space, including vacuum, radiation, and
extreme temperatures.
   - <b>Finite Element Analysis (FEA)</b> This type of analysis is used to simulate the loads,
stresses and strains that the CubeSat structure will experience during launch and
operations. This allows for optimization of the design and identification of potential
failure points.
   - <b>Computational Fluid Dynamics (CFD)</b> This type of analysis is used to simulate the
thermal and fluid flow characteristics of the CubeSat structure. This allows for opti-
mization of the thermal design and identification of potential thermal failure points.

It’s important to note that the CubeSat structure should be designed in a way that allows
for easy access for testing, maintenance and repair and also it should be designed in a way
that it can be easily integrated into different payloads or subsystems. In addition to the
testing and analysis mentioned above, there are several other considerations that should be
taken into account when designing a 1U CubeSat structure. These include:

 - *Design margins*: The structure should be designed with adequate margins to ensure
that it can withstand the loads and environments it will experience during launch and
on-orbit operations.
 - *Electromagnetic Interference (EMI)/ Electromagnetic Compatibility (EMC)*: The structure
should be designed to minimize EMI and EMC issues, which can affect the performance
of electronic subsystems.
 - *Outgassing*: The structure should be designed to minimize outgassing, which can
contaminate other spacecraft and instruments.
 - *Mass and volume constraints*: The structure should be designed to be as lightweight
and compact as possible, to maximize the available volume for other subsystems and
payloads.

 - *Compatibility with launch vehicles and dispensers*: The structure should be designed to be
compatible with the launch vehicle and dispenser that will be used for launch.

 - *Cost*: The structure should be designed to minimize costs, while still meeting all of the
requirements for the mission.

 - *Durability*: The structure should be designed to withstand the harsh environment of
space and last for the duration of the mission, taking into account the factors such as
radiation, thermal and mechanical loads.

 - *Space debris*: The structure should be designed to minimize the risk of creating space
debris, by ensuring that all parts remain attached to the CubeSat during launch, ejection
and operation.

 - *Standardization*: The structure should be designed to be compliant with relevant stan-
dards and regulations, such as National Aeronautics and Space Administration (NASA),
Japan Aerospace Exploration Agency (JAXA), European Space Agency (ESA) CubeSat
standards.

Overall, designing a 1U CubeSat structure requires a balance between competing require-
ments, such as mass, volume, cost, and performance. The design process should be iterative,
with multiple rounds of testing and analysis to optimize the design and ensure that it meets
all of the requirements for the mission.
<br>

## 2.6 Recommendations
<br>

Most of satellite mission designers and engineers follow the quote by William of Ockham
while thinking about their satellite mission. In his Summa Totius Logicae [7], William of
Ockham cites the principle of economy, Frustra fit per plura quod potest fieri per pauciora ("It
is futile to do with more things that which can be done with fewer"; Thorburn, 1918, pp.
352–53; Kneale and Kneale, 1962, p. 243.) In other words, it is recommended that we don’t complicate the process of designing just for the sake of designing. It comes to us, the
designers, to ensure that the mission is fairly simple and effective. The redundant systems,
should be kept to minimum. A system with high number of redundant subsystems would
cause nothing but issues in the long haul. One has to be absolutely certain what do they
expect from the mission and how to accomplish it.

The objective of the mission should be known and all the subsystems must be designed
in such a way that fulfills the objective. Most of times, a tradeoff must be made, in order
to manage the expectations from the system. Sometimes the newest or the most advanced
system is not required to get the outcome required from a mission, that is where one has to do
tradeoff where they (the designers) purposefully choose a less advanced system to adhere to
the constraints (SWaP or budgetary or launcher or any other) and make sure the system still
functions perfectly. Also, while designing a mission, one has to also be specifically aware of
the SWaP requirements of CubeSats. Most often, the designers get carried away with the fact
that they are making a satellite and dream big. It is a fair assumption and also the enthusiasm
of making a satellite trumps the realistic situation. One has to be grounded with the fact that
there are fairly less things to be done in a 1U satellite than the conventional satellite. If, that
fact is processed initially, that would also save us from a lot of disappointment in the days of
mission design.

While designing the orbit, one also has to be aware of the launcher requirements and work
with them. An orbit has to be designed in a way that also performs amicably with good
results and also adhere to the launcher’s requirements. That becomes an important part.
Also, depending on the mission, temporal and spatial resolution of the satellite must be also
considered. As orbit also contributes directly to the charging of the batteries (sunfacing time
and eclipse times), that too has to be considered and must be designed in the most feasible
way so that everything works effectively. The ground station passing time and the link budget
also has to be looked into and has to be designed effectively so that the designers encounter
the least disturbances.


</div>