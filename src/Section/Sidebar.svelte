<script>
  import { scrollto } from '../utils.js';
  import { lang } from '../content.js';
  import { hidden } from '../header.js';
  import { opened, picState } from '../sidebar.js';

  $: if ($hidden) $opened = false;

  function showSidebar() {
    $opened = !$opened;
    $picState = !$opened ? './rsc/Logo/menu.svg' : './rsc/Logo/close.svg';
  }

  let sidebar = [
    'ReportSummary',
    'OrganizationChart',
    'VehicleDesign',
    'SystemDesign',
    'MechanicalDesign',
    'MechanicalDesignProcess',
    'Materials',
    'ProductionMethods',
    'PhysicalProperties',
    'ElectronicDesign',
    'ElectronicDesignProcess',
    'PowerSupply',
    'LogicControl',
    'Sensors',
    'Communication',
    'VisionSystem',
    'AlgorithmDesign',
    'SoftwareDesign',
    'ExternalInterfaces',
    'Security',
    'Experience',
  ];
</script>

<div class="wrapper" class:opened={$opened} on:click={showSidebar}>
  <div class="sidebar">
    <li
      role="button"
      on:click={() => {
        scrollto('#' + sidebar[0]);
      }}
    >
      {$lang.reportsummaryHeader}
    </li>
    <li
      role="button"
      on:click={() => {
        scrollto('#' + sidebar[1]);
      }}
    >
      {$lang.organizationchartHeader}
    </li>
    <li
      role="button"
      on:click={() => {
        scrollto('#' + sidebar[2]);
      }}
    >
      {$lang.vechicledesignHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallOne"
      on:click={() => {
        scrollto('#' + sidebar[3]);
      }}
    >
      {$lang.systemdesignHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallOne"
      on:click={() => {
        scrollto('#' + sidebar[4]);
      }}
    >
      {$lang.mechanicaldesignHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      on:click={() => {
        scrollto('#' + sidebar[5]);
      }}
    >
      {$lang.mechanicaldesignprocessHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      on:click={() => {
        scrollto('#' + sidebar[6]);
      }}
    >
      {$lang.materialsHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      on:click={() => {
        scrollto('#' + sidebar[7]);
      }}
    >
      {$lang.productionmethodsHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      on:click={() => {
        scrollto('#' + sidebar[8]);
      }}
    >
      {$lang.physicalpropertiesHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallOne"
      on:click={() => {
        scrollto('#' + sidebar[9]);
      }}
    >
      {$lang.electronicdesignHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      on:click={() => {
        scrollto('#' + sidebar[10]);
      }}
    >
      {$lang.electronicdesignprocessHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallThree"
      on:click={() => {
        scrollto('#' + sidebar[11]);
      }}
    >
      {$lang.powersupplyHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallThree"
      on:click={() => {
        scrollto('#' + sidebar[12]);
      }}
    >
      {$lang.logiccontrolHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallThree"
      on:click={() => {
        scrollto('#' + sidebar[13]);
      }}
    >
      {$lang.sensorsHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallThree"
      on:click={() => {
        scrollto('#' + sidebar[14]);
      }}
    >
      {$lang.communicationHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallThree"
      on:click={() => {
        scrollto('#' + sidebar[15]);
      }}
    >
      {$lang.visionsystemHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      on:click={() => {
        scrollto('#' + sidebar[16]);
      }}
    >
      {$lang.algorithmdesignHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallTwo"
      on:click={() => {
        scrollto('#' + sidebar[17]);
      }}
    >
      {$lang.softwaredesignHeader}
    </li>
    <li
      role="button"
      class="sidebar__smallOne"
      on:click={() => {
        scrollto('#' + sidebar[18]);
      }}
    >
      {$lang.externalinterfacesHeader}
    </li>
    <li
      role="button"
      on:click={() => {
        scrollto('#' + sidebar[19]);
      }}
    >
      {$lang.securityHeader}
    </li>

    <li
      role="button"
      on:click={() => {
        scrollto('#' + sidebar[20]);
      }}
    >
      {$lang.experienceHeader}
    </li>
  </div>
</div>

<style>
  .wrapper {
    overflow-y: auto;
    flex: left;
    position: fixed;
    width: 280px;
    height: calc(100% - 55px);
    background-color: var(--background-color);
    transition: transform 400ms;
  }

  .sidebar {
    overflow-y: auto;
    padding: 55px 0;
  }

  .sidebar li {
    display: block;
    margin: auto;
    padding: 3px 10px;
    display: flex;
    color: var(--text-color);
    text-decoration: none;
    cursor: pointer;
  }

  .sidebar li:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  .sidebar__smallOne {
    padding-left: 3% !important;
  }

  .sidebar__smallTwo {
    padding-left: 6% !important;
  }

  .sidebar__smallThree {
    padding-left: 9% !important;
  }

  @media (max-width: 1000px) {
    .wrapper {
      width: 100%;
      transform: translateX(100%);
    }

    .wrapper.opened {
      transform: translateX(0);
    }

    .sidebar {
      padding: 10px 0;
    }
  }
</style>
