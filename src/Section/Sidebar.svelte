<script>
  import { scrollto } from 'svelte-scrollto';
  import { lang } from '../content.js';
</script>

<div class="sidebar">
  <a use:scrollto={'#ReportSummary'}>{$lang.reportsummaryHeader}</a>
  <a use:scrollto={'#OrganizationChart'}>{$lang.organizationchartHeader}</a>
  <a use:scrollto={'#VehicleDesign'}>{$lang.vechicledesignHeader}</a>
  <a class="sidebar__smallOne" use:scrollto={'#SystemDesign'}
    >{$lang.systemdesignHeader}</a
  >
  <a class="sidebar__smallOne" use:scrollto={'#MechanicalDesign'}
    >{$lang.mechanicaldesignHeader}</a
  >
  <a class="sidebar__smallTwo" use:scrollto={'#MechanicalDesignProcess'}
    >{$lang.mechanicaldesignprocessHeader}</a
  >
  <a class="sidebar__smallTwo" use:scrollto={'#Materials'}
    >{$lang.materialsHeader}</a
  >
  <a class="sidebar__smallTwo" use:scrollto={'#ProductionMethods'}
    >{$lang.productionmethodsHeader}</a
  >
  <a class="sidebar__smallTwo" use:scrollto={'#PhysicalProperties'}
    >{$lang.physicalpropertiesHeader}</a
  >
  <a class="sidebar__smallOne" use:scrollto={'#ElectronicDesign'}
    >{$lang.electronicdesignHeader}</a
  >
  <a class="sidebar__smallTwo" use:scrollto={'#ElectronicDesignProcess'}
    >{$lang.electronicdesignprocessHeader}</a
  >
  <a class="sidebar__smallThree" use:scrollto={'#PowerSupply'}
    >{$lang.powersupplyHeader}</a
  >
  <a class="sidebar__smallThree" use:scrollto={'#LogicControl'}
    >{$lang.logiccontrolHeader}</a
  >
  <a class="sidebar__smallThree" use:scrollto={'#Sensors'}
    >{$lang.sensorsHeader}</a
  >
  <a class="sidebar__smallThree" use:scrollto={'#Communication'}
    >{$lang.communicationHeader}</a
  >
  <a class="sidebar__smallThree" use:scrollto={'#VisionSystem'}
    >{$lang.visionsystemHeader}</a
  >
  <a class="sidebar__smallTwo" use:scrollto={'#AlgorithmDesign'}
    >{$lang.algorithmdesignHeader}</a
  >
  <a class="sidebar__smallTwo" use:scrollto={'#SoftwareDesign'}
    >{$lang.softwaredesignHeader}</a
  >
  <a class="sidebar__smallOne" use:scrollto={'#ExternalInterfaces'}
    >{$lang.externalinterfacesHeader}</a
  >
  <a use:scrollto={'#Security'}>{$lang.securityHeader}</a>
</div>

<style>
  @media only screen and (min-width: 1281px) {
    .sidebar {
      margin: 0;
      padding: 0;
      width: 300px;
      background-color: #132142;
      position: fixed;
      height: auto;
      overflow: auto;
    }

    .sidebar a {
      display: block;
      color: #fff8e7;
      padding: 5px;
      text-decoration: none;
      cursor: pointer;
    }

    .sidebar a:hover {
      background-color: #17274d;
      color: #ffffff;
    }

    .sidebar__smallOne {
      font-size: 0.9em;
      margin-left: 10px;
    }

    .sidebar__smallTwo {
      font-size: 0.8em;
      margin-left: 20px;
    }

    .sidebar__smallThree {
      font-size: 0.7em;
      margin-left: 30px;
    }
  }
</style>
