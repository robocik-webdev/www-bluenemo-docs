<script>
  import { scrollto } from 'svelte-scrollto';
  import { lang } from '../content.js';
  import { hidden } from '../header.js';
  import { opened } from '../sidebar.js';

  $: if ($hidden) $opened = false;

  function showSidebar() {
    $opened = !$opened;
  }
</script>

<img class="lenny" src="rsc/tmp.png" alt="( ͡° ͜ʖ ͡°)" on:click={showSidebar} />

<div class="sidebar" class:opened={$opened} on:click={showSidebar}>
  <div class="sidebar-test">
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
    <li
      role="button"
      class="sidebar__smallThree"
      use:scrollto={'#LogicControl'}
    >
      {$lang.logiccontrolHeader}
    </li>
    <li role="button" class="sidebar__smallThree" use:scrollto={'#Sensors'}>
      {$lang.sensorsHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallThree"
      use:scrollto={'#Communication'}
    >
      {$lang.communicationHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallThree"
      use:scrollto={'#VisionSystem'}
    >
      {$lang.visionsystemHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      use:scrollto={'#AlgorithmDesign'}
    >
      {$lang.algorithmdesignHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      use:scrollto={'#SoftwareDesign'}
    >
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
</div>

<style>
  @media (min-width: 1025px) {
    .sidebar {
      margin-top: 32px;
      padding: 0;
      width: 25%;
      background-color: var(--background-color);
      position: fixed;
      height: auto;
      overflow: auto;
    }

    .sidebar li {
      display: block;
      color: var(--text-color);
      padding: 2%;
      text-decoration: none;
      cursor: pointer;
    }

    .sidebar li:hover {
      background-color: #17274d;
      color: #ffffff;
    }

    .sidebar-test {
      padding-left: 20px;
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

    .lenny {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    .sidebar {
      padding: 0;
      width: 100%;
      background-color: var(--background-color);
      position: fixed;
      overflow: auto;
      transition-duration: 500ms;
      transform: translateX(-100%);
      height: 100%;
    }
    .opened {
      transform: translateX(0);
    }

    .sidebar li {
      display: block;
      color: var(--text-color);
      padding: 1%;
      text-decoration: none;
      cursor: pointer;
      margin-right: 25%;
      overflow: auto;
    }

    .sidebar li:hover {
      background-color: var(--text-color);
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

    .lenny {
      position: fixed;
      height: 5%;
      width: 15%;
    }
  }
</style>
