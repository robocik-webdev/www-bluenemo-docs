<script>
  let img = 'rsc/images';
</script>

<div class="sidebar">
  <a href="#ReportSummary">1. Report Summary</a>
  <a href="#OrganizationChart">2. Organization Chart and Task Distribution</a>
  <a href="#VehicleDesign">3. Vehicle Design</a>
  <a href="#SystemDesign">3.1 System Design</a>
  <a href="#MechanicalDesign">3.2 Mechanical Design of the Vehicle</a>
  <a href="#MechanicalDesignProcess">3.2.1 Mechanical Design Process</a>
  <a href="#Materials">3.2.2 Materials</a>
  <a href="#ProductionMethods">3.2.3 Production methods</a>
  <a href="#PhysicalProperties">3.2.4 Physical Properties</a>
  <a href="#ElectronicDesign"
    >3.3 Electronic Design, Algorithm and Software Design</a
  >
  <a href="#ElectronicDesignProcess">3.3.1 Electronic Design Process</a>
  <a href="#PowerSupply">3.3.1.1 Power supply</a>
  <a href="#LogicControl">3.3.1.2 Logic control and circuits</a>
  <a href="#Sensors">3.3.1.3 Sensors</a>
  <a href="#Communication">3.3.1.4 Communication</a>
  <a href="#VisionSystem">3.3.1.5 Vision system</a>
  <a href="#AlgorithmDesign">3.3.2. Algorithm Design Process</a>
  <a href="#SoftwareDesign">3.3.3. Software Design Process</a>
  <a href="#ExternalInterfaces">3.4. External Interfaces</a>
  <a href="#Security">Security</a>
</div>

<div class="content">
  <h3 id="ReportSummary">1. Report Summary</h3>
  <p>
    &ensp;&ensp;&ensp;The main objective of the project is to generate
    opportunities for university students to gain experience in the
    implementation of scientific research, practical skills related to the
    deployment of projects, and of course, teamwork. This year's edition of the
    project, launched in October 2020, applies the expertise obtained in the
    2018-2020 projects associated with underwater robotics as well as new
    methods of working in pandemic times developed in 2020. In the currently
    built robot, we've applied a new approach to the robot's kinematics, its
    navigation capabilities have been improved through the use of extensive
    sensory mechanisms, and the external design has been modified as well.
    Despite the transition of communication methods and organization of work to
    a remote model, tasks associated with the project are carried out
    successively and are on track. The whole process is being carried out in
    compliance with safety and sanitary requirements (that includes contact with
    project partners, various tasks, and testing). During this edition, we
    prioritized project, budget, and risk management utilizing management
    methodology tools.
  </p>
  <h3 id="OrganizationChart">2. Organization Chart and Task Distribution</h3>
  <p>
    &ensp;&ensp;&ensp;The Automation and Robotics Science Club "Robocik" has
    been operating at the Faculty of Mechanical Engineering of the Wrocław
    University of Technology since 1997. The PWr Diving Crew project, which
    works with the construction of autonomous and remotely controlled underwater
    vehicles, has been implemented since 2016.<br />&ensp;&ensp;&ensp;The
    organization consists of three technical departments and a marketing
    department. Each of them is managed by leaders whose work is supervised by a
    board of four people. The technical departments are directly controlled by
    the vice president for technical affairs and the marketing department by the
    vice president for marketing and organization. Tasks are planned using the
    Podio platform, which allows you to clearly control the status of their
    execution.
  </p>
  <figure>
    <img src="{img}/diagram_management.png" alt="Organization chart" />
    <figcaption>Fig.1 - Organization Chart</figcaption>
  </figure>
  <h3 id="VehicleDesign">3. Vehicle Design</h3>
  <h4 id="SystemDesign">3.1 System Design</h4>
  <p>??????????????</p>
  <!-- to który render w końcu ???? -->
  <h4 id="MechanicalDesign">3.2 Mechanical Design of the Vehicle</h4>
  <h5 id="MechanicalDesignProcess">3.2.1 Mechanical Design Process</h5>
  <p>
    &ensp;&ensp;&ensp;The robot design process originated with the concept and
    creation of several scheme proposals by members of the design department.
    After collecting several different ideas, the optimal concept was selected.
    The project consisted of a structure based on a cylindrical pressure vessel
    and a skeleton frame, with three transverse boards connected by six buoyancy
    tubes. The design had 8 propelling motors, 4 arranged in the XY level and 4
    in the Z-axis. Further work consisted of designing a pressure tank and frame
    with mounts for engines, batteries, and other equipment. The structure was
    designed in SolidWorks, and then the FEM analysis was performed, which
    confirmed the proper operation of the most vital components. At a later
    stage, we prepared all of the necessary technical documentation. The
    designed robot in four illustrations is presented below.
  </p>
  <figure>
    <img src="rsc/1.jpg" alt="1" />
    <figcaption>Fig.3 - Front view</figcaption>
  </figure>
  <figure>
    <img src="rsc/3.jpg" alt="3" />
    <figcaption>Fig.4 - Top view</figcaption>
  </figure>
  <figure>
    <img src="rsc/4.jpg" alt="4" />
    <figcaption>Fig.5 - Side view</figcaption>
  </figure>
  <figure>
    <img src="rsc/2.jpg" alt="2" />
    <figcaption>Fig.6 - BlueNemo renders</figcaption>
  </figure>
  <h5 id="Materials">3.2.2 Materials</h5>
  <p>
    &ensp;&ensp;&ensp;Various materials were used for the construction of the
    vehicle, depending on the needs. The selection was based on the availability
    of the given material, its ease of processing, as its price-quality ratio.
    The pressure chamber for electronic components will be made of 6060 aluminum
    alloy, which has a tensile strength of 130 MPa and a yield strength R0.2
    equal to 65 MPa. This material can be anodized thoroughly. The simulations
    carried out using the finite element method gave positive results of the
    resistance of this material to hydrostatic pressure.
  </p>
  <figure>
    <img src="{img}/forces_cylinder.png" alt="forces cylinder" />
    <figcaption>
      Fig.7 - The chosen shape and material ensure ample resistance to
      hydrostatic pressure. The maximum stresses at a depth of 100 m are 26.5
      MPa.
    </figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;The front cover will be made of polycarbonate, with
    strength parameters similar to the 6060 aluminum alloy (yield strength R0.2
    in the range of 60 MPa). The re-simulation gives satisfying results:
  </p>
  <figure>
    <img src="{img}/forces_plate.png" alt="forces plate" />
    <figcaption>
      Fig.8 - The chosen shape and material ensure average resistance to
      hydrostatic pressure. The maximum stresses at a depth of 100 m are 59.5
      MPa.
    </figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;The skeleton, i.e. the outer casing of the pressure
    chamber, the fins, and the mechanical gripper will be made of
    polyoxymethylene (POM). This material allows for easy machining, which
    enables obtaining the appropriate values of dimensional and geometric
    tolerances as well as surface roughness, which are crucial to obtain the
    required tightness. In addition, polyoxymethylene is known for its high
    strength and resistance to water conditions. The openings in the transverse
    boards reduce the resistance of the water, ensuring easy movement and
    reducing its weight. Thanks to the ergonomic shape of the frame,
    transporting the vehicle is extremely easy.
  </p>
  <figure>
    <img src="rsc/5.jpg" alt="outer skeleton" />
    <figcaption>
      Fig.9 - The outer skeleton, i.e. the frame of the pressure chamber
    </figcaption>
  </figure>
  <p>
    &ensp;&ensp;&ensp;The remaining vehicle components, such as the claws of the
    mechanical gripper or the inner frame for electronics, will be made of
    plastics (ABS and PLA) using the FDM incremental method (3D printing with
    thermoplastics in a line). ABS is a material that is resistant to external
    conditions and scratches and is resistant to compression and stretching.
    PLA, on the other hand, is a biodegradable material with lower endurance,
    but greater flexibility than ABS.
  </p>
  <figure>
    <img src="{img}/gripper_crossection.jpg" alt="gripper crossection" />
    <figcaption>Fig.10 - Mechanical gripper render</figcaption>
  </figure>

  <!-- inne zdjęcie niż w docxie-->
  <figure>
    <img src="{img}/gripper_with_ball.png" alt="example gripper" />
    <figcaption>Fig.11 - Example use of the gripper</figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;To propel smoothly, the drone uses four "T200 Thruster"
    BLDC motors made by BlueRobotics company. Each of them has a maximum
    throttle of 44N for forward movement and 34N for reverse direction for 14.4V
    battery power. Every module is closed in a compact and sealed housing. The
    piloting is done via the proprietary PCB "ESC BLDC", through PWM signal from
    STM32.
  </p>
  <figure>
    <img src="{img}/rov_thruster.png" alt="rov thruster" />
    <figcaption>Fig.12 - BLDC T200 Thruster.</figcaption>
  </figure>

  <h5 id="ProductionMethods">3.2.3 Production methods</h5>
  <p>
    &ensp;&ensp;&ensp;The majority of the parts, such as the inner electronics
    frame, will be made of ABS or PLA materials. The FDM incremental printing
    method will be used to produce them. This allows for fast production and
    versatility, all while maintaining low costs. Machine elements such as the
    pressure chamber, rear cover, and chokes are made of 6060 aluminum alloy.
    They will be produced with a CNC lathe. This method will be best due to its
    precision, accuracy, repeatability, speed of execution, and low production
    costs. The outer frame made of POM will be milled on a CNC milling machine.
    We won't be limited to the shapes we can make all while maintaining a high
    quality of craftsmanship and low costs.
  </p>

  <h5 id="PhysicalProperties">3.2.4 Physical Properties</h5>
  <p>
    &ensp;&ensp;&ensp;The largest and most important element, which is the
    pressure chamber for electronic components, is 550 mm long and 200 mm in
    diameter. The entire vehicle would fit in a 450x490x625mm cube. The weight
    of the vehicle will be approximately 28 kg. The vehicle will have to have
    positive displacement in order to optimize the power consumption of the
    engines. This solution will also allow for an emergency emersion without
    hindering the submergence.
  </p>
  <h4 id="ElectronicDesign">
    3.3 Electronic Design, Algorithm and Software Design
  </h4>
  <h5 id="ElectronicDesignProcess">3.3.1 Electronic Design Process</h5>
  <p>
    &ensp;&ensp;&ensp;All the equipment classified as electronics is divided
    into individual segments:
  </p>
  <ul>
    <li>power supply,</li>
    <li>logic control and circuits,</li>
    <li>sensors,</li>
    <li>communication,</li>
    <li>vision system</li>
  </ul>
  <p>
    &ensp;&ensp;&ensp;All of these elements combine into a coherent whole, as
    shown in the block diagram below:
  </p>
  <figure>
    <img
      src="{img}/diagram_power_communication.png"
      alt="electronics diagram"
    />
    <figcaption>Fig.13 - Electronics block diagram</figcaption>
  </figure>

  <h6 id="PowerSupply">3.3.1.1 Power supply</h6>
  <p>
    &ensp;&ensp;&ensp;The drone can be powered externally, using 48VDC, or by
    batteries.. For Teknofest purposes, two GRALMarine batteries with a rated
    voltage of 14.4VDC were used. The power supply of logic circuits and
    sensitive peripherals itself requires a stable voltage at appropriate
    levels. To ensure this, three converters are placed on a proprietary PCB,
    generating the following voltages:
  </p>
  <ul>
    <li>12 V - NVIDIA Jetson AGX Xavier power supply</li>
    <li>5 V - STM32, router and switch power supply</li>
    <li>+/-15 V - hydrophone power supply</li>
  </ul>

  <p>
    &ensp;&ensp;&ensp;The brushless motors used in the drone are powered by the
    PCB as shown below
  </p>
  <figure>
    <img src="{img}/board_thrusters.png" alt="powering motors pcb" />
    <figcaption>
      Fig.14 - Proprietary PCB responsible for powering motors (bottom view)
    </figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;It is used to power and control our eight motors by PWM
    signals received from STM32. LC filters were utilized to ensure maximum
    noise filtration. There are also ESC controllers mounted on the PCB, one for
    each BLDC. Due to the fact that four propellers can be supplied with current
    up to 20A in total, bus bars on the main power lines were used
  </p>
  <h6 id="LogicControll">3.3.1.2 Logic control and circuits</h6>
  <p>
    &ensp;&ensp;&ensp;One of the controllers that were utilized in a drone is
    STM32F767ZI with proprietary, dedicated shield “ROV Controller”. Not only is
    it responsible for reading data from BAR02 depth sensor, but also for
    controlling motors with PWM signal. Moreover, thanks to the use of high
    speed optocouplers it provides output isolation, high noise immunity and it
    is capable of working with high frequencies. Source code was written in C,
    using HAL libraries.
  </p>
  <figure>
    <img src="{img}/board_controller.png" alt="board controllers" />
    <figcaption>Fig.15 - “ROV Controller” for STM32F767ZI</figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;When it came to image processing, NVIDIA Jetson AGX Xavier
    16GB was used. Volta architecture with 512 NVIDIA CUDA and 64 Tensores cores
    allow us to implement complex algorithms and software based on neural
    networks such as computer vision and autonomous control. Xavier handles data
    acquired from cameras, DVL, AHRS and hydrophones. It also receives
    information regarding other sensors from STM32 via SPI protocol.
  </p>
  <figure>
    <img src="{img}/board_xavier.png" alt="xavier" />
    <figcaption>Fig.16 - NVIDIA Jetson AGX Xavier render</figcaption>
  </figure>

  <h6 id="Sensors">3.3.1.3 Sensors</h6>
  <p>
    &ensp;&ensp;&ensp;When it came to image processing, NVIDIA Jetson AGX Xavier
    16GB was used. Volta architecture with 512 NVIDIA CUDA and 64 Tensores cores
    allow us to implement complex algorithms and software based on neural
    networks such as computer vision and autonomous control. Xavier handles data
    acquired from cameras, DVL, AHRS and hydrophones. It also receives
    information regarding other sensors from STM32 via SPI protocol.
  </p>
  <figure>
    <img src="{img}/module_dvl.png" alt="wayfinder dvl" />
    <figcaption>Fig.17 - Teledyne Marine "Wayfinder DVL"</figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;An inertial ARHS MTi-30-AHRS sensor by XSENS was applied
    to obtain information about the position, direction of movement, rotation in
    space, speed and acceleration of the boat. The system provides feedback,
    enabling the operation of PID regulators responsible for maintaining the
    direction of travel and the depth of immersion. The hydrophone system (Fig.
    15) is designed to determine the direction from which the acoustic signal
    emitted by the pinger arrives. The algorithm for determining the direction
    was based on the time difference between the signal reaching each of the
    hydrophones. The system consists of two RESON TC4013-1 hydrophones by
    Teledyne Marine placed on a proprietary board. It is used to process the
    signal by subjecting it to bandpass filtration, and then processing it into
    digital data, sent via I2C and I2S protocols to the NVIDIA Jetson AGX Xavier
    platform.
  </p>
  <figure>
    <img src="{img}/board_hydrophones.png" alt="hydrophones modules pcb" />
    <figcaption>
      Fig.18 - Circuit board render of hydrophones modules
    </figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;A Blue Robotics Bar02 sensor was applied for pressure and
    temperature measurements. The Measured pressure is used to determine the
    vehicle’s immersion depth. It can measure up to 10meters in depth (2 bar
    absolute pressure), with ± 2 cm accuracy. Its temperature measurement
    precision is around ± 2°C. The sensor communicates over I2C protocol. For
    altitude measurement and obstacle detection purposes, two Blue Robotics Ping
    sonarsare used in the vehicle. These single-beam echo-sounders can measure
    distances as far as 30meters by sending an ultrasonic acoustic pulse and
    listening back for returning echoes. One of the sonars is attached to the
    front of the robot to sense considerably big objects ahead. The other
    device, placed at the robot’s bottom, measures the distance to the ground.
  </p>
  <h6 id="Communication">3.3.1.4 Communication</h6>
  <p>
    &ensp;&ensp;&ensp;Apart from the use of SPI, I2C, I2S, due to the operating
    environment loaded with numerous sources of electromagnetic interference
    (motors and converters), a robust form of communication was needed.
    Therefore, we decided to use a Controller Area Network which provides
    reliable data transmission by using a differential bus, a message priority
    arbitration system and error detection. A CAN bus consisting of a twisted
    pair of wires has been built into the frame of the boat, with several
    sockets for existing devices. A certain redundancy is also ensured so that
    additional equipment can be implemented non-invasively. The CAN bus connects
    the main onboard microcontroller, with several stand-alone data acquisition
    modules based on STM32, that provide a consistent software interface
    regardless of the individual sensor’s characteristics. Since these devices
    are programmed in a large team, to facilitate cooperation, we decided to
    implement higher layers of network communication, using the CANopen
    protocol.
  </p>
  <h6 id="VisionSystem">3.3.1.5 Vision system</h6>
  <p>
    &ensp;&ensp;&ensp;For image processing, we used four cameras placed on four
    different points on the drone. The main camera, Logitech C922 Pro is located
    inside of an AUV, behind protective plexiglass. Another camera is placed
    near the actuator to provide precise information about the seized items and
    the environment around it. The last camera is pointed towards the bottom and
    informs us about what is happening under the drone. All four cameras are
    connected to Nvidia Xavier via USB interface. Every camera, excluding the
    primary, has its own waterproof case which is attached to the drone frame.
    The drone is illuminated by five LUMEN LIGHT R2 modules. These lights are
    specially constructed to work underwater, capable of operating at depths of
    up to 500m. The light distri-bution angle of 135 degrees and the light
    temperature of 6200K are parameters best fitted for our applications. The
    lighting system emits a total of 7500 Lumens, with a power consumption of
    15W per module.
  </p>
  <figure>
    <img src="{img}/module_led.png" alt="led" />
    <figcaption>Fig.19 - Lumen Light R2 module</figcaption>
  </figure>

  <h5 id="AlgorithmDesign">3.3.2. Algorithm Design Process</h5>
  <p>
    &ensp;&ensp;&ensp;Every task of the competition has a dedicated subprogram
    to fulfill the assigned job. After processing sensors and object recognition
    algorithm data, the program communicates with the movement control unit to
    provide commands of movement. The main goal of the aforementioned object
    recognition section of our program is determining the position of an object
    seen by the onboard camera and determining the relative size of the target
    as well as classifying them. Our main tool for real-time object detection is
    the YOLO network. It was chosen among several other suggestions (namely SSD
    and multiple variants of R-CNN), mostly because it produces the best
    compromise between speed and accuracy and - equally important - it is quick
    to train. It doesn't require a large dataset to train a reliable model. We
    use three sources of images for our training datasets: photos collected
    during various competitions, photos taken during our tests in a pool, and
    computer renders using our custom application based on Unity3D.<br
    />&ensp;&ensp;&ensp;To have an alternative in case of a failure, we also
    prepared some more classical object detection solutions using Hough
    transform and Haar Cascade. They are considerably slower and less reliable
    but can be tuned to different lighting and other environmental conditions
    much faster than neural networks. Furthermore, we experimented with
    reinforcement learning for the training of neural networks which are in full
    control of the entire AUV.
  </p>
  <figure>
    <img src="{img}/camera_gate.png" alt="camera gate" />
    <figcaption>
      Fig.20 - Computer vision examples: gate detection using YOLO and path axis
      detection using OpenCV
    </figcaption>
  </figure>

  <figure>
    <img src="{img}/camera_probably_edge_detection.png" alt="edge detecion" />
    <figcaption>
      Fig.21 - On the left example task code, on the right debug view from the
      virtual machine running it
    </figcaption>
  </figure>

  <h5 id="SoftwareDesign">3.3.3. Software Design Process</h5>
  <p>
    &ensp;&ensp;&ensp;This year we aim for the controller code to be maximally
    modularized and immune to potential programming errors and unexpected
    accidents. The keynote is the Domain-Specific Languages (DSL) concept
    adapted from The Pragmatic Programmer by Andy Hunt and Dave Thomas. With the
    use of Python syntax, we define the language of the declarative task which
    is then evaluated by a virtual machine whose state can be displayed on the
    screen, modified during runtime, and saved or preloaded from a file. The
    result is simpler diagnostics and error handling, completely separated from
    the task code itself. A key element of our software development is also the
    simplification and unification of the communication between Xavier and STM
    units as well as making it resistant to information loss by using the
    circuit redundancy check algorithm.
  </p>
  <figure>
    <img src="{img}/code_drop_marker.png" alt="code" />
    <figcaption>
      Fig.22 - Structure of processing units, programs that they run and
      connected devices
    </figcaption>
  </figure>

  <h4 id="ExternalInterfaces">3.4. External Interfaces</h4>
  <p>
    &ensp;&ensp;&ensp;Most of the logic is implemented as a Python program
    running on top of Ubuntu distribution in our Xavier unit. The low-level code
    interacting with motors and some sensors is performed in C and runs on an
    STM unit. Both processors communicate through the SPI protocol. Furthermore,
    we have a special program that keeps the depth and direction on a specific
    value when it is requested. It uses the PID controller and depth, magnetic
    field, and acceleration data. There are two main parts of the controller
    program: object recognition part (OR) and decision making part (DM).
  </p>
  <figure>
    <img src="{img}/diagram_modules.png" alt="diagram modules" />
    <figcaption>
      Fig.23 - Debug view of the simulation showing exchanged data
    </figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;IIn order to speed up the process of testing and creating
    the software, we created an underwater environment in Unity3D. In order to
    speed up the process of testing and creating the software, we created an
    underwater environment in Unity3D. It can be connected to the controller
    program running on the same personal computer.
  </p>
  <figure>
    <img src="{img}/camera_simulator_debug.png" alt="camera debug view" />
    <figcaption>
      Fig.24 - Samples from the dataset generated by the simulator program
    </figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;The simulator uses NVIDIA PhysX to introduce collisions
    and different water particles that could potentially disrupt the object
    detection.<br />&ensp;&ensp;&ensp;The simulator communicates with the
    controller program through the ML-Agents toolkit. All of the sensors and
    motors of the actual AUV are simulated using various geometric calculations
    and external libraries designed with computer games in mind. This allows us
    to run all of the competition tasks in a very safe and easily available
    environment and to prepare videos of the AUV controller in action from
    various viewpoints without the need for any additional equipment. (Piotr
    Szlęg) Most of the available packages for simulating water buoyancy and
    current did not meet our expectations in terms of efficiency, setup ease,
    and sensible defaults. Therefore, we decided to create our own tailored
    Unity3D module.<br />&ensp;&ensp;&ensp;When it comes to graphics we are
    using Aura 2 library to introduce volumetric lighting, as well as a
    combination of procedural noise, particles, rendering surface distortions,
    and random blurring which results in very realistic effects even in a
    real-time 3D application. The rendering module of our simulator is also used
    to collect data for the training of the object detecting neural network. In
    each frame, our code assembles a new scene from pre-modeled parts, selects
    lighting and water conditions, and then places the AUV and the target. After
    that, it generates a screenshot and a file containing the expected output
    from the object detector. It enables generating a diverse dataset without
    the need to label the data by hand or modify the images to introduce more
    variation.
  </p>
  <figure>
    <img src="{img}/camera_simulator_views.png" alt="camera views" />
    <figcaption>Fig.25 - Structure of the controller web app</figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;In addition to the autonomous mode, BlueNemo has a control
    mode via a modern web application written using the Eel framework on the
    backend and Svelte on the frontend, also adapted to mobile devices. It’s
    connected to BlueNemo through SSH using Paramiko module. Testing individual
    devices and solutions and collecting new data for training neural networks
    is then available.
    <br />&ensp;&ensp;&ensp;There was heavy emphasis on live troubleshooting,
    hence in case of any errors or exceptions user has access to error messages
    and there is a RegEx based message shortener to extract only the valuable
    lines of said error message. It can also be used to run hardware tests
    before launching the vessel.
  </p>
  <figure>
    <img src="{img}/diagram_software_layers.png" alt="diagram soft" />
    <figcaption>Fig.26 - GRALMarine battery specification table</figcaption>
  </figure>

  <p>
    &ensp;&ensp;&ensp;The data is labelled in Computer Vision Annotation Tool
    which works on private server. It allows us to put bounding boxes on video
    frames and export the data in suitable format to train the neural network.
  </p>
  <h3 id="Security">4. Security</h3>
  <p>
    &ensp;&ensp;&ensp;The vehicle will be powered by two GRALMarine batteries
    with the specifications presented in the table below:
  </p>
  <figure>
    <img src="{img}/battery_parameters.png" alt="battery parameters" />
    <figcaption />
  </figure>

  <p>
    &ensp;&ensp;&ensp;The battery body is made of anodized aluminium, lids made
    of plastic.It has a pressure valve in the bottom lid to prevent excessive
    pressure increase inside the container. It also contains one hermetic socket
    on the top lid to connect the head. Sockets are sealed to prevent leaking of
    water inside the container when the plug is not inserted correctly, or the
    socket is not properly secured with a plug. The version with a switch has a
    rotary (on/off) switch to cut off the power of one socket. Batteries were
    tested to a depth of 150 meters.<br /><br />&ensp;&ensp;&ensp;Batteries
    should be stored in a dry, ventilated room at a temperature of -20° C to +
    50° C, away from sources of fire and moisture. Temperatures above + 60 ° C
    may cause the internal accumulation of the battery pack. If the accumulator
    would be stored in cold temperatures, it must be adjusted to the temperature
    + 10 ° C for 4 - 5 hours before use.
    <br /><br />&ensp;&ensp;&ensp;The battery is only to be charged with a
    charger included in the package, with a current that does not exceed 5A, and
    voltage less than 16.8 V. Additionally, we avoid discharging them below the
    level of “zero-power”.
    <br /><br />&ensp;&ensp;&ensp;Before diving, the user should check the
    battery charge level. It is important to check if the reflector plug and the
    socket in the container with the batteries are not soiled or damaged. Insert
    (do not screw in) the head plug into the socket, press it, and make sure
    that the o - rings are in the right places. The user should tighten the nut
    with one’s fingers. Make sure that the second socket (if present in your
    battery model) is secured with a blanking plug and whether it is tightened.<br
    /><br />&ensp;&ensp;&ensp;After diving, the batteries should be dried.
    Always keep the head and battery disconnected to prevent any accidental
    engagement. To ensure the waterproofness of hermetic seats, the reflector
    plug must be inserted and screwed into the battery socket. Immersing the
    container with an open socket or an unscrewed cable plug of the head may
    lead to flooding of the batteries.<br /><br />&ensp;&ensp;&ensp;Each battery
    has its own BMS (Battery Management System) which prevents batteries from
    short-circuit in case of flooding and instantly turns them off.<br /><br
    />&ensp;&ensp;&ensp;In terms of safety, we managed to utilize an emergency
    stop button, which is mounted in an easily accessible place to guarantee
    fast reaction and maximum safety. Its operation is based on detecting the
    presence of a magnetic field generated by a magnet placed in the rotary
    knob. To ensure the highest reliability, two hall sensors connected in
    series were used. This assures that even if one of them fails, the other one
    will be able to turn off the drone.
  </p>
</div>

<style>
  p,
  li,
  figcaption {
    font-size: 0.75em;
  }

  figcaption {
    text-align: center;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .sidebar {
    margin: 0;
    padding: 0;
    width: 300px;
    background-color: #132142;
    position: fixed;
    height: 100%;
    overflow: auto;
  }

  .sidebar a {
    display: block;
    color: #fff8e7;
    padding: 5px;
    text-decoration: none;
  }

  .sidebar a:hover {
    background-color: #17274d;
    color: #ffffff;
  }

  div.content {
    margin-left: 300px;
    margin-right: 250px;
    padding: 1px 5px;
  }
</style>
