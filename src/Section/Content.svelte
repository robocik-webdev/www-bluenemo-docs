<script>
  import { lang } from '../content.js';
  let img = 'rsc/images';
</script>

<div class="content">
  <h3 id="ReportSummary">{$lang.reportsummaryHeader}</h3>
  <p>{@html $lang.reportsummaryContent}</p>
  <hr />
  <h3 id="OrganizationChart">{$lang.organizationchartHeader}</h3>
  <p>{@html $lang.organizationchartContent}</p>
  <figure>
    <img src="{img}/diagram_management.png" alt="Organization chart" />
    <figcaption>Fig.1 - Organization Chart</figcaption>
  </figure>
  <hr />
  <h3 id="VehicleDesign">{$lang.vechicledesignHeader}</h3>
  <h4 id="SystemDesign">{$lang.systemdesignHeader}</h4>
  <figure>
    <img src="rsc/3.jpg" alt="3" />
    <figcaption>Fig.2 - hopefully its only a tmp img</figcaption>
  </figure>
  <!-- to który render w końcu ???? -->
  <hr />
  <h4 id="MechanicalDesign">{$lang.mechanicaldesignHeader}</h4>
  <h5 id="MechanicalDesignProcess">{$lang.mechanicaldesignprocessHeader}</h5>
  <p>{@html $lang.mechanicaldesignprocessContent}</p>
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
  <hr />
  <h5 id="Materials">{$lang.materialsHeader}</h5>
  <p>{@html $lang.materialsContent1}</p>

  <figure>
    <img src="{img}/forces_cylinder.png" alt="forces cylinder" />
    <figcaption>
      Fig.7 - The chosen shape and material ensure ample resistance to
      hydrostatic pressure. The maximum stresses at a depth of 100 m are 26.5
      MPa.
    </figcaption>
  </figure>

  <p>{@html $lang.materialsContent2}</p>
  <figure>
    <img src="{img}/forces_plate.png" alt="forces plate" />
    <figcaption>
      Fig.8 - The chosen shape and material ensure average resistance to
      hydrostatic pressure. The maximum stresses at a depth of 100 m are 59.5
      MPa.
    </figcaption>
  </figure>

  <p>{@html $lang.materialsContent3}</p>
  <figure>
    <img src="rsc/5.jpg" alt="outer skeleton" />
    <figcaption>
      Fig.9 - The outer skeleton, i.e. the frame of the pressure chamber
    </figcaption>
  </figure>
  <p>{@html $lang.materialsContent4}</p>
  <figure>
    <img src="{img}/gripper_crossection.jpg" alt="gripper crossection" />
    <figcaption>Fig.10 - Mechanical gripper render/ tmp pic?</figcaption>
  </figure>

  <!-- inne zdjęcie niż w docxie-->
  <figure>
    <img src="{img}/gripper_with_ball.png" alt="example gripper" />
    <figcaption>Fig.11 - Example use of the gripper</figcaption>
  </figure>

  <p>{@html $lang.materialsContent5}</p>
  <figure>
    <img src="{img}/rov_thruster.png" alt="rov thruster" />
    <figcaption>Fig.12 - BLDC T200 Thruster.</figcaption>
  </figure>

  <hr />
  <h5 id="ProductionMethods">{$lang.productionmethodsHeader}</h5>
  <p>{@html $lang.productionmethodsContent}</p>

  <hr />
  <h5 id="PhysicalProperties">{$lang.physicalpropertiesHeader}</h5>
  <p>{@html $lang.physicalpropertiesContent}</p>
  <hr />
  <h4 id="ElectronicDesign">
    {$lang.electronicdesignHeader}
  </h4>
  <h5 id="ElectronicDesignProcess">{$lang.electronicdesignprocessHeader}</h5>
  <p>{@html $lang.electronicdesignprocessContent1}</p>
  <ul>
    <li>{@html $lang.electronicdesignprocessList1}</li>
    <li>{@html $lang.electronicdesignprocessList2}</li>
    <li>{@html $lang.electronicdesignprocessList3}</li>
    <li>{@html $lang.electronicdesignprocessList4}</li>
    <li>{@html $lang.electronicdesignprocessList5}</li>
  </ul>
  <p>{@html $lang.electronicdesignprocessContent2}</p>
  <figure>
    <img
      src="{img}/diagram_power_communication.png"
      alt="electronics diagram"
    />
    <figcaption>Fig.13 - Electronics block diagram</figcaption>
  </figure>
  <hr />
  <h6 id="PowerSupply">{$lang.powersupplyHeader}</h6>
  <p>{@html $lang.powersupplyContent1}</p>
  <ul>
    <li>{@html $lang.powersupplyList1}</li>
    <li>{@html $lang.powersupplyList2}</li>
    <li>{@html $lang.powersupplyList3}</li>
  </ul>

  <p>{@html $lang.powersupplyContent2}</p>
  <figure>
    <img src="{img}/board_thrusters.png" alt="powering motors pcb" />
    <figcaption>
      Fig.14 - Proprietary PCB responsible for powering motors (bottom view)
    </figcaption>
  </figure>

  <p>{@html $lang.powersupplyContent3}</p>
  <hr />
  <h6 id="LogicControll">{$lang.logiccontrolHeader}</h6>
  <p>{@html $lang.logiccontrolContent1}</p>
  <figure>
    <img src="{img}/board_controller.png" alt="board controllers" />
    <figcaption>Fig.15 - “ROV Controller” for STM32F767ZI</figcaption>
  </figure>

  <p>{@html $lang.logiccontrolContent2}</p>
  <figure>
    <img src="{img}/board_xavier.png" alt="xavier" />
    <figcaption>Fig.16 - NVIDIA Jetson AGX Xavier render</figcaption>
  </figure>
  <hr />
  <h6 id="Sensors">{$lang.sensorsHeader}</h6>
  <p>{@html $lang.sensorsContent1}</p>
  <figure>
    <img src="{img}/module_dvl.png" alt="wayfinder dvl" />
    <figcaption>Fig.17 - Teledyne Marine "Wayfinder DVL"</figcaption>
  </figure>

  <p>{@html $lang.sensorsContent2}</p>
  <figure>
    <img src="{img}/board_hydrophones.png" alt="hydrophones modules pcb" />
    <figcaption>
      Fig.18 - Circuit board render of hydrophones modules
    </figcaption>
  </figure>

  <p>{@html $lang.sensorsContent3}</p>
  <hr />
  <h6 id="Communication">{$lang.communicationHeader}</h6>
  <p>{@html $lang.communicationContent}</p>
  <hr />
  <h6 id="VisionSystem">{$lang.visionsystemHeader}</h6>
  <p>{@html $lang.visionsystemContent}</p>
  <figure>
    <img src="{img}/module_led.png" alt="led" />
    <figcaption>Fig.19 - Lumen Light R2 module</figcaption>
  </figure>
  <hr />
  <h5 id="AlgorithmDesign">{$lang.algorithmdesignHeader}</h5>
  <p>{@html $lang.algorithmdesignContent}</p>
  <figure>
    <img src="{img}/camera_gate.png" alt="camera gate" />
    <img src="{img}/camera_probably_edge_detection.png" alt="edge detecion" />
    <figcaption>
      Fig.20 - Computer vision examples: gate detection using YOLO and path axis
      detection using OpenCV
    </figcaption>
  </figure>
  <hr />
  <h5 id="SoftwareDesign">{$lang.softwaredesignHeader}s</h5>
  <p>{@html $lang.softwaredesignContent}</p>
  <figure>
    <img src="{img}/code_drop_marker.png" alt="code" />

    <figcaption>
      Fig.21 - On the left example task code, on the right debug view from the
      virtual machine running it
    </figcaption>
  </figure>
  <hr />
  <h4 id="ExternalInterfaces">{$lang.externalinterfacesHeader}</h4>
  <p>{@html $lang.externalinterfacesContent1}</p>
  <figure>
    <img src="{img}/diagram_modules.png" alt="diagram modules" />
    <figcaption>
      Fig.22 - Structure of processing units, programs that they run and
      connected devices
    </figcaption>
  </figure>

  <p>{@html $lang.externalinterfacesContent2}</p>
  <figure>
    <img src="{img}/camera_simulator_debug.png" alt="camera debug view" />
    <figcaption>
      Fig.23 - Debug view of the simulation showing exchanged data
    </figcaption>
  </figure>

  <p>{@html $lang.externalinterfacesContent3}</p>
  <figure>
    <img src="{img}/camera_simulator_views.png" alt="camera views" />
    <figcaption>
      Fig.24 - Samples from the dataset generated by the simulator program
    </figcaption>
  </figure>

  <p>{@html $lang.externalinterfacesContent4}</p>
  <figure>
    <img src="{img}/diagram_software_layers.png" alt="diagram soft" />
    <figcaption>Fig.25 - Structure of the controller web app</figcaption>
  </figure>

  <p>{@html $lang.externalinterfacesContent5}</p>
  <hr />
  <h3 id="Security">{$lang.securityHeader}</h3>
  <p>{@html $lang.securityContent1}</p>
  <figure>
    <img src="{img}/battery_parameters.png" alt="battery parameters" />
    <figcaption>Fig.26 - GRALMarine battery specification table</figcaption>
  </figure>

  <p>{@html $lang.securityContent2}</p>
</div>

<style>
  @media only screen and (min-width: 1281px) {
    p,
    li,
    figure {
      font-size: 0.75em;
    }

    p,
    li {
      margin-left: 3%;
    }

    figure {
      margin: 7% 0 7% 0;
    }

    figcaption {
      margin-top: 1.5%;
      text-align: center;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }

    div.content {
      margin-left: 30%;
      margin-right: 30%;
      padding: 0.5% 1.5px;
    }
  }
</style>
