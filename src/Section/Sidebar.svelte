<script>
  import { scrollto } from 'svelte-scrollto';
  import { lang } from '../content.js';
</script>

<div class="sidebar">
  <li role="button" use:scrollto={'#ReportSummary'}>
    {$lang.reportsummaryHeader}
  </li>
  <li role="button" use:scrollto={'#OrganizationChart'}>
    {$lang.organizationchartHeader}
  </li>
  <li role="button" use:scrollto={'#VehicleDesign'}>
    {$lang.vechicledesignHeader}
  </li>
  <li role="button" class="sidebar__smallOne" use:scrollto={'#SystemDesign'}>
    {$lang.systemdesignHeader}
  </li>
  <li
    role="button"
    class="sidebar__smallOne"
    use:scrollto={'#MechanicalDesign'}
  >
    {$lang.mechanicaldesignHeader}
  </li>
  <li
    role="button"
    class="sidebar__smallTwo"
    use:scrollto={'#MechanicalDesignProcess'}
  >
    {$lang.mechanicaldesignprocessHeader}
  </li>
  <li role="button" class="sidebar__smallTwo" use:scrollto={'#Materials'}>
    {$lang.materialsHeader}
  </li>
  <li
    role="button"
    class="sidebar__smallTwo"
    use:scrollto={'#ProductionMethods'}
  >
    {$lang.productionmethodsHeader}
  </li>
  <li
    role="button"
    class="sidebar__smallTwo"
    use:scrollto={'#PhysicalProperties'}
  >
    {$lang.physicalpropertiesHeader}
  </li>
  <li
    role="button"
    class="sidebar__smallOne"
    use:scrollto={'#ElectronicDesign'}
  >
    {$lang.electronicdesignHeader}
  </li>
  <li
    role="button"
    class="sidebar__smallTwo"
    use:scrollto={'#ElectronicDesignProcess'}
  >
    {$lang.electronicdesignprocessHeader}
  </li>
  <li role="button" class="sidebar__smallThree" use:scrollto={'#PowerSupply'}>
    {$lang.powersupplyHeader}
  </li>
  <li role="button" class="sidebar__smallThree" use:scrollto={'#LogicControl'}>
    {$lang.logiccontrolHeader}
  </li>
  <li role="button" class="sidebar__smallThree" use:scrollto={'#Sensors'}>
    {$lang.sensorsHeader}
  </li>
  <li role="button" class="sidebar__smallThree" use:scrollto={'#Communication'}>
    {$lang.communicationHeader}
  </li>
  <li role="button" class="sidebar__smallThree" use:scrollto={'#VisionSystem'}>
    {$lang.visionsystemHeader}
  </li>
  <li role="button" class="sidebar__smallTwo" use:scrollto={'#AlgorithmDesign'}>
    {$lang.algorithmdesignHeader}
  </li>
  <li role="button" class="sidebar__smallTwo" use:scrollto={'#SoftwareDesign'}>
    {$lang.softwaredesignHeader}
  </li>
  <li
    role="button"
    class="sidebar__smallOne"
    use:scrollto={'#ExternalInterfaces'}
  >
    {$lang.externalinterfacesHeader}
  </li>
  <li role="button" use:scrollto={'#Security'}>{$lang.securityHeader}</li>
</div>

<style>
  @media only screen and (min-width: 1281px) {
    .sidebar {
      margin: 0;
      padding: 0;
      width: 30%;
      background-color: #132142;
      position: fixed;
      height: auto;
      overflow: auto;
    }

    .sidebar li {
      display: block;
      color: #fff8e7;
      padding: 2%;
      text-decoration: none;
      cursor: pointer;
    }

    .sidebar li:hover {
      background-color: #17274d;
      color: #ffffff;
    }

    .sidebar__smallOne {
      font-size: 0.9em;
      margin-left: 3%;
    }

    .sidebar__smallTwo {
      font-size: 0.8em;
      margin-left: 6%;
    }

    .sidebar__smallThree {
      font-size: 0.7em;
      margin-left: 9%;
    }
  }
</style>
