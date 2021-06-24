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
  .sidebar {
    z-index: 1;
    overflow-x: hidden;
    width: 280px;
    height: 100%;
    background-color: var(--background-color);
    position: fixed;
    overflow: auto;
  }

  .sidebar-test {
    padding: 20px 0px 20px 0px;
    margin-top: 10px;
  }

  .sidebar li {
    padding:10px;
    display: block;
    color: var(--text-color);
    text-decoration: none;
    cursor: pointer;
  }

  .sidebar li:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  .sidebar__smallOne {
    font-size: 0.9em;
    padding-left: 3% !important;
  }

  .sidebar__smallTwo {
    font-size: 0.8em;
    padding-left: 6% !important;
  }

  .sidebar__smallThree {
    font-size: 0.7em;
    padding-left: 9% !important;
  }

  @media (max-width: 1000px) {
    .sidebar {
      width: 100%;
      transition-duration: 500ms;
      transform: translateX(100%);
      height: 100%;
    }
    .sidebar.opened {
      transform: translateX(0);
    }

    .sidebar li {
      overflow: auto;
    }
  }
</style>
